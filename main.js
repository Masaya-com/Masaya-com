


"use strict";

{
  const quiz = [
    {
      question: "和白小学校の前を流れる川の名前は？",
      answers: [
        "五反田川",
        "五丁川",
        "五明川",
        "五万川",
      ],
      correct: "五丁川"
    },
    {
      question: "和白小学校は通称何学校と呼ばれている？",
      answers: [
        "クジラ学校",
        "シャケ学校",
        "イルカ学校",
        "タコ学校",
      ],
      correct: "クジラ学校"
    },
    {
      question: "和白小学校には近年ではめずらしい木がたくさん生えているがそれは何の木？",
      answers: [
        "みかん",
        "りんご",
        "さくら",
        "まつ",
      ],
      correct: "まつ"
    },
    {
      question: "和白中学校は和白小学校、三苫小学校とあと何小学校の学生が集まる学校？",
      answers: [
        "西戸崎",
        "志賀島",
        "新宿",
        "奈多",
      ],
      correct: "奈多"
    },
    {
      question: "和白小学校は２０２３年に創立何周年を迎えた？",
      answers: [
        "１００周年",
        "１５０周年",
        "２００周年",
        "１３０周年",
      ],
      correct: "１５０周年"
    },
    {
      question: "和白小学校１４０周年記念時に来校した有名人は？",
      answers: [
        "本田圭佑",
        "松田宣浩",
        "市原隼人",
        "今宮健太",
      ],
      correct: "松田宣浩"
    },
  ];
  const quizLength = quiz.length;
  let quizIndex = 0; // インクリメント可能にするためにletを使用
  let score = 0;


  const main = document.getElementById("main_inner");
  const fin = document.getElementById("finish");
  const start = document.getElementById("start");


  const questionSet = () => {
    // 質問を更新する関数
    if (quizIndex < quizLength) {
      document.getElementById("question").innerText = quiz[quizIndex].question;
      document.getElementById("one").innerText = quiz[quizIndex].answers[0];
      document.getElementById("two").innerText = quiz[quizIndex].answers[1];
      document.getElementById("three").innerText = quiz[quizIndex].answers[2];
      document.getElementById("four").innerText = quiz[quizIndex].answers[3];
    } else {
      // ここでmainを消して再スタート画面を表示
      main.style.display = "none";
      document.getElementById("fin_com").innerText = "クイズが終了しました！あなたの正解数は" + score + "/" + quizLength + "です！";
      fin.style.display = "block";
      document.getElementById("fin_but").addEventListener("click", () => {
        fin.style.display = "none";
        start.style.display = "block";
        quizIndex = 0;
        score = 0;
      });
    }
  };



  start.addEventListener("click", () => {
    start.style.display = "none";
    questionSet();
    main.style.display = "block";
  });

  const answerButtons = document.querySelectorAll("#main_inner button");
  const $answer = document.getElementById("answer");

  answerButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      const selectedAnswer = event.target.innerText;
      main.style.display = "none";

      if (selectedAnswer === quiz[quizIndex].correct) {
        $answer.innerText = "正解！";
        $answer.style.color = "red";
        score++;
      } else {
        $answer.innerText = "不正解！";
        $answer.style.color = "blue";
      }

      document.getElementById("main_next_inner").style.display = "block";
    });
  });

  document.getElementById("next").addEventListener("click", () => {
    document.getElementById("main_next_inner").style.display = "none";
    quizIndex++; // 次の質問に進む
    questionSet();
    if (quizIndex < quizLength) {
      main.style.display = "block";

    }else{
      main.style.display = "none";
    }
  });


}
