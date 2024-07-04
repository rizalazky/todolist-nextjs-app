import {  ContainerList, Input, Navbar, Sidebar } from "@/components";
import { getList } from "./lib/actions";




export default async function Home() {
  // const session = await getSessionData();
  const getListAPI = await getList();

  return (
    <>
      <Sidebar lists={getListAPI.data}/>
      <div className="flex-1 overflow-scroll">
          <main className="flex flex-col w-full h-full px-10">
            <ContainerList/>
          </main>
          <div className="sticky bottom-10 px-20 w-full">
            <Input/>
          </div>
      </div>
    </>
  );
}




