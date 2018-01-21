'use strict';

// second: 遅延時間を算出する
function second(){
  return Math.floor(Math.random() * 3000) + 1000;
}

// 指定またはランダム時間待つ
function sleep(){
  return new Promise((resolve) => {
      setTimeout(resolve, second());
  });
}

// sleep()時間後に、メッセージを送信する
function promiseSend(msg, text){
  sleep()
  .then(()=>{
    msg.send(text);
  });
}

/*
// delaySend: ランダム時間後に送信する
// promiseSendに置き換え
function delaySend(msg,text){
  setTimeout(()=>{
    msg.send(text);
  }, second());
}
*/

module.exports = (robot) => {

  robot.hear(/\.\.\./i, (msg) => {
    sleep()
    .then(()=>{
      msg.send('まだ怒ってる？');
      return sleep();
    }).then(()=>{
      msg.send('返事ください');
      return sleep();
    }).then(()=>{
      msg.send('なんで');
      return sleep();
    }).then(()=>{
      msg.send('何も言わないの？');
      return sleep();
    }).then(()=>{
      msg.send('昨日はごめんね');
      return sleep();
    }).then(()=>{
      msg.send('私も言いすぎたよ');
      return sleep();
    }).then(()=>{
      msg.send('でもやっぱり');
      return sleep();
    }).then(()=>{
      msg.send('ぜったい');
      return sleep();
    }).then(()=>{
      msg.send('私の方が好きだよ');
    });
  });

  robot.hear(/俺の方が好き/i, (msg) => {
    sleep()
    .then(()=>{
      msg.send('もう！！');
      return sleep();
    }).then(()=>{
      msg.send('またケンカなるじゃん！');
      return sleep();
    }).then(()=>{
      msg.send('もうっ！キライ！');
    });
  });

  robot.hear(/俺は大好き/i, (msg) => {
    sleep()
    .then(()=>{
      msg.send('もうーーーーっ:triumph:！！');
    });
  });
}
