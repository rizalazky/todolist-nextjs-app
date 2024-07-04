'use client'
import { Button, Modal } from "flowbite-react";
import { useRouter } from "next/navigation";
import { DetailedHTMLProps, FormHTMLAttributes } from "react";


export default function index({
  children,
  
}:Readonly<{
  children : React.ReactNode,
  
}>) {
  const router = useRouter()

  return (
    
      <Modal show={true} onClose={()=>{router.back()}}>   
          <Modal.Header>Terms of Service</Modal.Header>
          <Modal.Body>
            {children}
          </Modal.Body>
      </Modal>
  );
}
