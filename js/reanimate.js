window.onload=function(){
		var x = document.getElementsByClassName("animate-restart");
		var i;
		for (i = 0; i < x.length; i++) {
		  x[i].addEventListener("webkitAnimationEnd", myEndFunction);
		}
		document.getElementById("clickMe").onclick = function() {
		  var x = document.getElementsByClassName("animate-restart");
		  var i;
		  for (i = 0; i < x.length; i++) {
			x[i].style.WebkitAnimation = "";
		  }
		};

		function myEndFunction() {
		  this.style.WebkitAnimation = "none";
		}
	}