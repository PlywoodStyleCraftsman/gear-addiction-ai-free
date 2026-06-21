const questions = [
  { text: "鏡を見る頻度は？", category: "見た目" },
  { text: "髪型を整えていますか？", category: "見た目" },
  { text: "ヒゲの手入れは？", category: "見た目" },
  { text: "肌の手入れは？", category: "見た目" },
  { text: "薄毛が気になりますか？", category: "見た目" },
  { text: "白髪は気になりますか？", category: "見た目" },
  { text: "ヒゲは清潔に見えますか？", category: "見た目" },
  { text: "体重管理はできていますか？", category: "健康" },
  { text: "運動していますか？", category: "健康" },
  { text: "睡眠は十分ですか？", category: "健康" },
  { text: "疲れやすいですか？", category: "健康" },
  { text: "服を整えていますか？", category: "見た目" },
  { text: "サイズの合う服を着ていますか？", category: "見た目" },
  { text: "靴はきれいですか？", category: "見た目" },
  { text: "友人と会っていますか？", category: "人間関係" },
  { text: "趣味仲間はいますか？", category: "人間関係" },
  { text: "家族との会話はありますか？", category: "人間関係" },
  { text: "今後やりたい事がありますか？", category: "生きがい" },
  { text: "毎日の楽しみはありますか？", category: "生きがい" },
  { text: "今の自分は好きですか？", category: "生きがい" }
];

const box = document.getElementById("questions");

questions.forEach((q, i) => {
  box.innerHTML += `
    <div class="question">
      <p>Q${i + 1}. ${q.text}</p>
      <select id="q${i}">
        <option value="0">選択してください</option>
        <option value="5">良い（5点）</option>
        <option value="3">まあまあ（3点）</option>
        <option value="1">改善したい（1点）</option>
      </select>
    </div>
  `;
});

function showResult() {
  
 gtag('event', 'diagnosis_completed');
  
  let score = 0;

  const categoryScores = {
    "見た目": 0,
    "健康": 0,
    "人間関係": 0,
    "生きがい": 0
  };

  const categoryCounts = {
    "見た目": 0,
    "健康": 0,
    "人間関係": 0,
    "生きがい": 0
  };

  for (let i = 0; i < questions.length; i++) {
    const value = Number(document.getElementById(`q${i}`).value);
    score += value;

    const category = questions[i].category;
    categoryScores[category] += value;
    categoryCounts[category]++;
  }

  const categoryRates = Object.keys(categoryScores).map(category => {
    const max = categoryCounts[category] * 5;
    const rate = Math.round((categoryScores[category] / max) * 100);

    return {
      category,
      rate
    };
  });

  categoryRates.sort((a, b) => a.rate - b.rate);

  const weakPoints = categoryRates.slice(0, 3);

  let rank = "";
  let message = "";
  let step = "";

  if (score >= 90) {
    rank = "Sランク";
    message = "理想的なイケオジ状態です。";
    step = "今の習慣を1つ記録して、明日も続ける。";
  } else if (score >= 75) {
    rank = "Aランク";
    message = "かなり良好です。";
    step = "明日の朝、髪・眉・服装を3分だけ確認する。";
  } else if (score >= 60) {
    rank = "Bランク";
    message = "改善余地ありです。";
    step = "明日の朝、鏡の前で3分だけ身だしなみを整える。";
  } else if (score >= 40) {
    rank = "Cランク";
    message = "生活習慣の見直しが必要です。";
    step = "今日は10分だけ散歩する。";
  } else {
    rank = "Dランク";
    message = "まずは小さな一歩から始めましょう。";
    step = "明日の朝、鏡を見ることから始める。";
  }

  document.getElementById("result").innerHTML =
    `診断結果：${score}点<br><br>
     ${rank}<br><br>
     ${message}<br><br>
     あなたの弱点<br><br>
     ① ${weakPoints[0].category}<br>
     ② ${weakPoints[1].category}<br>
     ③ ${weakPoints[2].category}<br><br>
     今日の一歩<br><br>
     ${step}`;
}
