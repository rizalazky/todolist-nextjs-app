import {  ContainerList, Input } from "@/components";
import { getList } from "./lib/actions";




export default async function Home() {
  // const session = await getSessionData();
  const listData = await getList();
  console.log('response',listData)

  return (
    <>
      <main className="flex flex-col w-full h-full px-10">
        <ContainerList/>
      </main>
      <div className="sticky bottom-10 px-20 w-full">
        <Input/>
      </div>
    </>
  );
}




