import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import Loader from "../loader";
import FolderDuotone from "@/components/icons/folder-duotone";
import { useMutationData, usemutationDataState } from "@/hooks/useMutationData";
import { renameFolders } from "@/actions/workspace";
import { Input } from "@/components/ui/input";

type Props = {
  name: string;
  id: string;
  optimistic?: boolean;
  count?: number;
};

const Folder = ({ name, id, optimistic, count }: Props) => {
  const pathName = usePathname();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const folderCardRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();
  const [onRename, setOnRename] = useState(false);

  const Rename = () => setOnRename(true);
  const Renamed = () => setOnRename(false);

  const { mutate, isPending } = useMutationData(
    ["rename-folders"],
    (data: { name: string }) => renameFolders(id, data.name),
    "workspace-folders",
    Renamed
  );
//   Renamed use kiya because jese hi name change hoga, on success we want ki vo variable false ho jaaye.

  const {latestVariable} = usemutationDataState(['rename-folders'])
  
  const handleFolderClick = () => {
    if(onRename) return 
    router.push(`${pathName}/folder/${id}`);
  };

  const handleNameDoubleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    Rename();
  };

  const updateFolderName = (e: React.FocusEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      
        if (inputRef.current.value) {
          mutate({ name: inputRef.current.value, id });
        } else Renamed();
      
    }
  };
  return (
    // click on the box redirects us to the folder
    <div
      onClick={handleFolderClick}
      ref={folderCardRef}
      className={cn(
        optimistic && 'opacity-60',
        "flex hover:bg-neutral-800 cursor-pointer transition duration-150 items-center gap-2 justify-between min-w-[250px] py-4 px-4 rounded-lg border-[1px]"
      )}
    >
      <Loader state={isPending}>
        <div className="flex flex-col gap-[1px]">
          {onRename ? (
            <Input
            onBlur={(e:React.FocusEvent<HTMLInputElement>) => updateFolderName(e)}
              autoFocus
              placeholder={name}
              className="border-none text-base w-full outline-none text-neutral-300 bg-transparent p-0"
              ref={inputRef}
            />
          ) : (
            <p
              onClick={(e) => e.stopPropagation()}
              onDoubleClick={handleNameDoubleClick}
              className="text-neutral-300"
            >
              {latestVariable && latestVariable.status === 'pending' && latestVariable.variables.id === id ? latestVariable.variables.name : name}
            </p>
          )}
          {/* double click on the folder name lets user rename the folder */}

          <span className="text-sm text-neutral-500 ">
            {count || 0} videos{" "}
          </span>
        </div>
      </Loader>
      <FolderDuotone />
    </div>
  );
};

export default Folder;
