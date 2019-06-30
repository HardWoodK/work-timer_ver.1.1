let start = 0;
let second = 0;
let minute = 0;
let hour = 0;
const imgList = new Array(
  './picture/fitness1.PNG',
  './picture/fitness2.PNG',
  './picture/fitness3.PNG',
  './picture/fitness4.PNG',
  './picture/fitness5.PNG',
  './picture/fitness6.PNG'
)
// let output = './picture/bad.png';
let output = "<img src=" + imgList[selectnum] + ">";

document.getElementById("text-button").onclick = function(){
  start = 1;
  document.getElementById("text").innerHTML = "仕事なう";
}

document.getElementById("reset-button").onclick = function(){
  start = 0;
  second = 0;
  minute = 0;
  hour = 0;
  document.getElementById("text").innerHTML = "クリックで業務開始";
  document.getElementById("time").innerHTML
    = "-";
}

document.getElementById("init-button").onclick = function(){
  Push.create("通知を許可")
}

setInterval("time()", 1000);

function note(){
  if(start === 1){
    let selectnum = Math.floor(Math.random() * imgList.length);
    Push.create("休憩しましょう！", {
      body: hour + "時間経過しました\n集中力が切れてきてませんか？\n目を休ませて軽く運動をしましょう",
      icon: imgList[selectnum], // 右側に表示される画像のパス
      requireInteraction: false, //勝手に消えない
      // timeout: 60*60*1000, //1時間後
      onClick: function () {
          window.focus();
          // location.href = 'https://google.co.jp';
          this.close();
      }
    });
  }
}

function time(){
  if(start === 1){
    second++;
    note();
    if(second === 60){
      minute++;
      second = 0;
    }
    if(minute === 60){
      hour++;
      minute = 0;
      note();
    }
    document.getElementById("time").innerHTML
      = output +
     hour + "時間 " + minute + "分 " + second + "秒";
  }
}
