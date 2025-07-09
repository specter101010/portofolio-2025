import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContents,
} from "@/components/animate-ui/components/tabs";
import { Label } from "@/components/ui/label";
import {
  Instagram,
  Linkedin,
  Facebook,
  Github,
  MessageCircle,
  Send,
  Phone,
} from "lucide-react";

export const Contact = () => {
  return (
    <Tabs defaultValue="email" className="w-[55rem] h-[20rem] bg-none rounded-lg shadow-lg overflow-hidden">
      <TabsList className="grid w-full grid-cols-2 !bg-transparent border border-white rounded-lg">
        <TabsTrigger className="!text-white" value="email">📩 Email</TabsTrigger>
        <TabsTrigger className="!text-white" value="socials">🌐 Socials</TabsTrigger>
      </TabsList>

      <TabsContents className="w-full h-full p-5 bg-none border border-white rounded-lg">
        {/* Email Tab */}
        <TabsContent value="email" className="h-full overflow-y-auto p-1 rounded-lg">
          <p className="text-sm text-muted-foreground text-white flex items-center gap-2 mb-4">
            <MessageCircle className="w-4 h-4 text-white" />
            Reach me via this form. Your message will be sent to my email.
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 space-y-1 text-white">
              <Label htmlFor="name " className="mb-2 ml-1" >Full Name</Label>
              <Input id="name" placeholder="e.g., John Doe" />
            </div>
            <div className="col-span-1 space-y-1 text-white">
              <Label htmlFor="email" className="mb-2 ml-1" >Email Address</Label>
              <Input id="email" type="email" placeholder="e.g., john@example.com" />
            </div>
            <div className="col-span-1 space-y-1 text-white">
              <Label htmlFor="phone" className="mb-2 ml-1">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+62 812-xxxx-xxxx" />
            </div>
          </div>

          <div className="mt-4 space-y-1 text-white ">
            <Label htmlFor="message" className="mb-2 ml-1">Message</Label>
         <div className="flex gap-15">
         <textarea
              id="message"
              rows={3}
              placeholder="Type your message here..."
              className="w-150 px-3 py-2 text-sm text-white bg-none  border-white border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="pt-4">
            <Button className="flex cursor-pointer items-center gap-2 bg-[#4B70F5] hover:bg-[#4B12F5] ">
              <Send className="w-4 h-4" />
              Send Message
            </Button>
            </div>
         </div>
          </div>

        
        </TabsContent>

        {/* Social Media Tab */}
        <TabsContent value="socials" className="h-full flex flex-col justify-center p-4">
          <p className="text-sm text-muted-foreground mb-4">Connect with me on social media:</p>
          <ul className="space-y-3 text-sm text-blue-400">
            <li className="flex items-center gap-2 hover:text-white transition">
              <Instagram className="w-5 h-5" />
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <Linkedin className="w-5 h-5" />
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <Facebook className="w-5 h-5" />
              <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <Send className="w-5 h-5" />
              <a href="https://threads.net/@yourusername" target="_blank" rel="noopener noreferrer">
                Threads
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <Phone className="w-5 h-5" />
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <Github className="w-5 h-5" />
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </TabsContent>
      </TabsContents>
    </Tabs>
  );
};
