//script for transitioning background images

  var bgImageArray = document.getElementsByClassName("bg-image"),
  secs = 10;    //time between images

  function backgroundSequence() {
    var k = 0;
    for (i = 0; i < bgImageArray.length; i++) {
      setTimeout(function(){
        bgImageArray[k].className = "bg-image bg-hidden";
        if(k+1 == bgImageArray.length){
          bgImageArray[0].className = "bg-image";
        }else{
          bgImageArray[k+1].className = "bg-image";
        }


      if ((k + 1) === bgImageArray.length) {
        setTimeout(function() { backgroundSequence() }, (secs * 1000))
      } else { k++; }
      }, (secs * 1000) * i)
    }
  }

  var mobilebgImageArray = document.getElementsByClassName("mobile-bg-image"),
  secs = 10;    //time between images


  function mobileBackgroundSequence() {
    var k = 0;
    for (i = 0; i < bgImageArray.length; i++) {
      setTimeout(function(){
        mobilebgImageArray[k].className = "mobile-bg-image mobile-bg-hidden";
        if(k+1 == bgImageArray.length){
          mobilebgImageArray[0].className = "mobile-bg-image";
        }else{
          mobilebgImageArray[k+1].className = "mobile-bg-image";
        }


      if ((k + 1) === bgImageArray.length) {
        setTimeout(function() { backgroundSequence() }, (secs * 1000))
      } else { k++; }
      }, (secs * 1000) * i)
    }
  }
  //backgroundSequence();
  setTimeout(function(){backgroundSequence() }, (secs * 1000));
  setTimeout(function(){mobileBackgroundSequence() }, (secs * 1000));
