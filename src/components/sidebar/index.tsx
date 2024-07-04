
"use client";

import { Sidebar } from "flowbite-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { HiArrowSmRight, HiSun, HiDatabase, HiHome, HiTable, HiCheckCircle, HiStar, HiX } from "react-icons/hi";
import { AddNewListButton } from "..";

interface taskList {
    id : number,
    list_desc : string
};

export default function Component({lists}:{lists : taskList[]}) {
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
                  <Sidebar.Items className="h-[92%]">
                      <Sidebar.ItemGroup>
                        <Sidebar.Item href="/list/myday" icon={HiSun}>
                            My Day
                        </Sidebar.Item>
                        <Sidebar.Item href="/list/important" icon={HiStar} labelColor="dark">
                            Important
                        </Sidebar.Item>
                        <Sidebar.Item href="all" icon={HiDatabase} label="3">
                            All
                        </Sidebar.Item>
                        <Sidebar.Item href="/list/completed" icon={HiCheckCircle}>
                            Completed
                        </Sidebar.Item>
                        <Sidebar.Item href="/list/task" icon={HiHome}>
                            Task
                        </Sidebar.Item>
                        
                      </Sidebar.ItemGroup>
                      <Sidebar.ItemGroup >
                      {
                            lists.map((list,index)=>{
                                return (
                                    <Sidebar.Item href={`/list/${list.id}`} key={list.id} icon={HiTable}>
                                        {list.list_desc}
                                    </Sidebar.Item>
                                )
                            })
                        }  
                      </Sidebar.ItemGroup>
                  </Sidebar.Items>
                  <div>
                    <AddNewListButton/>
                  </div>
              </Sidebar>
          </>
        );
    }
}
