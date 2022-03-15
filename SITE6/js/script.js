window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navigation-bar").style.cssText = "position: fixed; z-index:100; transition: all 0.3s ease; top: 0px; left: 0px; width: 100%";
  }
}
