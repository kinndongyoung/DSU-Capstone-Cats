using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChangeSprite : MonoBehaviour
{
    Animator anim;

    [SerializeField]
    private float speed = -2;
    bool fancingRight = true;

    void Awake()
    {

        anim = GetComponent<Animator>();
    }

    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

        Vector2 position = transform.position;

        if (Input.GetKeyDown(KeyCode.RightArrow) && !fancingRight)
        {
            anim.SetBool("IsRunning", true);
            flip();
            Debug.Log("오른쪽키 눌림");
        }
        if (Input.GetKeyDown(KeyCode.LeftArrow) && fancingRight)
        {
            anim.SetBool("IsRunning", true);
            Vector3 charactorScale = transform.localScale;
            flip();
            Debug.Log("왼쪽키 눌림");
        }
        if (Input.GetKeyUp(KeyCode.LeftArrow))
        {
            anim.SetBool("IsRunning", false);
            Vector3 charactorScale = transform.localScale;
            Debug.Log("왼쪽키 뗌");
        }
        if (Input.GetKeyUp(KeyCode.RightArrow))
        {
            anim.SetBool("IsRunning", false);
            Vector3 charactorScale = transform.localScale;
            Debug.Log("오른쪽키 뗌");
        }
    }

    void flip()
    {
        fancingRight = !fancingRight;
        transform.Rotate(0f, 180f, 0f);
    }
}
