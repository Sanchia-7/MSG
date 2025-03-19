"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function QuoteForm() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    size: "",
    class: "",
    face: "",
    sch: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formState)
    // Reset form or show success message
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Your name"
            value={formState.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            placeholder="Your phone number"
            value={formState.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Your email"
            value={formState.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="type">Type of Flanges</Label>
          <Select value={formState.type} onValueChange={(value) => handleChange("type", value)}>
            <SelectTrigger id="type">
              <SelectValue placeholder="Weldneck Flange" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weldneck">Weldneck Flange</SelectItem>
              <SelectItem value="slip-on">Slip-on Flange</SelectItem>
              <SelectItem value="blind">Blind Flange</SelectItem>
              <SelectItem value="threaded">Threaded Flange</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="size">Size</Label>
          <Select value={formState.size} onValueChange={(value) => handleChange("size", value)}>
            <SelectTrigger id="size">
              <SelectValue placeholder="1/2″" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1/2">1/2″</SelectItem>
              <SelectItem value="3/4">3/4″</SelectItem>
              <SelectItem value="1">1″</SelectItem>
              <SelectItem value="2">2″</SelectItem>
              <SelectItem value="3">3″</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="class">Class</Label>
          <Select value={formState.class} onValueChange={(value) => handleChange("class", value)}>
            <SelectTrigger id="class">
              <SelectValue placeholder="150#" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="150">150#</SelectItem>
              <SelectItem value="300">300#</SelectItem>
              <SelectItem value="600">600#</SelectItem>
              <SelectItem value="900">900#</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="face">Face</Label>
          <Select value={formState.face} onValueChange={(value) => handleChange("face", value)}>
            <SelectTrigger id="face">
              <SelectValue placeholder="RF" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rf">RF</SelectItem>
              <SelectItem value="ff">FF</SelectItem>
              <SelectItem value="rtj">RTJ</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="sch">Sch</Label>
          <Select value={formState.sch} onValueChange={(value) => handleChange("sch", value)}>
            <SelectTrigger id="sch">
              <SelectValue placeholder="Ss" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ss">Ss</SelectItem>
              <SelectItem value="std">Std</SelectItem>
              <SelectItem value="xs">XS</SelectItem>
              <SelectItem value="xxs">XXS</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full">
          SUBMIT YOUR QUOTE
        </Button>
      </form>
    </motion.div>
  )
}

