'use client'
import { Button, Modal } from "flowbite-react";
import { useRouter } from "next/navigation";
import { DetailedHTMLProps, FormHTMLAttributes } from "react";


export default function index({
  children,
  headerTitle
}:Readonly<{
  children : React.ReactNode,
  headerTitle : string
}>) {
  const router = useRouter()

  return (
    
      <Modal show={true} onClose={()=>{router.back()}}>   
          <Modal.Header>{headerTitle}</Modal.Header>
          <Modal.Body>
            {children}
          </Modal.Body>
      </Modal>
  );
}
