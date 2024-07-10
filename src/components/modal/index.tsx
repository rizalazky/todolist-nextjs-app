'use client'
import { Button, Modal } from "flowbite-react";
import { useRouter } from "next/navigation";
import { DetailedHTMLProps, FormHTMLAttributes } from "react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";


export default function index({
  children,
  headerTitle,
  isModalDelete,
  onCloseModal,
  openModal,
  onSubmitDelete
}:Readonly<{
  children : React.ReactNode,
  headerTitle : string,
  isModalDelete? : boolean,
  onCloseModal? : ()=>void,
  openModal? : boolean,
  onSubmitDelete?:()=>void
}>) {
  const router = useRouter()

  if(isModalDelete){
    return <ModalDelete openModal={openModal} onCloseModal ={onCloseModal} onSubmitDelete={onSubmitDelete}/>
  }

  return (
    
      <Modal show={true} onClose={()=>{router.back()}}>   
          <Modal.Header>{headerTitle}</Modal.Header>
          <Modal.Body>
            {children}
          </Modal.Body>
      </Modal>
  );
}




export function ModalDelete({openModal,onCloseModal,onSubmitDelete}:{openModal?:boolean,onCloseModal?:()=>void, onSubmitDelete?:()=>void}) {
  

  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this data?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={onSubmitDelete}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={onCloseModal}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

