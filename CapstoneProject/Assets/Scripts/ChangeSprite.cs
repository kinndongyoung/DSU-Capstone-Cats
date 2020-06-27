using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChangeSprite : MonoBehaviour
{
    Animator anim;

    [SerializeField]
    private float speed = -1;
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

        if (Input.GetKey(KeyCode.RightArrow) && !fancingRight)
        {
            anim.SetBool("IsRunning", true);
            flip();

        }
        if (Input.GetKey(KeyCode.LeftArrow) && fancingRight)
        {
            anim.SetBool("IsRunning", true);
            Vector3 charactorScale = transform.localScale;
            flip();
        }
    }

    void flip()
    {
        fancingRight = !fancingRight;
        transform.Rotate(0f, 180f, 0f);
    }
}
