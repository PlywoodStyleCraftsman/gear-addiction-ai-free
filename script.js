const questions = [
  "鏡を見る頻度は？",
  "髪型を整えていますか？",
  "ヒゲの手入れは？",
  "肌の手入れは？",
  "薄毛が気になりますか？",
  "白髪は気になりますか？",
  "ヒゲは清潔に見えますか？",
  "体重管理はできていますか？",
  "運動していますか？",
  "睡眠は十分ですか？",
  "疲れやすいですか？",
  "服を整えていますか？",
  "サイズの合う服を着ていますか？",
  "靴はきれいですか？",
  "友人と会っていますか？",
  "趣味仲間はいますか？",
  "家族との会話はありますか？",
  "今後やりたい事がありますか？",
  "毎日の楽しみはありますか？",
  "今の自分は好きですか？"
];

const box = document.getElementById("questions");

questions.forEach((q, i) => {
  box.innerHTML += `
    <div class="question">
      <p>Q${i + 1}. ${q}</p>
      <select id="q${i}">
        <option value="0">選択してください</option>
        <option value="5">良い</option>
        <option value="3">普通</option>
        <option value="1">改善したい</option>
      </select>
    </div>
  `;
});

function showResult() {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    score += Number(document.getElementById(`q${i}`).value);
  }

  let rank = "";
  let message = "";
  let step = "";

  if (score >= 90) {
    rank = "Sランク";
    message = "理想的なイケオジ状態です。";
    step = "今の習慣を1つだけ記録して、明日も続ける。";
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
     今日の一歩<br><br>
     ${step}`;
}
