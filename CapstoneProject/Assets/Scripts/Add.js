﻿
var button : UI.Image;

var destobj : GameObject ;
var item:String;
var num:int;

function Start () {
	
}

function Update () {
	
}

function Addfunction(){
	print("추가");
	destobj.SendMessage("additem",item);
	
	
}

function Delefunction(){
	print("삭제");
	destobj.SendMessage("delitem",num);
	
	
	
}