'use client'
import { getAllUserVideos, getWixContent } from '@/actions/workspace'
import Videos from '@/components/global/videos'
import VideoCard from '@/components/global/videos/video-card'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useQueryData } from '@/hooks/useQueryData'
import { cn } from '@/lib/utils'
import { VideosProps } from '@/types/index.type'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { Folder, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
  params :{workspaceId: string}

}

const Home = ({params : {workspaceId}}: Props) => {
    // const videos = await getWixContent()
  return (
    

    <main className="container mx-auto px-4 py-8">
    {/* Welcome Section */}
    <div className="mb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome to Vynx!</h1>
          <p className="text-muted-foreground">Create, share, and track personalized videos.</p>
        </div>
        <Button className="mt-4 md:mt-0" asChild>
          <Link href="/dashboard/record">
            <Plus className="mr-2 h-4 w-4" />
            Record New Video
          </Link>
        </Button>
      </div>
    </div>

    {/* Quick Actions */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Record Video</CardTitle>
          <CardDescription>Create a new video recording</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full" asChild>
            <Link href="/dashboard/record">Start Recording</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">My Videos</CardTitle>
          <CardDescription>View and manage your videos</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href={`/dashboard/${workspaceId}`}>Browse Videos</Link>
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Organize</CardTitle>
          <CardDescription>Manage folders and workspaces</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href={`/dashboard/${workspaceId}`}>
              <Folder className="mr-2 h-4 w-4" />
              Manage Folders
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>

    {/* Getting Started */}
    <Card>
      <CardHeader>
        <CardTitle>Getting Started with Vynx</CardTitle>
        <CardDescription>Follow these simple steps to make the most of your Vynx experience</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-primary/10 rounded-full p-2 mt-0.5">
              <span className="text-sm font-bold">1</span>
            </div>
            <div>
              <h3 className="font-medium">Record your first video</h3>
              <p className="text-sm text-muted-foreground">
                Use our web or desktop app to record your screen, camera, or both.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-primary/10 rounded-full p-2 mt-0.5">
              <span className="text-sm font-bold">2</span>
            </div>
            <div>
              <h3 className="font-medium">Share with your audience</h3>
              <p className="text-sm text-muted-foreground">
                Send a personalized video to a prospect or client via link or embed.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-primary/10 rounded-full p-2 mt-0.5">
              <span className="text-sm font-bold">3</span>
            </div>
            <div>
              <h3 className="font-medium">Track engagement</h3>
              <p className="text-sm text-muted-foreground">
                See who watched your videos and how they engaged with your content.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/guides">View Full Guide</Link>
        </Button>
      </CardFooter>
    </Card>
  </main>
  )
}

export default Home