using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ItemUI : MonoBehaviour {

    private Item item = null;
    private Text desc;
    public Button addBtn;
    public Button minusBtn;

	// Use this for initialization
	void Start () {
        desc = transform.Find("Panel/Desc").GetComponent<Text>();
        addBtn = transform.Find("Panel/+").GetComponent<Button>();
        minusBtn = transform.Find("Panel/-").GetComponent<Button>();
        addBtn.onClick.AddListener(() => { item.count += 1; });
        minusBtn.onClick.AddListener(() => { item.count -= 1; });
	}

    public void SetItem(Item item)
    {
        this.item = item;
    }
	
	// Update is called once per frame
	void Update () {
        desc.text = string.Format("{0} x {1}", item.name, item.count);
	}
}
