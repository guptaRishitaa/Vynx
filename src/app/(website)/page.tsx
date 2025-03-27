'use client'
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, CheckCircle2, Users, Video, Zap } from "lucide-react";
import { useState } from "react";



export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState("professional") 
  return (
    
      // <main >
      //   Page
      // </main>

      // app/page.js (Landing Page)
<div className="flex flex-col min-h-screen bg-background text-foreground px-4">
  
      <section className="py-20">
        <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">VYNX</h1>
          <div className="flex flex-col md:flex-row items-center">
            
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Personalized Video Outreach Powered by AI
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Record, share, and track engagement with personalized videos. Enhance your outreach with AI-generated
                content and real-time notifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8">
                  Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              {/* <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img src="/placeholder.svg?height=600&width=800" alt="Vynx Platform Demo" className="w-full h-auto" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="bg-background/90 p-4 rounded-full cursor-pointer">
                    <Video className="h-10 w-10 text-primary" />
                  </div>
                </div>
              </div> */}

<div className="relative rounded-lg overflow-hidden shadow-xl bg-card border border-border">
                <div className="aspect-video p-4">
                  {/* Animated Recording Interface */}
                  <div className="relative h-full w-full bg-background rounded-md overflow-hidden">
                    {/* Animated Recording Header */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-muted flex items-center px-3 border-b border-border">
                      <div className="flex space-x-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs font-medium mx-auto">Screen Recording</div>
                    </div>

                    {/* Animated Content */}
                    <div className="pt-8 px-3 pb-3 h-full flex flex-col">
                      {/* Animated typing text */}
                      <div className="h-6 mb-3 flex items-center">
                        <div className="typing-effect">
                          <span className="text-sm font-mono">Welcome to Vynx Demo</span>
                        </div>
                      </div>

                      {/* Animated chart/graph */}
                      <div className="flex-1 flex items-end space-x-2 pb-4">
                        <div className="w-1/6 bg-primary/20 h-[20%] animate-grow-bar"></div>
                        <div className="w-1/6 bg-primary/40 h-[30%] animate-grow-bar animation-delay-200"></div>
                        <div className="w-1/6 bg-primary/60 h-[40%] animate-grow-bar animation-delay-400"></div>
                        <div className="w-1/6 bg-primary/80 h-[60%] animate-grow-bar animation-delay-600"></div>
                        <div className="w-1/6 bg-primary h-[50%] animate-grow-bar animation-delay-800"></div>
                        <div className="w-1/6 bg-primary/60 h-[35%] animate-grow-bar animation-delay-1000"></div>
                      </div>
                    </div>

                    {/* Recording Controls */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-muted flex items-center justify-center space-x-4 border-t border-border">
                      <div className="h-8 w-8 rounded-full bg-red-500 animate-pulse flex items-center justify-center">
                        <div className="h-3 w-3 bg-white rounded-sm"></div>
                      </div>
                      <div className="h-6 w-6 rounded-full bg-card border border-border"></div>
                      <div className="h-6 w-6 rounded-full bg-card border border-border"></div>
                    </div>

                    {/* Animated Recording Indicator */}
                    <div className="absolute top-3 right-3 flex items-center">
                      <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse mr-1"></div>
                      <span className="text-xs text-red-500">REC</span>
                    </div>

                    {/* Animated Time Counter */}
                    <div className="absolute top-3 left-3 text-xs font-mono time-counter">00:00</div>
                  </div>

                  {/* Animated Sharing Interface */}
                  <div className="absolute bottom-4 right-4 bg-card border border-border rounded-lg shadow-lg p-3 w-32 opacity-0 animate-slide-in">
                    <div className="text-xs font-medium mb-2">Share Video</div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded-full w-full"></div>
                      <div className="h-2 bg-muted rounded-full w-3/4"></div>
                      <div className="h-5 bg-primary rounded-md w-full mt-3"></div>
                    </div>
                  </div>

                  {/* Animated Notification */}
                  <div className="absolute top-4 left-4 bg-card border border-border rounded-lg shadow-lg p-3 w-36 opacity-0 animate-notification">
                    <div className="text-xs font-medium mb-1">New View!</div>
                    <div className="text-xs text-muted-foreground">Client X watched your video</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, share, and track personalized video content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Recording</h3>
              <p className="text-muted-foreground">
                Record your screen, camera, and microphone through both web and desktop applications.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Content</h3>
              <p className="text-muted-foreground">
                Automatically generate titles, descriptions, summaries, and transcripts for your videos.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Engagement Tracking</h3>
              <p className="text-muted-foreground">
                Get notified when viewers watch your videos and track engagement metrics.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Workspace Management</h3>
              <p className="text-muted-foreground">
                Organize videos in personal and public workspaces with team collaboration features.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Easy Sharing</h3>
              <p className="text-muted-foreground">
                Share videos via direct links or embed them in emails with custom thumbnails.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Desktop Application</h3>
              <p className="text-muted-foreground">
                Native apps for Windows and macOS with screen recording and real-time upload.
              </p>
            </div>
          </div>
        </div>
      </section>


 {/* Pricing Section */}
 <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for you and your team
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div  onClick={() => setSelectedPlan("free")} 
            className={`flex-1 rounded-lg shadow-lg overflow-hidden border cursor-pointer transition-all 
              ${selectedPlan === "free" ? "border-2 border-primary shadow-xl scale-105" : "border-border bg-card"}`}>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">Free Trial</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
                <Button className="w-full mb-6">
                  Get Started
                </Button>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>25 videos per month (720p only)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>5 min per video</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>1 Organization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>No team members</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>1-time AI features test</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan */}
            <div onClick={() => setSelectedPlan("professional")}
            className={`flex-1 rounded-lg shadow-lg overflow-hidden border-2 cursor-pointer transition-all relative
              ${selectedPlan === "professional" ? "border-primary shadow-xl scale-105" : "border-border bg-card"}`}>
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium rounded-bl-lg">
                Popular
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">Professional Plan</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
                <Button className="w-full mb-6">Get Started</Button>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Unlimited videos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Unlimited duration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Unlimited organizations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>All AI features</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">Have questions about Vynx? We're here to help.</p>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-sm border border-border">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full p-3 bg-background border border-input rounded-md"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-3 bg-background border border-input rounded-md"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full p-3 bg-background border border-input rounded-md"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 bg-background border border-input rounded-md"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      </div>

  );
}

      
    
  
