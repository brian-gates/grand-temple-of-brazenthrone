using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Movement : MonoBehaviour
{
    CharacterController characterController;

    public float speed = 10f;
    private Vector3 moveDirection = Vector3.zero;
    public float gravity = 20.0f;

    // Start is called before the first frame update
    void Start()
    {
        characterController = GetComponent<CharacterController>();
    }

    // Update is called once per frame
    void Update()
    {
        Vector3 forward = transform.TransformDirection(Vector3.forward) * Input.GetAxis("Vertical");
        Vector3 strafe = transform.TransformDirection(Vector3.right) * Input.GetAxis("Horizontal");
        Vector3 moveDirection = (forward + strafe) * speed * Time.deltaTime;
        moveDirection.y -= gravity * Time.deltaTime;
        Debug.DrawRay(transform.position, forward*10, Color.blue);
        Debug.DrawRay(transform.position, strafe*10, Color.red);
        Debug.DrawRay(transform.position, moveDirection*10, Color.green);
        characterController.Move(moveDirection);
    }
}
