function diagnose() {
  const value = document.getElementById("question").value;
  const result = document.getElementById("result");

  if (!value) {
    result.innerHTML = "悩みを選択してください";
    return;
  }

  const advice = {
    "見た目が老けた":
      "清潔感改善から始めましょう。髪・眉・肌の3点だけで印象は大きく変わります。",
    "薄毛が気になる":
      "短髪化と頭皮ケアを優先してください。隠すより整える方が好印象です。",
    "体力が落ちた":
      "まずは毎日15分の散歩から始めましょう。",
    "定年後が不安":
      "収入よりも『毎日の役割』を作ることが重要です。",
    "夫婦関係が難しい":
      "会話量より感謝の回数を増やしてみましょう。",
    "友人が減った":
      "趣味コミュニティに参加すると新しいつながりが生まれます。"
  };

  result.innerHTML = advice[value];
}
