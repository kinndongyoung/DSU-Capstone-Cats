#pragma strict

public var player : GameObject ;
public var inventory : GameObject;
public var delection : GameObject;
public var inserction : GameObject;

public var popup : AudioClip;

function Start ()
{

}

function Update ()
{
	
}

function OnCollisionEnter (coll:Collision)
{
	if(coll.gameObject.tag == "Input")
	{
		player.GetComponent(inven).re();
        inserction.SetActive(true);
		GetComponent.<AudioSource>().Play();
		
		print("삽입");
	}
	else if(coll.gameObject.tag == "Output")
	{	player.GetComponent(inven).re();
		delection.SetActive(true);
		GetComponent.<AudioSource>().Play();

		print("삭제");
	}
	else if(coll.gameObject.tag == "Inventory")
	{	player.GetComponent(inven).re();
		inventory.SetActive(true);
		GetComponent.<AudioSource>().Play();

		print("관리");
	}

}