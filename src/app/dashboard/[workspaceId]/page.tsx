import { getAllUserVideos } from '@/actions/workspace'
import CreateFolders from '@/components/global/create-folders'
import CreateWorkspace from '@/components/global/create-workspace'
import Folders from '@/components/global/folders'
import Videos from '@/components/global/videos'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'

type Props = {
  params :{workspaceId: string}
}

const Page = async ({params : {workspaceId}} : Props) => {
  
  const query = new QueryClient()
  await query.prefetchQuery({
      queryKey : ['folder-videos'],
      queryFn : ()=>getAllUserVideos(workspaceId)
  })

  return (
    <div>
      <Tabs defaultValue='videos' className='mt-6'>
        <div className='flex w-full justify-between items-center'>
          <TabsList className='bg-transparent gap-2 pl-0'>
            <TabsTrigger className='p-[13px] px-6 rounded-full data-[state=active]:bg-[#252525]' value='videos'> Videos</TabsTrigger>
            <TabsTrigger className='p-[13px] px-6 rounded-full data-[state=active]:bg-[#252525]' value='archive'> Archive</TabsTrigger>
          </TabsList>
          <div className='flex gap-x-3'>
            <CreateWorkspace/>
            <CreateFolders workspaceId={workspaceId}/>
          </div>
        </div>
        <section className='py-9'>
          <TabsContent value='videos' className=' flex flex-col gap-7'>
            <Folders workspaceId={workspaceId}/>

            <HydrationBoundary state={dehydrate(query)}>


            <Videos videosKey='folder-videos' workspaceId={workspaceId} folderId={workspaceId}  />
            </HydrationBoundary>

          
          </TabsContent>
        </section>
      </Tabs>
    </div>
  )
}

export default Page