"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send,  Users } from "lucide-react";

export default function Contactme() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            We did love to hear from you. Send us a message and we all respond
            as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Info Card */}
            <Card className="bg-white/10 backdrop-blur-lg border-cyan-400 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-block-900">
                  <Mail className="h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Phone className="h-4 w-4 text-blue-300" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-white/80">+8801773147066</p>
                    <p className="text-white/80">+8801862253229</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Mail className="h-4 w-4 text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/80">
                      mdsabbirhossain0029@gmail.com
                    </p>
                    <p className="text-white/80">sabbir914091@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <MapPin className="h-4 w-4 text-orange-300" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-white/80">
                      Ishwardi, Pabna,
                      <br />
                      Rajshahi,Bangladesh
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Card */}
            <Card className="bg-white/10 backdrop-blur-lg border-cyan-400 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-pink-600">
                  <Users className="h-5 w-5" />
                  Our Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Our dedicated team of professionals is here to help you with
                  any questions or concerns you may have.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-lg border-cyan-400">
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-white/80">
                  Fill out the form below and we all get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white font-medium">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-yellow-300"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-yellow-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-yellow-300"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-yellow-300 min-h-[120px]"
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-cyan-400 hover:from-yellow-500 hover:to-orange-600 text-block hover:text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer "
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
