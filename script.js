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

  if (score >= 90) {
    rank = "Sランク";
    message = "理想的なイケオジ状態です。今の習慣を続けましょう。";
  } else if (score >= 75) {
    rank = "Aランク";
    message = "かなり良好です。髪・肌・服装を少し整えるとさらに印象が上がります。";
  } else if (score >= 60) {
    rank = "Bランク";
    message = "改善余地ありです。まずは朝の身だしなみ習慣から始めましょう。";
  } else if (score >= 40) {
    rank = "Cランク";
    message = "生活習慣の見直しが必要です。運動・睡眠・清潔感を優先しましょう。";
  } else {
    rank = "Dランク";
    message = "まずは小さな一歩から。鏡を見る、髪を整える、散歩する。この3つから始めましょう。";
  }

  document.getElementById("result").innerHTML =
    `診断結果：${score}点<br>${rank}<br><br>${message}`;
}

function freeAdvice() {
  const text = document.getElementById("freeText").value;
  const advice = document.getElementById("advice");

  if (!text) {
    advice.innerHTML = "悩みを書いてください。";
    return;
  }

  let answers = [];

  if (text.includes("薄毛") || text.includes("髪")) {
    answers.push("薄毛や髪の悩みは、隠すより整えることが大切です。短髪化と頭皮ケアから始めましょう。");
  }

  if (text.includes("体力") || text.includes("疲れ") || text.includes("運動")) {
    answers.push("体力面は、まず毎日10〜15分の散歩からで十分です。継続が最優先です。");
  }

  if (text.includes("定年") || text.includes("仕事") || text.includes("不安")) {
    answers.push("定年後の不安には、収入だけでなく『毎日の役割』を作ることが重要です。");
  }

  if (text.includes("妻") || text.includes("夫婦") || text.includes("家族")) {
    answers.push("家族関係では、会話量よりも感謝の言葉を増やすことから始めましょう。");
  }

  if (text.includes("孤独") || text.includes("友人") || text.includes("寂しい")) {
    answers.push("孤独感には、趣味コミュニティや週1回の外出予定を作ることが効果的です。");
  }

  if (answers.length === 0) {
    answers.push("まず悩みを一つに絞りましょう。見た目・健康・家族・仕事・孤独のどれが一番重いかを決めることが第一歩です。");
  }

  advice.innerHTML = answers.join("<br><br>");
}
