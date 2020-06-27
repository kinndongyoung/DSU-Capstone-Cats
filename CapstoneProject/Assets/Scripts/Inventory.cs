using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Inventory : MonoBehaviour {

    public List<Item> items;

    public RectTransform itemPanel;
    public ItemUI itemUITemplate;
    private List<ItemUI> itemUIInstances = new List<ItemUI>();

    public enum Mode
    {
        // 인벤토리를 여는 모드
        Open,

        // 인벤토리를 열어서 입고 모드
        AddMode,

        // 인벤토리를 열어서 출고 모드
        MinusMode,

        // 인벤토리를 열어서 관리 모드
        AdminMode,
    }

    public void Open(Mode mode)
    {
        gameObject.SetActive(true);
        foreach (var itemUIInst in itemUIInstances)
        {
            if (mode == Mode.Open)
            {
                itemUIInst.addBtn.enabled = false;
                itemUIInst.minusBtn.enabled = false;
            }
            else if (mode == Mode.AddMode)
            {
                itemUIInst.addBtn.enabled = true;
                itemUIInst.minusBtn.enabled = false;
            }
            else if (mode == Mode.MinusMode)
            {
                itemUIInst.addBtn.enabled = false;
                itemUIInst.minusBtn.enabled = true;
            }
            else if (mode == Mode.AdminMode)
            {
                itemUIInst.addBtn.enabled = true;
                itemUIInst.minusBtn.enabled = true;
            }
        }
    }

	// Use this for initialization
	void Start () {
        foreach (var item in items)
        {
            var itemUI = Instantiate(itemUITemplate, itemPanel.transform);
            itemUI.SetItem(item);
            itemUIInstances.Add(itemUI);
        }
    }

    // Update is called once per frame
    void Update () {
		
	}
}
