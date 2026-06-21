function freeAdvice() {

  const text = document.getElementById("freeText").value;
  const advice = document.getElementById("advice");

  if (!text) {
    advice.innerHTML = "悩みを入力してください。";
    return;
  }

  let result = "";

  if (text.includes("薄毛") || text.includes("髪")) {

    result =
    "あなたの今日の一歩<br><br>" +
    "髪を隠すより整えることを優先しましょう。<br>" +
    "明日は鏡の前で3分だけ髪型を確認してください。";

  } else if (
    text.includes("体力") ||
    text.includes("疲れ") ||
    text.includes("運動")
  ) {

    result =
    "あなたの今日の一歩<br><br>" +
    "運動は量より継続です。<br>" +
    "今日は10分だけ散歩してみましょう。";

  } else if (
    text.includes("定年") ||
    text.includes("仕事") ||
    text.includes("将来")
  ) {

    result =
    "あなたの今日の一歩<br><br>" +
    "将来の不安は行動でしか減りません。<br>" +
    "今後やりたい事を3つ書き出してみましょう。";

  } else if (
    text.includes("妻") ||
    text.includes("夫婦") ||
    text.includes("家族")
  ) {

    result =
    "あなたの今日の一歩<br><br>" +
    "問題解決より会話が先です。<br>" +
    "今日は感謝を一言だけ伝えてみましょう。";

  } else {

    result =
    "あなたの今日の一歩<br><br>" +
    "悩みを一つに絞ってください。<br>" +
    "まずは今週改善したい事を一つ決めましょう。";

  }

  advice.innerHTML = result;
}
