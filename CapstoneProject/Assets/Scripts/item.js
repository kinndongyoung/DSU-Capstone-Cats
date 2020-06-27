class Item {
    var ID : int;
    var itemType : ItemType;
    var Name : String;
    var Description : String;
    var Equipped : boolean;
    var Stamina : int;
    var Power : float;
    var attackSpeed : float;
    var rarity : Rarity;
    var icon : Texture2D;
 
 
}
 
enum ItemType{
 
    helm,
    shoulders,
    gloves,
    pants,
    boots,
    ring,
    neckless
 
}
 
enum Rarity{
 
    uncommon,
    common,
    rare,
    epic
 
}