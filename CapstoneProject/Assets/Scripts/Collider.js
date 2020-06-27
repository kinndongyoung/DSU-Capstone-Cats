#pragma strict

public var player : GameObject ;
public var Insertion : GameObject ;
public var Inventory : GameObject ;
public var Deletion: GameObject;

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
        Insertion.SetActive(true);
		print("삽입");
	}
	else if(coll.gameObject.tag == "Output")
	{
		Inventory.SetActive(true);
		print("삭제");
	}
	else if(coll.gameObject.tag == "Inventory")
	{
		Inventory.SetActive(true);
		print("관리");
	}

}