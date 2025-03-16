import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, Send, CheckCircle2, GraduationCap } from "lucide-react"
import Header from "@/components/header"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-pink-300 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-yellow-300 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-5"></div>

        {/* Contact Header */}
        <div className="container mx-auto px-6 pt-16 pb-8 text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-orange-400 rounded-full mx-auto"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-300 rounded-lg rotate-12"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have questions about our courses? Want to join the Plotit community?
            <br />
            We'd love to hear from you!
          </p>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-8">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Left Column - Contact Form & Course Registration */}
            <div className="space-y-12">
              {/* Contact Form */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-pink-300 rounded-lg rotate-12"></div>

                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Us a Message
                </h2>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-white/10 border-0 focus-visible:ring-pink-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/10 border-0 focus-visible:ring-pink-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      className="bg-white/10 border-0 min-h-[120px] focus-visible:ring-pink-300"
                    />
                  </div>

                  {/* reCAPTCHA simulation */}
                  <div className="bg-white/10 rounded-lg p-3 flex items-center gap-3">
                    <Checkbox
                      id="recaptcha"
                      className="data-[state=checked]:bg-green-500 data-[state=checked]:text-white"
                    />
                    <Label htmlFor="recaptcha" className="text-sm text-gray-300">
                      I'm not a robot
                    </Label>
                    <div className="ml-auto">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="reCAPTCHA"
                        width={40}
                        height={40}
                        className="opacity-70"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Course Registration Form */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-300 rounded-full"></div>

                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Course Registration
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-white/10 border-0 focus-visible:ring-yellow-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-white/10 border-0 focus-visible:ring-yellow-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="regEmail">Email Address</Label>
                    <Input
                      id="regEmail"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/10 border-0 focus-visible:ring-yellow-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      className="bg-white/10 border-0 focus-visible:ring-yellow-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">Select Course</Label>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-0 focus:ring-yellow-300">
                        <SelectValue placeholder="Choose a course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="javascript">JavaScript</SelectItem>
                        <SelectItem value="game-dev">Game Development</SelectItem>
                        <SelectItem value="creative-coding">Creative Coding</SelectItem>
                        <SelectItem value="robotics">Robotics and Coding</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                  >
                    Register Now
                  </Button>

                  <p className="text-xs text-gray-400 text-center">
                    By registering, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </div>
            </div>

            {/* Right Column - Contact Information & Why Choose Us */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-300 rounded-lg rotate-12"></div>

                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-300">Email Us</h3>
                      <p className="text-white">helloplotit@gmail.com</p>
                      <p className="text-sm text-gray-400 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-300">Call Us</h3>
                      <p className="text-white">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-400 mt-1">Mon-Fri from 9am to 6pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-4">Why Choose Plotit?</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <p>Expert instructors with years of teaching experience</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <p>Fun, interactive learning environment for children</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <p>Curriculum designed to build real-world skills</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <p>5,000+ happy students since 2020</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Our Courses</h2>
                  <Button variant="link" className="text-pink-400 p-0">
                    View All
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 hover:bg-white/15 transition-colors cursor-pointer">
                    <div className="w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center text-black font-bold">
                      01
                    </div>
                    <span>JavaScript</span>
                  </div>

                  <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 hover:bg-white/15 transition-colors cursor-pointer">
                    <div className="w-8 h-8 bg-purple-200 rounded-lg flex items-center justify-center text-black font-bold">
                      02
                    </div>
                    <span>Game Development</span>
                  </div>

                  <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 hover:bg-white/15 transition-colors cursor-pointer">
                    <div className="w-8 h-8 bg-yellow-200 rounded-lg flex items-center justify-center text-black font-bold">
                      03
                    </div>
                    <span>Creative Coding</span>
                  </div>

                  <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 hover:bg-white/15 transition-colors cursor-pointer">
                    <div className="w-8 h-8 bg-pink-200 rounded-lg flex items-center justify-center text-black font-bold">
                      04
                    </div>
                    <span>Robotics and Coding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-5xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-bold mb-2">Have Questions?</h2>
            <p className="text-gray-400 mb-4">
              Check out our <span className="text-pink-400 underline cursor-pointer">Frequently Asked Questions</span>{" "}
              or get in touch with us directly.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

