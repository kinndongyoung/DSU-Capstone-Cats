
var rl : UI.Text;
var rl2 : UI.Text;
var player : GameObject ;
var page=1;
var ClickSound : AudioClip;

function Start () {
	
}

function Update () {
	
}

function Pageup(){

	player.SendMessage("Up");
	player.SendMessage("re");
	GetComponent.<AudioSource>().Play();
	
}

function Pagedown(){

	player.SendMessage("Down");
	player.SendMessage("re");
	GetComponent.<AudioSource>().Play();
	
	
}
function Pageup2(){

	player.SendMessage("Up2");
	player.SendMessage("re");
	GetComponent.<AudioSource>().Play();
	
}

function Pagedow2n(){

	player.SendMessage("Down2");
	player.SendMessage("re");
	GetComponent.<AudioSource>().Play();
	
	
}