

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
  // //backgroundSequence();
  setTimeout(function(){backgroundSequence() }, (secs * 1000));
