'use client'
import FolderDuotone from '@/components/icons/folder-duotone'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import Folder from './folder'
import { cn } from '@/lib/utils'
import { useQueryData } from '@/hooks/useQueryData'
import { getWorkspaceFolders } from '@/actions/workspace'
import { usemutationDataState } from '@/hooks/useMutationData'

type Props = {
    workspaceId : string
}

export type FoldersProps = {
    status : number
    data : ({
        _count : {
            videos : number
        }
    } & {
        id : string
        name : string
        createdAt : Date
        workspaceId : string | null
    })[]
}

const Folders = ({workspaceId}: Props) => {
    // get folders
    const {data, isFetched} = useQueryData(['workspace-folders'], ()=>getWorkspaceFolders(workspaceId))

    // optimistic variable=(
    const {latestVariable} = usemutationDataState(['create-folder'])

    const {status, data : folders} = data as FoldersProps

    // if(isFetched && folders){

    // }



  return (
    <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <FolderDuotone/>
                <h2 className='text-[#BDBDBD] text-xl'>Folders</h2>

            </div>
            <div className='flex items-center gap-2'>
                <p className='text-[#BDBDBD]'>See all</p>
                <ArrowRight color='#707070'/>
            </div>
        </div>
        <section className={cn(status !== 200 && 'justify-center', "flex items-center gap-4 overflow-x-auto w-full")}>
            {status !== 200 ? (
                <p className='text-neutral-300'>No folders in workspace</p>
            ) : (
                <>
                {latestVariable && latestVariable.status==='pending' && (
                    <Folder name={latestVariable.variables.name}
                    id={latestVariable.variables.id}
                    optimistic />
                )}
                {folders.map((folder) => (
                    <Folder name={folder.name}
                    count={folder._count.videos}
                    id={folder.id}
                    key={folder.id} />
                ))}
                </>
            )}
            
        </section>
    </div>
  )
}

export default Folders