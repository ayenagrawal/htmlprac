window.onload = init;
window.onmousemove = func2;
function init(evt)
{
	var a = document.querySelector("#progressBar");
	var b = document.querySelector("#sp");
	console.log("Line executed...!!!");
	window.addEventListener("scroll", func1);
	function func1(evt1)
	{
		var max = document.body.scrollHeight - window.innerHeight;
		var perc = ( window.pageYOffset / max ) * 100;
		a.style.background = "lightBlue";
		a.style.height = perc + "%";
		b.innerHTML = Math.round(perc) + "%";
		console.log("Ending");
	};

}

function func2(evt)
{
	var text = document.querySelector("#text");
	text.innerHTML = "<br/>Pagex: "+evt.pageX+" PageY: "+evt.pageY+"<br/><br/>ClientX: "+evt.clientX+" ClientY: "+evt.clientY+
	"<br><br/>ScreenX:"+evt.screenX+" ScreenY: "+evt.screenY;
}