"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Video, ArrowLeft, Sun, Moon, FileText, Home } from "lucide-react"
import { useTheme } from "next-themes"

export default function GuidePage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("overview")

  // Once mounted, we can access the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Scroll to section when clicking on sidebar links
  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      const sections = [
        "overview",
        "workspaces",
        "team-members",
        "recording",
        "sharing",
        "desktop-plugin",
        "resolution",
        "plans",
      ]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mounted])

  // Avoid hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
     

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4 lg:w-1/5">
          <div className="sticky top-24 space-y-1 bg-card p-4 rounded-lg border border-border">
            <h3 className="font-medium text-lg mb-3">Table of Contents</h3>
            <ul className="space-y-1">
              <li>
                <Button
                  variant={activeSection === "overview" ? "secondary" : "ghost"}
                  className="w-full justify-start text-sm"
                  onClick={() => scrollToSection("overview")}
                >
                  Overview
                </Button>
              </li>
              <li>
                <Button
                  variant={activeSection === "workspaces" ? "secondary" : "ghost"}
                  className="w-full justify-start text-sm"
                  onClick={() => scrollToSection("workspaces")}
                >
                  1. Creating Workspaces
                </Button>
              </li>
              <li>
                <Button
                  variant={activeSection === "team-members" ? "secondary" : "ghost"}
                  className="w-full justify-start text-sm"
                  onClick={() => scrollToSection("team-members")}
                >
                  2. Adding Team Members
                </Button>
              </li>
              <li>
                <Button
                  variant={activeSection === "recording" ? "secondary" : "ghost"}
                  className="w-full justify-start text-sm"
                  onClick={() => scrollToSection("recording")}
                >
                  3. Recording Videos
                </Button>
              </li>
              <li>
                <Button
                  variant={activeSection === "sharing" ? "secondary" : "ghost"}
                  className="w-full justify-start text-sm"
                  onClick={() => scrollToSection("sharing")}
                >
                  4. Sharing Video Links
                </Button>
              </li>
              <li>
                <Button
                  variant={activeSection === "desktop-plugin" ? "secondary" : "ghost"}
                  className="w-full justify-start text-sm"
                  onClick={() => scrollToSection("desktop-plugin")}
                >
                  5. Desktop Plugin
                </Button>
              </li>
              <li>
                <Button
                  variant={activeSection === "resolution" ? "secondary" : "ghost"}
                  className="w-full justify-start text-sm"
                  onClick={() => scrollToSection("resolution")}
                >
                  6. Video Resolution
                </Button>
              </li>
              <li>
                <Button
                  variant={activeSection === "plans" ? "secondary" : "ghost"}
                  className="w-full justify-start text-sm"
                  onClick={() => scrollToSection("plans")}
                >
                  7. Paid or Free Plans
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4 lg:w-4/5">
          <Card>
            <CardContent className="p-6 md:p-8 space-y-8">
              <div id="overview" className="scroll-mt-24">
                <h1 className="text-3xl font-bold mb-4">Vynx User Guide</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Welcome to vynx, the video recording and sharing platform designed to streamline your communication.
                  In this guide, we'll walk you through key features such as creating workspaces, managing teams,
                  recording videos, sharing content, and more. Let's get started!
                </p>

                <div className="bg-accent/30 p-4 rounded-lg">
                  <h2 className="font-medium text-lg mb-2">Table of Contents</h2>
                  <ol className="list-decimal list-inside space-y-1 ml-2">
                    <li>Creating Workspaces</li>
                    <li>Adding Team Members</li>
                    <li>Recording Videos</li>
                    <li>Sharing Video Links</li>
                    <li>Downloading the Desktop Plugin</li>
                    <li>Selecting Video Resolution</li>
                    <li>Choosing Paid or Free Plans</li>
                  </ol>
                </div>
              </div>

              <div id="workspaces" className="scroll-mt-24 pt-4 border-t border-border">
                <h2 className="text-2xl font-bold mb-4">1. Creating Workspaces</h2>
                <p className="mb-4">
                  Workspaces in vynx help you organize videos, projects, and teams. To create a new workspace:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
                  <li>Log in to your vynx account.</li>
                  <li>Navigate to the dashboard and click on the Workspaces tab located in the sidebar.</li>
                  <li>Select the "Create New Workspace" button.</li>
                  <li>Enter a name for your workspace (e.g., "Marketing Team", "Product Demos").</li>
                  <li>Customize the workspace with relevant tags or color schemes for easy identification.</li>
                  <li>Click "Create" to finalize.</li>
                </ol>
                <p>Your workspace is now ready! You can create multiple workspaces for different teams or projects.</p>
              </div>

              <div id="team-members" className="scroll-mt-24 pt-4 border-t border-border">
                <h2 className="text-2xl font-bold mb-4">2. Adding Team Members</h2>
                <p className="mb-4">
                  Collaboration is a key feature in vynx. Here's how you can add team members to your workspace:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
                  <li>In your workspace, navigate to the "Team Members" tab.</li>
                  <li>Click the "Invite Member" button.</li>
                  <li>Enter the email addresses of the people you'd like to invite.</li>
                  <li>Assign them roles (e.g., Viewer, Editor, Admin) based on their responsibilities.</li>
                  <li>Click "Send Invites".</li>
                </ol>
                <p>Once invited, team members will receive an email with instructions to join the workspace.</p>
              </div>

              <div id="recording" className="scroll-mt-24 pt-4 border-t border-border">
                <h2 className="text-2xl font-bold mb-4">3. Recording Videos</h2>
                <p className="mb-4">
                  vynx allows you to record and share videos directly from your browser or desktop. To record a video:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
                  <li>Navigate to the workspace where you want to save the video.</li>
                  <li>Click on the "Record" button, located in the top navigation bar.</li>
                  <li>
                    Select your recording type:
                    <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                      <li>Screen only: Record your screen without the camera.</li>
                      <li>Camera only: Record yourself via webcam.</li>
                      <li>Screen + Camera: Record your screen with a picture-in-picture view of yourself.</li>
                    </ul>
                  </li>
                  <li>Choose your microphone and camera settings.</li>
                  <li>Click "Start Recording".</li>
                  <li>To stop recording, hit the "Stop" button or use the keyboard shortcut Shift + S.</li>
                </ol>
                <p>The video will automatically upload to your workspace when finished.</p>
              </div>

              <div id="sharing" className="scroll-mt-24 pt-4 border-t border-border">
                <h2 className="text-2xl font-bold mb-4">4. Sharing Video Links</h2>
                <p className="mb-4">Once you've recorded your video, sharing is just a few clicks away:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
                  <li>After recording, navigate to the video file within your workspace.</li>
                  <li>Click on the "Share" button next to the video.</li>
                  <li>
                    Choose your sharing preferences:
                    <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                      <li>Public: Anyone with the link can view the video.</li>
                      <li>Private: Only team members within the workspace can access the video.</li>
                      <li>Password-protected: Set a password for extra security.</li>
                    </ul>
                  </li>
                  <li>Copy the generated link and share it via email, social media, or other platforms.</li>
                </ol>
                <p>Your video link is now ready to be shared!</p>
              </div>

              <div id="desktop-plugin" className="scroll-mt-24 pt-4 border-t border-border">
                <h2 className="text-2xl font-bold mb-4">5. Downloading the Desktop Plugin</h2>
                <p className="mb-4">For a smoother experience, you can use the vynx Desktop Plugin for recording:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
                  <li>Go to the vynx Dashboard and click on the Downloads section.</li>
                  <li>
                    Select the "Download Desktop Plugin" button compatible with your operating system (Mac or Windows).
                  </li>
                  <li>Install the plugin by following the on-screen instructions.</li>
                  <li>Once installed, you'll see an vynx icon in your desktop toolbar.</li>
                </ol>
                <p>You can now access vynx directly from your desktop, even when your browser is closed.</p>
              </div>

              <div id="resolution" className="scroll-mt-24 pt-4 border-t border-border">
                <h2 className="text-2xl font-bold mb-4">6. Selecting Video Resolution</h2>
                <p className="mb-4">
                  vynx allows you to select different video resolutions to ensure high-quality recordings:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
                  <li>Before starting your video recording, click the "Settings" icon in the recording window.</li>
                  <li>
                    In the "Resolution" dropdown, choose your preferred resolution:
                    <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                      <li>1080p (Full HD): Ideal for high-quality recordings.</li>
                      <li>720p (HD): A good balance between quality and file size.</li>
                      <li>480p (SD): Suitable for faster uploads or low-bandwidth situations.</li>
                    </ul>
                  </li>
                  <li>Once selected, your recording will proceed with the chosen resolution.</li>
                </ol>
                <p className="text-sm text-muted-foreground italic">
                  Note: Higher resolutions may result in larger file sizes and longer upload times.
                </p>
              </div>

              <div id="plans" className="scroll-mt-24 pt-4 border-t border-border">
                <h2 className="text-2xl font-bold mb-4">7. Choosing Paid or Free Plans</h2>
                <p className="mb-4">vynx offers both free and paid plans to cater to different user needs:</p>

                <Tabs defaultValue="free" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="free">Free Plan</TabsTrigger>
                    <TabsTrigger value="paid">Paid Plan</TabsTrigger>
                  </TabsList>
                  <TabsContent value="free" className="p-4 bg-accent/20 rounded-lg mt-2">
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>Limited to 5 recordings per month.</li>
                      <li>1 GB storage.</li>
                      <li>Basic editing tools.</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="paid" className="p-4 bg-primary/10 rounded-lg mt-2">
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>Unlimited recordings.</li>
                      <li>Up to 50 GB of storage.</li>
                      <li>Advanced editing tools.</li>
                      <li>Priority support.</li>
                      <li>Custom branding options.</li>
                    </ul>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 bg-card p-4 rounded-lg border border-border">
                  <h3 className="font-medium mb-2">Need More Information?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you have any questions about our plans or need help choosing the right one for your needs, our
                    support team is here to help.
                  </p>
                  <Button variant="outline" size="sm">
                    Contact Support
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Video className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} vynx. All rights reserved.
              </span>
            </div>
            <div className="flex space-x-6">
              <Link href="/help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

