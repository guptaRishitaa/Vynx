import VideoRecorderIcon from "@/components/icons/video-recorder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";
import { Search, UploadIcon, Video } from "lucide-react";
import React from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"


type Props = {};

const InfoBar = (props: Props) => {
  return (
    <header className="pl-20 md:pl-[265px] fixed p-4 w-full flex items-center justify-between gap-4">
      <div className="flex gap-4 justify-center items-center border-2 rounded-full px-4 w-full max-w-lg">
        <Search size={25} className="text-[#707070]" />
        <Input
          className="bg-transparent border-none !placeholder-neutral-500"
          placeholder="Search for people, projects, tags & folders"
        />
      </div>
      <div className="flex items-center gap-4">
      <AlertDialog>
  <AlertDialogTrigger asChild>
    <Button className="bg-[#9D9D9D] flex items-center gap-2">
      <UploadIcon size={20} />
      <span className="flex items-center gap-2">Upload</span>
    </Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Install the Vynx Desktop App</AlertDialogTitle>
      <AlertDialogDescription>
        This feature is available only in the desktop version of Vynx. Please download and install the app to continue.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction asChild>
        <a
          href="https://github.com/guptaRishitaa/Vynx-Electron-App/releases/download/v1.1.0/Vynx-0.0.0-arm64.dmg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Download App</Button>
        </a>
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button className="bg-[#9D9D9D] flex items-center gap-2">
      <Video size={20} />
      <span className="flex items-center gap-2">Record</span>
    </Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Install the Vynx Desktop App</AlertDialogTitle>
      <AlertDialogDescription>
        This feature is available only in the desktop version of Vynx. Please download and install the app to continue.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction asChild>
        <a
          href="https://github.com/guptaRishitaa/Vynx-Electron-App/releases/download/v1.1.0/Vynx-0.0.0-arm64.dmg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Download App</Button>
        </a>
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
        <UserButton/>
      </div>
    </header>
  );
};

export default InfoBar;
