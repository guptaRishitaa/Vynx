"use client";
import { getWorkspaces } from "@/actions/workspace";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useQueryData } from "@/hooks/useQueryData";
import { NotificationProps, WorkspaceProps } from "@/types/index.type";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Modal from "../modal";
import { Menu, PlusCircle } from "lucide-react";
import Search from "../search";
import { MENU_ITEMS } from "@/constants";
import SidebarItem from "./sidebar-item";
import { getNotifications } from "@/actions/user";
import WorkspacePlaceholder from "./workspace-placeholder";
import GlobalCard from "../global-card";
import { Button } from "@/components/ui/button";
import Loader from "../loader";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import InfoBar from "../info-bar";
import { useDispatch } from "react-redux";
import { WORKSPACES } from "@/redux/slices/workspaces";
import PaymentButton from "../payment-button";

type Props = {
  activeWorkspaceId: string;
};

const Sidebar = ({ activeWorkspaceId }: Props) => {
  const router = useRouter();
  const pathName = usePathname()
  const { data, isFetched } = useQueryData(["user-workspaces"], getWorkspaces);

  const menuItems = MENU_ITEMS(activeWorkspaceId);
  const dispatch = useDispatch()

  const {data : notifications} = useQueryData(['user-notifications'], getNotifications)
  const { data: workspace } = data as WorkspaceProps;
  const {data : count} = notifications as NotificationProps

  const onChangeActiveWorkspace = (value: string) => {
    router.push(`/dashboard/${value}`);
  };


  const currentWorkspace = workspace.workspace.find((s)=> s.id === activeWorkspaceId)

  if(isFetched && workspace){
    dispatch(WORKSPACES({workspaces: workspace.workspace}))
  }

  console.log("WORKPSAXE SIDE ", workspace)

  // WIP : Add upgrade button
  const SidebarSection =  (
    <div className="flex-none relative p-4 h-full w-[250px] flex flex-col gap-4 items-center overflow-hidden">
      <div className=" flex p-4 gap-2 justify-center items-center mb-4 absolute top-0 left-0 right-0">
        <Image src="/opal-logo.svg" alt="logo" width={40} height={40} />
        <p className="text-2xl"> Vynx </p>
      </div>
      <Select
        defaultValue={activeWorkspaceId}
        onValueChange={onChangeActiveWorkspace}
      >
        <SelectTrigger className="mt-16 text-neutral-400 bg-transparent">
          <SelectValue placeholder="Select a workspace" />
        </SelectTrigger>
        <SelectContent className="bg-[#111111] backdrop-blur-xl">
          <SelectGroup>
            <SelectLabel>Workspaces</SelectLabel>
            <Separator />
            {workspace.workspace.map((workspace) => (
              <SelectItem key={workspace.id} value={workspace.id}>
                
                {workspace.name}
              </SelectItem>
            ))}

            {/* this below code is for if the user is membe rof another workspace as well */}
            {
              workspace.members.length >0 &&
              workspace.members.map((workspace) => 
              workspace.WorkSpace && (
                <SelectItem key={workspace.WorkSpace.id} value={workspace.WorkSpace.id}>
                  {workspace.WorkSpace.name}
                </SelectItem>
              ))
            }
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* WILL SHOW THE INVITE OPETION ONLY IF IT IS A PUBLIC WORKSPACE AND ONLY USERS WHO ARE ON PAID PLAN CAN DO THIS */}
{ currentWorkspace?.type==='PUBLIC' &&
workspace.subscription?.plan === 'PRO' && 
(<Modal trigger={
  <span className="text-sm cursor-pointer flex items-center 
  justify-center bg-neutral-800/90 hover:bg-neutral-800/60 
  w-full rounded-sm p-[5px] gap-2">
    <PlusCircle size={15} className="text-neutral-800/90 fill-neutral-500"/>
    <span className="text-neutral-400 font-semibold text-xs">
    Invite To Workspace
    </span>
  </span>
  } 
  title="Invite To Workspace" 
description="Invite other users to your Workspace" >
  <Search workspaceId={activeWorkspaceId}/>
</Modal>
)}
    <p className="w-full text-[#9D9D9D] font-bold mt-4">Menu</p>
    <nav className="w-full">
      <ul>
        {
          menuItems.map((item)=> (
            <SidebarItem href={item.href}
            icon={item.icon}
            selected={pathName === item.href}
            title={item.title}
            key={item.title}
            notifications={
              (item.title === 'Notifications' &&
                count._count &&
                count._count.notification) ||
                0
            }/>
          ))
        } 
        </ul>
    </nav>
    <Separator className="w-4/5"/>
    <p className="w-full text-[#9D9D9D] font-bold mt-4"> Workspaces </p>

    {/* this is for free users, asking them to upgrade to pro for more workspaces */}
    {
          workspace.workspace.length === 1 &&
          workspace.members.length === 0 && (
            <div className="w-full mt-[-10px]">
              <p className="text-[#3c3c3c] font-medium text-sm">
                {workspace.subscription?.plan === 'FREE' ? 'Upgrade to create workspaces' :
                'No Workspaces' }

              </p>

            </div>
          )
        }
    <nav className="w-full">
      <ul className="h-[150px] overflow-auto overflow-x-hidden fade-layer">
       {/* all the workspaces that the user owns */}
        {workspace.workspace.length > 0 && 
        workspace.workspace.map(
          (item) => 
            item.type !== 'PERSONAL' && (
        <SidebarItem href={`/dashboard/${item.id}`}
        selected= {pathName === `/dashboard/${item.id}`} 
        title={item.name}
        notifications={0} 
        key={item.name}
        icon={<WorkspacePlaceholder>
          {item.name.charAt(0)}
        </WorkspacePlaceholder>} />
      )
      )}


        {/* all the workspaces the user is a member of */}
        {workspace.members.length > 0 && 
        workspace.members.map((item)=> (
          <SidebarItem href={`/dashboard/${item.WorkSpace.id}`}
        selected= {pathName === `/dashboard/${item.WorkSpace.id}`} 
        title={item.WorkSpace.name}
        notifications={0} 
        key={item.WorkSpace.name}
        icon={<WorkspacePlaceholder>
          {item.WorkSpace.name.charAt(0)}
        </WorkspacePlaceholder>} />
        ))

        }

        
      </ul>
    </nav>
    <Separator className="w-4/5"/>
    {workspace.subscription?.plan === 'FREE' && 
    <GlobalCard title="Upgrade to Pro"
    description="Unlock I features like transcription, AI summary and more."
    footer={
      <PaymentButton/>

    }>
      
      </GlobalCard>}
    </div>
  )

  return (<div className="full">
    {/* INFOBAR */}
    <InfoBar/>
    {/* Sheet - this sheet helps us open up sidebar in mobile and desktop  */}
    <div className="md:hidden fixed my-4">
      <Sheet >
        <SheetTrigger asChild className="ml-2">
          <Button variant={'ghost'} 
          className="mt-[2px]">
            <Menu/>
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'} className="p-0 w-fit h-full">
          {SidebarSection}
        </SheetContent>
      </Sheet>
    </div>
    <div className="md:block hidden h-full">{SidebarSection}</div>

  </div>)
};

export default Sidebar;
