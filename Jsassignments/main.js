$(document).ready(function(){
  // ①ページ読み込み時に実行したい処理
  let average;
  let judge;
  let rank;　
  let subject_points;

  function score_indicate(){
    subject_points = [Number($('#national_language').val()),
    // ④val()メソッドを使ってvalue値を変更する
    // ⑤数値に変換する
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let sum = subject_points.reduce((a,b) => a+=b,0);
    // let sum = subject_points[0];
    // sum = sum + subject_points[1];
    // sum = sum + subject_points[2];
    // sum = sum + subject_points[3];
    // sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);
// ⑥（sum）で保持しているテキスト情報を出力する
    // ここに、上記を参考にして平均点を出力する処理を書き
    average = sum / subject_points.length;
    $("#average_indicate").text(average);
  };

    function get_achievement(){
      // ここに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
      if(average >= 80){
        return "A";
      } else if(average >= 60){
        return "B";
      } else if(average >= 40){
        return "B";
      } else {
        return "D";
      }
    };

  function get_pass_or_failure(){
    // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む
    judge = "合格"
    for(let i=0; i<subject_points.length ; i++){
      if(subject_points[i]<60){
        judge= "不合格";
        break;
      }
    }
    return judge;
  }

  function judgement(){
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    $('#alert-indicate').remove();
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${rank}です。${judge}です</label>`);
// ⑦append()内の要素を追加する
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
    // ③function()に値が変更されたときの処理を記述する
  });

  $('#btn-evaluation').click(function() {
    // ②クリックをした場合、btn-evaluationにfunctionの中身が実行される
    rank = get_achievement();
    $('#evaluation').text(rank);
  });

  $('#btn-judge').click(function() {
    judge = get_pass_or_failure();
    $('#judge').text(judge);
  });

  $('#btn-declaration').click(function() {
    judgement();
  });
});
