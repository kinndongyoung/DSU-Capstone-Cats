import System.Collections.Generic;
 
var items : Item[];
 
var MainInventory : List.<Item> = new List.<Item>();
var EquipMenu : Item[];
 
//stats
var Power : int = 0;
 
function Start(){
//ADD ITEMS TO INVENTORY
    MainInventory.Add(items[0]);
    MainInventory.Add(items[1]);
    MainInventory.Add(items[2]);
}
 
function OnGUI(){
 
    //FOR ALL OF THE ITEMS IN THE PLAYER INVENTORY
    for(var x = 0; x < MainInventory.Count; x++){
 
    //CREATE BUTTON FOR EACH ITEM
        if(GUI.Button(Rect(Screen.width/2, Screen.height/2 + (20*x), 100, 20), GUIContent(MainInventory[x].Name,
        MainInventory[x].Description + "\n" +
        MainInventory[x].Stamina + "\n" +
        MainInventory[x].Power + "\n" +
        MainInventory[x].rarity))){
     
        //IF THE ITEM IN THE INVENTORYS TYPE MATCHES AN EQUIP TYPE
            if(MainInventory[x].itemType == MainInventory[x].itemType.helm ) {
         
            //IF THE HELM SLOT ISNT EMPTY
                if(EquipMenu[0] != null){
             
                //ADD THE ITEM BACK INTO THE INVENTORY
                    MainInventory.Add(EquipMenu[0]);        }
             
                //EMPTY THE HELM SLOT
                    EquipMenu[0] = null;
                 
                //HELM SLOT = THE ITEM FROM INVENTORY THAT WAS PRESSED
                    EquipMenu[0] = MainInventory[x];
                 
                //REMOVE THE ITEM FROM THE INVENTORY
                    MainInventory.RemoveAt(x);            }
             
        //ELSE IF THE ITEM IN THE INVENTORY IS OF THE SHOULDERS TYPE
            else if(MainInventory[x].itemType == MainInventory[x].itemType.shoulders){
         
            //EQUIP THE ITEM INTO THE SHOULDERS SLOT
                EquipMenu[1] = MainInventory[x];
             
                //REMOVE THE ITEM FROM THE INVENTORY
             
                MainInventory.RemoveAt(x);
                }
         
            }
     
        }
 
        GUI.Label(Rect(Screen.width/2 + 150, Screen.height/2 + (20*x), 500, 500), GUI.tooltip);    
     
        //FOR EQUIPPABLE SLOT
        for(var y = 0; y < EquipMenu.length; y++){
     
            //SHOW BUTTONS FOR SLOTS
            if(EquipMenu.length > 0){
            //IF THE EQUIPMENT SLOT ISNT EMPTY
            if(EquipMenu[y] != null){
                //CREATE BUTTONS FOR EACH WITH NAME
                if(GUI.Button(Rect(Screen.width/2 - 150, Screen.height/2 + (20*y), 100, 20), EquipMenu[y].Name)){
                    //IF PRESSED ADD THE ITEM BACK TO THE INVENTORY
                        MainInventory.Add(EquipMenu[y]);
                    //REMOVE THE ITEM FROM THE SLOT
                        EquipMenu[y]=null;
                        }else{
                            Debug.Log("EQUIP IS NULL!!!!!");
                            }
                        }
                    }
             
                }
         
            }