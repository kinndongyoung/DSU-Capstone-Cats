public var rl : UI.Text;
public var rl2 : UI.Text;
public var display1 : UI.Button ;
public var display2 : UI.Button ;
var itema: Sprite;
var itemb: Sprite;
var itemc: Sprite;
var itemd: Sprite;
var iteme: Sprite;
var itemf: Sprite;
var itemg: Sprite;
var itemh: Sprite;
var itemi: Sprite;
var blank: Sprite;
 
public var b0 : UI.Text;
public var b1 : UI.Text;
public var b2 : UI.Text;
public var b3 : UI.Text;

public var a0 : UI.Image;
public var a1 : UI.Image;
public var a2 : UI.Image;
public var a3 : UI.Image;

public var bbb0 : UI.Text;
public var bbb1 : UI.Text;
public var bbb2 : UI.Text;
public var bbb3 : UI.Text;

public var aaa0 : UI.Image;
public var aaa1 : UI.Image;
public var aaa2 : UI.Image;
public var aaa3 : UI.Image;

public var aa0 : UI.Image;
public var aa1 : UI.Image;
public var aa2 : UI.Image;
public var aa3 : UI.Image;
public var aa4 : UI.Image;
public var aa5 : UI.Image;
public var aa6 : UI.Image;
public var aa7 : UI.Image;
public var aa8 : UI.Image;
public var aa9 : UI.Image;
public var aa10: UI.Image;
public var aa11: UI.Image;
public var aa12: UI.Image;
public var aa13: UI.Image;
public var aa14: UI.Image;
public var aa15: UI.Image;

public var bb0 : UI.Text;
public var bb1 : UI.Text;
public var bb2 : UI.Text;
public var bb3 : UI.Text;
public var bb4 : UI.Text;
public var bb5 : UI.Text;
public var bb6 : UI.Text;
public var bb7 : UI.Text;
public var bb8 : UI.Text;
public var bb9 : UI.Text;
public var bb10: UI.Text;
public var bb11: UI.Text;
public var bb12: UI.Text;
public var bb13: UI.Text;
public var bb14: UI.Text;
public var bb15: UI.Text;


public var list2 = new ArrayList();

 
var page=1;
var page2=1;
public var have = new ArrayList();  //인벤 안에들어가는 원소들의 배열 
var a="trash";
var b="photo";
var c='mario';
var d="mushroom";
var e="bee";
var f="mario2"; 
var g="star";
var h="mushroom2";
var i="movie";

function Start () {
list2.Add("trash");
list2.Add("photo");
list2.Add('mario');
list2.Add("mushroom");
list2.Add("bee");
list2.Add("mario2");
list2.Add("star");
list2.Add("mushroom2");
list2.Add("movie");


}
function Update () {
	rl.text=""+page;
	rl2.text=""+page2;
	//page=display1.GetComponent(Page).page;  //GameObject.Find("player")
	
	
}
function Up(){
	page=page+1;
	
}
function Down(){
	if(page>1)
	page=page-1;
}
function Up2(){
	page2=page2+1;
	
}
function Down2(){
	if(page2>1)
	page2=page2-1;
}
function additem(item){ //추가 된다.
	have.Add(item);
	re();
}
function delitem(num){
	var tmp=new ArrayList(); 
	for(i in have){  //원소의 종류가 나오는 임시 배열을 만듬
		if (tmp.IndexOf(i)==-1)
		tmp.Add(i);
	}

	var tmp2; 
	if (click2(num)<tmp.Count){
		tmp2=tmp[click2(num)];
		
		have.Remove(tmp2);

	}
	
	re();
}
function click2(a){
	return a+4*(page2-1);
}


function in1(a){  //원소의 개수를 파악
	var have2=have.Clone();
	have2.Sort();
	//print("뒤에서 위치:"+have2.LastIndexOf(a)+"첫번째 위치 :"+have2.IndexOf(a));

	return have2.LastIndexOf(a)-have2.IndexOf(a)+1;

}


