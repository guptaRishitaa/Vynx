import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import React from "react";
import Loader from "../loader";
import VideoRecorderDuotone from "@/components/icons/video-recorder-duotone";
import { FileDuoToneBlack } from "@/components/icons";
import { Bot, DownloadIcon, FileTextIcon, Pencil, StarsIcon } from "lucide-react";

type Props = {
  plan: "PRO" | "FREE";
  videoId: string;
  trial: boolean;
};

const AiTools = ({ plan, videoId, trial }: Props) => {
  // WIP: setup the ai hook
  return (
    <TabsContent
      value="Ai Tools"
    >
      <div className="flex items-center">
        <div className="w-8/12">
          <h2 className="text-3xl font-bold"> Ai Tools</h2>
          <p>
            {" "}
            Take your video to the next <br /> step with the power of AI!
          </p>
        </div>
        {/* {plan === 'FREE' ? (!trial ? '' : '') : ''} */}
        <div className="flex items-center justify-between gap-4">
          <Button className="mt-2 text-sm">
            <Loader state={false} color="#000">
              Try Now
            </Loader>
          </Button>

          {/* WIP: Pay now button */}
          <Button className="mt-2 text-sm" variant={"secondary"}>
            <Loader state={false} color="#000">
              Pay Now
            </Loader>
          </Button>
        </div>

      </div>

      <div className="border-[1px] rounded-xl p-4 gap-4 flex flex-col bg-[#1b0f1b7f]">
        <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-[#a22fe0]"> Vynx Ai</h2>
            <StarsIcon color="#a22fe0"
            fill="#a22fe0"/>
        </div>
        <div className="flex gap-2 items-start">
            <div className="p-2 rounded-full border-[#2d2d2d] bg-[#2b2b2b]">
                <Pencil color="#a22fe0"/>
            </div>
            <div className="flex flex-col">
                <h3 className="textmdg"> Summary</h3>
                <p className="text-muted-foreground text-sm">
                    Generate a description of your video using AI
                </p>
            </div>
        </div>
        <div className="flex gap-2 items-start">
            <div className="p-2 rounded-full border-[#2d2d2d] bg-[#2b2b2b]">
                <FileTextIcon color="#a22fe0"/>
            </div>
            <div className="flex flex-col">
                <h3 className="textmdg"> Summary</h3>
                <p className="text-muted-foreground text-sm">
                    Generate a description of your video using AI
                </p>
            </div>
        </div>
        <div className="flex gap-2 items-start">
            <div className="p-2 rounded-full border-[#2d2d2d] bg-[#2b2b2b]">
                <Bot color="#a22fe0"/>
            </div>
            <div className="flex flex-col"> 
                <h3 className="textmdg"> AI Agent</h3>
                <p className="text-muted-foreground text-sm">
                    Viewers can ask questions on your video and our AI agent will respond
                </p>
            </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default AiTools;
