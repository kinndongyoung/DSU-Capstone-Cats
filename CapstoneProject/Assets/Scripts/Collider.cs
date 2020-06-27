using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Collider : MonoBehaviour {

    public Inventory inventory;

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
    void OnCollisionEnter(Collision coli) {
        if (coli.gameObject.tag == "Input")
        {
            inventory.Open(Inventory.Mode.AddMode);
        }
        else if (coli.gameObject.tag == "Output")
        {
            inventory.Open(Inventory.Mode.MinusMode);
        }
        else if (coli.gameObject.tag == "Inventory")
        {
            inventory.Open(Inventory.Mode.Open);
        }
    }
}
