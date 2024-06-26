
"use client";

import { Sidebar } from "flowbite-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiX } from "react-icons/hi";

export default function Component() {
    const [isOpen,setIsOpen]= useState(true)
    const pathname = usePathname()
    console.log(pathname)
    // const isLogin = router == 'login'
    if(pathname !== '/login'){
        return (
          <>
              <Sidebar aria-label="Default sidebar example" className={`h-screen `}>
                  <div className="flex p-2 justify-between w-full">
                      <div>MENU</div>
                      <button onClick={()=>setIsOpen(false)}>
                          <HiX/>
                      </button>
                  </div>
                  <Sidebar.Items>
                      <Sidebar.ItemGroup>
                      <Sidebar.Item href="#" icon={HiChartPie}>
                          Dashboard
                      </Sidebar.Item>
                      <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
                          Kanban
                      </Sidebar.Item>
                      <Sidebar.Item href="#" icon={HiInbox} label="3">
                          Inbox
                      </Sidebar.Item>
                      <Sidebar.Item href="#" icon={HiUser}>
                          Users
                      </Sidebar.Item>
                      <Sidebar.Item href="#" icon={HiShoppingBag}>
                          Products
                      </Sidebar.Item>
                      <Sidebar.Item href="#" icon={HiArrowSmRight}>
                          Sign In
                      </Sidebar.Item>
                      <Sidebar.Item href="#" icon={HiTable}>
                          Sign Up
                      </Sidebar.Item>
                      </Sidebar.ItemGroup>
                  </Sidebar.Items>
              </Sidebar>
          </>
        );
    }
}
