import {  ContainerList, Input } from "@/components";



export default function Home() {
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


