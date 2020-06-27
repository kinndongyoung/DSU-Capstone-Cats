
var rl : UI.Text;
var rl2 : UI.Text;
var player : GameObject ;
var page=1;

function Start () {
	
}

function Update () {
	
}

function Pageup(){

	player.SendMessage("Up");
	player.SendMessage("re");
	
	
}

function Pagedown(){

	player.SendMessage("Down");
	player.SendMessage("re");
	
	
	
}
function Pageup2(){

	player.SendMessage("Up2");
	player.SendMessage("re");
	
	
}

function Pagedow2n(){

	player.SendMessage("Down2");
	player.SendMessage("re");
	
	
	
}