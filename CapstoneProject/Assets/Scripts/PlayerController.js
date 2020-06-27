#pragma strict

var player : GameObject;


function Start () {
	
}

function Update () {
	
	if(Input.GetKey("left"))
	{

	player.transform.position.x -= 0.05;

	}

	else if(Input.GetKey("right"))
	{
	player.transform.position.x += 0.05;

	}

	else if(Input.GetKey("up"))
	{

	player.transform.position.y += 0.05;

	}

	else if(Input.GetKey("down"))
	{
	player.transform.position.y -= 0.05;

	}

}

