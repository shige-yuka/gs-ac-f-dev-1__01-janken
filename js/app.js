var voice = document.getElementById('voice');
var content = document.getElementById('content');




//音声認識APIの使用
var speech = new webkitSpeechRecognition();


//言語を日本語に設定
speech.lang = "ja";




voice.addEventListener('click', function () {


  // 音声認識をスタート
  speech.start();


});




speech.addEventListener( 'result' , function( e ) {


    // 音声認識で取得した情報を、コンソール画面に表示
    console.log( e );

  var text = e.results[0][0].transcript;


  // 認識された「言葉(text)」を、表示用のdivタグに代入する
  content.textContent = text;

  if (text === "飛ばねぇ豚はただの豚だ") otherLink();
  function otherLink() {
    document.location.href = "camera.html";
  }


} );
