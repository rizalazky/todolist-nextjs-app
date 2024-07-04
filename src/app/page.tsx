import {  ContainerList, Input, Navbar, Sidebar } from "@/components";
import { getList } from "../lib/actions";
import Link from "next/link";
import Main from "@/ui/main";




export default async function Home() {
  // const session = await getSessionData();
  

  return (
    <Main pageTitle="Main" items={[]}/>
  );
}