function ref2(){ //have 의 원소를 먼저 들어온 종류를 뭉치게 만듬.
	var tmp=new ArrayList(); 
	for(var i in have){  //원소의 종류가 나오는 임시 배열을 만듬
		//print(i); //a
		//print("임시배열속 개수"+tmp.IndexOf(i)); //총개수
		if (tmp.IndexOf(i)==-1){
		tmp.Add(i);}
	}
	//print("만들어진 임시배열 총개수"+tmp.Count);
	var have3=new ArrayList(); 
	
	for (var i in tmp){
		for(var ii=0;ii<in1(i);ii++){
			//print(i+"원소의 개수"+in1(i));
			have3.Add(i);
			
		}
	}
	
	have=have3;

}



public function re(){
	rl.text=""+page;
	rl2.text=""+page2;
	ref2();

	var tmp=new ArrayList(); 
	//print("여기다음에 부터");
	for(var i in have){  //원소의 종류가 나오는 임시 배열을 만듬
		if (tmp.IndexOf(i)==-1)
		tmp.Add(i);
		//print(i);
	}

	for(var i=(page-1)*4;i<(page)*4;i++){  //페이지를 보고 원소의 종류를기준으로 나오게함
		if(i<tmp.Count)
		{eval("b"+i%4+".text=''+in1(tmp[i])");
		//print(tmp[i]);
		eval("a"+i%4+".sprite=item"+tmp[i]);}
		else{eval("b"+i%4+".text=''+0");
			eval("a"+i%4+".sprite=blank");
		}
		
	}
	
	Inventoryview2();



	
	

	//a0.sprite=sa; 이렇게 이미지소스를 변경함

}
public function Inventoryview2(){
var tmp=new ArrayList(); 
	for(var i in have){  //원소의 종류가 나오는 임시 배열을 만듬
		if (tmp.IndexOf(i)==-1)
		tmp.Add(i);
		//print(i);
	}

	for(var i=(page2-1)*4;i<(page2)*4;i++){  //페이지를 보고 원소의 종류를기준으로 나오게함
		if(i<tmp.Count)
		{eval("bbb"+i%4+".text=''+in1(tmp[i])");
		//print(tmp[i]);
		eval("aaa"+i%4+".sprite=item"+tmp[i]);}
		else{eval("bbb"+i%4+".text=''+0");
			eval("aaa"+i%4+".sprite=blank");
		}
		
	}
}
public function change(str){
var tmp2=new ArrayList(); 
for(var t=0;t<9;t++)
{
	print("str은"+str+"t값은"+t);
	print("list2[t]는"+list2[t]);
	print(list2[t].IndexOf(str));

	if(list2[t].IndexOf(str)!=-1)
	{
	print(list2[t]+"가 전체목록에서 추가되었습니다");
	tmp2.Add(list2[t]);
	
	}

} //return tmp2; 전체중에서 들어가 있는 변수내용들 리스트
var tmp3=new ArrayList(); 
for(var it=0;it<tmp2.Count;it++){
	switch(tmp2[it]){
		case a:tmp3.Add("a");break;
		case b:tmp3.Add("b");break;
		case c:tmp3.Add("c");break;
		case d:tmp3.Add("d");break;
		case e:tmp3.Add("e");break;
		case f:tmp3.Add("f");break;
		case g:tmp3.Add("g");break;
		case h:tmp3.Add("h");break;
		case i:tmp3.Add("i");break;
	}

}






return tmp3;




} 


public function Inventoryview(str)
{
	var tmp=new ArrayList(); 
	var tmp3=new ArrayList(); 
	//print("여기다음에 부터");
	for(var i in have)
	{  //원소의 종류가 나오는 임시 배열을 만듬
		if (tmp.IndexOf(i)==-1)
			{tmp.Add(i);
			print(i+"추가했습니다.");}
			//print(i);
			
	}



	if(str!="")
	{	var listone=change(str);


		for(var ii=0;ii<listone.Count;ii++)
		{
			if(tmp.IndexOf(listone[ii])!=-1)
			tmp3.Add(listone[ii]);
		}
		tmp=tmp3;
		
	}
		


	

	
	
	
	
	
	for(var i=0;i<16;i++)
	{  //페이지를 보고 원소의 종류를기준으로 나오게함
		if(i<tmp.Count)
		{
		eval("bb"+i+".text=''+in1(tmp[i])");
		//print(tmp[i]);
		eval("aa"+i+".sprite=item"+tmp[i]);
		
		}
		else
		{
			eval("bb"+i+".text=''+0");
			eval("aa"+i+".sprite=blank");
		}
		
	}




}
	