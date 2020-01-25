var countDownDate = new Date("18 OCTOBER 2019 08:00:00").getTime();
  var x = setInterval(function() {
  var now = new Date().getTime();
      var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("demo").innerHTML = days + "days    " + hours + "hrs    " + minutes + "min    " + seconds + "sec";
    if (distance < 0) {
        clearInterval
        (x);
        document.getElementById("demo").innerHTML = "FEST HAS BEGUN";
        document.getElementById("h1_timer").style.color = "transparent";
    }
}, 1000);

  function showit1(){
    document.getElementById('text1').style.display="block";
    document.getElementById('but1').style.display="none";
    document.getElementById('cross1').style.display="initial";
  }

  function showit2(){
    document.getElementById('text2').style.display="block";
    document.getElementById('but2').style.display="none";
    document.getElementById('cross2').style.display="initial";
  }

  function showit3(){
    document.getElementById('text3').style.display="block";
    document.getElementById('but3').style.display="none";
    document.getElementById('cross3').style.display="initial";
  }

  function showit4(){
    document.getElementById('text4').style.display="block";
    document.getElementById('but4').style.display="none";
    document.getElementById('cross4').style.display="initial";
  }

  function showit5(){
    document.getElementById('text5').style.display="block";
    document.getElementById('but5').style.display="none";
    document.getElementById('cross5').style.display="initial";
  }

  function showit6(){
    document.getElementById('text6').style.display="block";
    document.getElementById('but6').style.display="none";
    document.getElementById('cross6').style.display="initial";
  }

  function showit7(){
    document.getElementById('text7').style.display="block";
    document.getElementById('but7').style.display="none";
    document.getElementById('cross7').style.display="initial";
  }

  function showit8(){
    document.getElementById('text8').style.display="block";
    document.getElementById('but8').style.display="none";
    document.getElementById('cross8').style.display="initial";
  }

  function showit9(){
    document.getElementById('text9').style.display="block";
    document.getElementById('but9').style.display="none";
    document.getElementById('cross9').style.display="initial";
  }

  function showit10(){
    document.getElementById('text10').style.display="block";
    document.getElementById('but10').style.display="none";
    document.getElementById('cross10').style.display="initial";
  }

  function showit11(){
    document.getElementById('text11').style.display="block";
    document.getElementById('but11').style.display="none";
    document.getElementById('cross11').style.display="initial";
  }

  function showit12(){
    document.getElementById('text12').style.display="block";
    document.getElementById('but12').style.display="none";
    document.getElementById('cross12').style.display="initial";
  }

  function showit13(){
    document.getElementById('text13').style.display="block";
    document.getElementById('but13').style.display="none";
    document.getElementById('cross13').style.display="initial";
  }

  function showit14(){
    document.getElementById('text14').style.display="block";
    document.getElementById('but14').style.display="none";
    document.getElementById('cross14').style.display="initial";
  }

  function showit15(){
    document.getElementById('text15').style.display="block";
    document.getElementById('but15').style.display="none";
    document.getElementById('cross15').style.display="initial";
  }

  function showit16(){
    document.getElementById('text16').style.display="block";
    document.getElementById('but16').style.display="none";
    document.getElementById('cross16').style.display="initial";
  }

  function disap1(){
    document.getElementById('text1').style.display="none";
    document.getElementById('but1').style.display="initial";
    document.getElementById('cross1').style.display="none";
  }

  function disap2(){
    document.getElementById('text2').style.display="none";
    document.getElementById('but2').style.display="initial";
    document.getElementById('cross2').style.display="none";
  }

  function disap3(){
    document.getElementById('text3').style.display="none";
    document.getElementById('but3').style.display="initial";
    document.getElementById('cross3').style.display="none";
  }

  function disap4(){
    document.getElementById('text4').style.display="none";
    document.getElementById('but4').style.display="initial";
    document.getElementById('cross4').style.display="none";
  }

  function disap5(){
    document.getElementById('text5').style.display="none";
    document.getElementById('but5').style.display="initial";
    document.getElementById('cross5').style.display="none";
  }

  function disap6(){
    document.getElementById('text6').style.display="none";
    document.getElementById('but6').style.display="initial";
    document.getElementById('cross6').style.display="none";
  }

  function disap7(){
    document.getElementById('text7').style.display="none";
    document.getElementById('but7').style.display="initial";
    document.getElementById('cross7').style.display="none";
  }

  function disap8(){
    document.getElementById('text8').style.display="none";
    document.getElementById('but8').style.display="initial";
    document.getElementById('cross8').style.display="none";
  }

  function disap9(){
    document.getElementById('text9').style.display="none";
    document.getElementById('but9').style.display="initial";
    document.getElementById('cross9').style.display="none";
  }

  function disap10(){
    document.getElementById('text10').style.display="none";
    document.getElementById('but10').style.display="initial";
    document.getElementById('cross10').style.display="none";
  }

  function disap11(){
    document.getElementById('text11').style.display="none";
    document.getElementById('but11').style.display="initial";
    document.getElementById('cross11').style.display="none";
  }

  function disap12(){
    document.getElementById('text12').style.display="none";
    document.getElementById('but12').style.display="initial";
    document.getElementById('cross12').style.display="none";
  }

  function disap13(){
    document.getElementById('text13').style.display="none";
    document.getElementById('but13').style.display="initial";
    document.getElementById('cross13').style.display="none";
  }

  function disap14(){
    document.getElementById('text14').style.display="none";
    document.getElementById('but14').style.display="initial";
    document.getElementById('cross14').style.display="none";
  }

  function disap15(){
    document.getElementById('text15').style.display="none";
    document.getElementById('but15').style.display="initial";
    document.getElementById('cross15').style.display="none";
  }

  function disap16(){
    document.getElementById('text16').style.display="none";
    document.getElementById('but16').style.display="initial";
    document.getElementById('cross16').style.display="none";
  }


