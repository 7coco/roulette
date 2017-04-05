$(function(){
  var $startButton = $("#startButton");
  var $theme = $("#theme");
  var $stopButton = $("#stopButton");

  var themes = ["お題1", "お題2", "お題3", "お題4", "お題5", "お題6"];
  var hundredInterval;

  $startButton.click(function(){
    $startButton.css("display", "none");
    $stopButton.css({"display": "block", "text-align": "center"});
    customInterval = setInterval(function(){
      $theme.text(themes[Math.floor(Math.random() * themes.length)]);
    }, 30);
  });

  $("#stopButton").click(function(){
    $stopButton.css("display", "none");
    setTimeout(function(){
      customSetInterval(100);
      setTimeout(function(){
        customSetInterval(200);
        setTimeout(function(){
          customSetInterval(400);
          setTimeout(function(){
            customSetInterval(600);
            clearInterval(customInterval);
            themeDecideAnimation();
          }, 2000);
        }, 1000);
      }, 1000);
    }, 1000);
  });

  function customSetInterval(ms){
    clearInterval(customInterval);
    customInterval = setInterval(function(){
      $theme.text(themes[Math.floor(Math.random() * themes.length)]);
    }, ms);
  }

  function customClearIntervalAfter(ms){
    setTimeout(function(){
      clearInterval(customInterval);
      customSetInterval()
    }, ms);
  }

  function themeDecideAnimation(){
    $theme.animate( { fontSize:"4em" }, 1500 )

  }
});
