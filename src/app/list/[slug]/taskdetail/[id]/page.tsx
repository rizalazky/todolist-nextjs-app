
import { getTaskDetail } from '@/lib/actions'
import TaskDetail from '@/ui/taskdetail'
import React from 'react'

async function page({params}:{params :{id:string ,slug :string}}) {
    console.log('id',params.id)
    console.log('slug',params.slug)
    const taskDetail = await getTaskDetail(params.slug,params.id)

    console.log('TASK DETAIL',taskDetail)
  return (
    <TaskDetail taskDetail={taskDetail.data} listId={params.slug}/>
  )
}

export default page