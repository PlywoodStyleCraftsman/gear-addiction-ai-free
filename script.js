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
