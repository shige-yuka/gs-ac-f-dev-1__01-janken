$(document).ready(function(){

  var p1Score = 1
  var comScore = 1
  
  $("#jq-rock").on("click", function () {
    var rock = 1
    $("#p1-plan").html('あなた：グー')
    //相手の手
    var rpsrandom = Math.floor(Math.random() * 3 + 1)
    if(rpsrandom == 1 && rock == 1) {
      $("#plan").html('<p class="plantext">あいこ</p>')
      $("#com-plan").html('<img class="img" src="assets/img/rock.png"><span class="first-call">相手：グー</span>')
      $(".plantext").addClass('shake').delay(900).queue(function () {
        $(this).removeClass('shake').dequeue();
      });
    } else if (rpsrandom == 2 && rock == 1) {
      $("#plan").html('<p class="plantext">あなたの勝ち！</p>')
      $("#com-plan").html('<img class="img" src="assets/img/v.png"><span class="first-call">相手：チョキ</span>')
      $(".plantext").addClass('rubberBand').delay(900).queue(function () {
        $(this).removeClass('rubberBand').dequeue();
      });
      $("#p1-score").text(p1Score++)
    } else if (rpsrandom == 3 && rock == 1) {
      $("#plan").html('<p class="plantext">あなたの負け</p>')
      $("#com-plan").html('<img class="img" src="assets/img/paper.png"><span class="first-call">相手：パー</span>')
      $(".plantext").addClass('pulse').delay(900).queue(function () {
        $(this).removeClass('pulse').dequeue();
      });
      $("#com-score").text(comScore++)
    }
  });
  $("#jq-scissors").on("click", function () {
    //自分の手
    var scissors = 2
    $("#p1-plan").html('あなた：チョキ')
    //相手の手
    var rpsrandom = Math.floor(Math.random() * 3 + 1)
    if (rpsrandom == 1 && scissors == 2) {
      $("#plan").html('あなたの負け')
      $("#com-plan").html('<img class="img" src="assets/img/rock.png"><span class="first-call">相手：グー</span>')
      $(".plantext").addClass('pulse').delay(900).queue(function () {
        $(this).removeClass('pulse').dequeue();
      });
      $("#com-score").text(comScore++)
    } else if (rpsrandom == 2 && scissors == 2) {
      $("#plan").html('あいこ')
      $("#com-plan").html('<img class="img" src="assets/img/v.png"><span class="first-call">相手：チョキ</span>')
      $(".plantext").addClass('shake').delay(900).queue(function () {
        $(this).removeClass('shake').dequeue();
      });
    } else if (rpsrandom == 3 && scissors == 2) {
      $("#plan").html('あなたの勝ち！')
      $("#com-plan").html('<img class="img" src="assets/img/paper.png"><span class="first-call">相手：パー</span>')
      $(".plantext").addClass('rubberBand').delay(900).queue(function () {
        $(this).removeClass('rubberBand').dequeue();
      });
      $("#p1-score").text(p1Score++)
    }
  });
  $("#jq-paper").on("click", function () {
    //自分の手
    var paper = 3
    $("#p1-plan").html('あなた：パー')
    //相手の手
    var rpsrandom = Math.floor(Math.random() * 3 + 1)
    if (rpsrandom == 1 && paper == 3) {
      $("#plan").html('あなたの勝ち！')
      $("#com-plan").html('<img class="img" src="assets/img/rock.png"><span class="first-call">相手：グー</span>')
      $(".plantext").addClass('rubberBand').delay(900).queue(function () {
        $(this).removeClass('rubberBand').dequeue();
      });
      $("#p1-score").text(p1Score++)
    } else if (rpsrandom == 2 && paper == 3) {
      $("#plan").html('あなたの負け')
      $("#com-plan").html('<img class="img" src="assets/img/v.png"><span class="first-call">相手：チョキ</span>')
      $(".plantext").addClass('pulse').delay(900).queue(function () {
        $(this).removeClass('pulse').dequeue();
      });
      $("#com-score").text(comScore++)
    } else if (rpsrandom == 3 && paper == 3) {
      $("#plan").html('あいこ')
      $("#com-plan").html('<img class="img" src="assets/img/paper.png"><span class="first-call">相手：パー</span>')
      $(".plantext").addClass('shake').delay(900).queue(function () {
        $(this).removeClass('shake').dequeue();
      });
    }
  });
  //ボタンのカレント
  $('.plan-btn').each(function () {
    $(this).on('click', function () {
      $('.plan-btn').removeClass('current')
      $(this).addClass('current')
    })
  });
  $('.plan-btn').on('click', function () {
    var resultP1Score = $('.p1-score-wrap').find('#p1-score').text()
    var resultComScore = $('.com-score-wrap').find('#com-score').text()
    var result = Number(resultP1Score) - Number(resultComScore)
    if(result >= 2) {
      $(".text").html('おめでとうございます！<br>元の世界に戻れます！<br><button id="reset-btn" class="button reset-btn">はじめに戻る</button>')
      $(".result-wrap").fadeIn(700)
      $(".result-wrap").addClass('win')
    } else if (result == -1) {
      $(".rvp").addClass('danger')
      $("#plan").html('<p class="plantext">あと一回負けると家畜ですよ。</p>')
      $(".plantext").addClass('pulse').delay(900).queue(function () {
        $(this).removeClass('pulse').dequeue();
      });
    } else if (result == 0) {
      $(".rvp").removeClass('danger')
    } else if (result <= -2) {
      $(".text").html('残念でしたね…<br>約束どおり家畜になっていただきましょう…<br><a href="camera.html" id="reset-btn" class="button reset-btn">家畜になる</a>')
      $(".result-wrap").fadeIn(700)
      $(".result-wrap").addClass('lose')
    }
    $('#reset-btn').on('click', function () {
      location.reload();
    })
  });
  //オープニング
  $("#start-btn").on("click", function () {
    $("#opening").fadeOut(700)
  });
  //walkthrough
  $("#wt-close-btn").on("click", function () {
    $("#walkthrough").fadeOut(700)
  });
  //walkthrough
  $("#wt-restart-btn").on("click", function () {
    $("#opening").fadeIn(700)
  });
  //乱数
  var min = 200
  var max = 500
  var turn = Math.floor(Math.random() * (max + 1 - min)) + min
  $(".turn").html(turn)
});

$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});

// シャッフル
var elements = document.querySelectorAll('[data-chaffle]');
Array.prototype.forEach.call(elements, function (el) {
  var chaffle = new Chaffle(el, {
    speed: 80, // default: 20
    delay: 100, // default: 100
  });
  chaffle.init();
});