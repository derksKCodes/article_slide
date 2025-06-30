"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    title: "Loud Music at All Hours",
    content:
      "Nothing ruins a peaceful evening like bass-heavy music thumping through your walls at midnight. Whether it's a weeknight or weekend, considerate neighbors understand that sound travels. Excessive noise shows a lack of respect for shared living spaces and can seriously impact sleep quality and daily routines.",
    image: "/images/noise.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Parking in Your Designated Spot",
    content:
      "Coming home to find someone else's car in your assigned parking space is incredibly frustrating. This inconsiderate behavior forces you to park blocks away or pay for alternative parking. It's a clear violation of property boundaries that can escalate neighborhood tensions quickly.",
    image: "/images/parking.png?height=300&width=400",
  },
  {
    id: 3,
    title: "Letting Dogs Bark Continuously",
    content:
      "While dogs naturally bark, allowing constant barking shows poor pet ownership. Neighbors shouldn't have to endure hours of non-stop barking, especially during early morning or late evening hours. Responsible pet owners train their dogs and address excessive barking through proper exercise and attention.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "Not Picking Up After Their Pets",
    content:
      "Leaving pet waste on sidewalks, lawns, or common areas is both unsanitary and disrespectful. This behavior creates health hazards and unpleasant odors that affect the entire neighborhood. Carrying waste bags and cleaning up after pets is a basic responsibility of pet ownership.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    title: "Blocking Driveways and Walkways",
    content:
      "Parking across driveways or leaving items that block walkways creates accessibility issues and safety hazards. This inconsiderate behavior can prevent emergency vehicle access and makes it difficult for residents to enter or exit their properties. Clear pathways are essential for neighborhood safety.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    title: "Throwing Loud Parties Without Notice",
    content:
      "Surprise parties that go late into the night catch neighbors off guard and disrupt their plans. A simple heads-up allows neighbors to prepare for noise or make alternative arrangements. Considerate party hosts communicate with neighbors and respect reasonable noise limits and time boundaries.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 7,
    title: "Not Maintaining Their Property",
    content:
      "Overgrown lawns, peeling paint, and accumulated junk affect the entire neighborhood's appearance and property values. While everyone has different standards, basic maintenance shows respect for the community. Neglected properties can attract pests and create safety hazards for everyone nearby.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 8,
    title: "Excessive Outdoor Lighting",
    content:
      "Bright security lights that shine directly into neighbors' windows disrupt sleep and privacy. While safety lighting is important, considerate neighbors use motion sensors and directional fixtures. Excessive lighting can feel invasive and make it difficult for neighbors to enjoy their own outdoor spaces.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 9,
    title: "Smoking Near Shared Spaces",
    content:
      "Cigarette smoke drifts into neighboring properties through windows and ventilation systems, affecting air quality and health. Smoking near property lines, balconies, or common areas forces neighbors to breathe secondhand smoke. Designated smoking areas away from shared spaces show consideration for others' health preferences.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 10,
    title: "Being Confrontational About Minor Issues",
    content:
      "Aggressive responses to polite requests create hostile neighborhood environments. Minor issues like occasional noise or parking mistakes can be resolved through friendly communication. Neighbors who immediately escalate situations or respond with hostility make the entire community uncomfortable and stressed.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">10 Most Annoying Things Neighbors Do</h1>
        <p className="text-muted-foreground">
          Navigate through the slides to discover the most frustrating neighbor behaviors that affect community harmony
        </p>
      </div>

      <Card className="mb-6">
        <CardContent className="p-0">
          <div className="relative">
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt={slides[currentSlide].title}
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{slides[currentSlide].title}</h2>
            <p className="text-muted-foreground leading-relaxed">{slides[currentSlide].content}</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between mb-6">
        <Button
          onClick={prevSlide}
          variant="outline"
          disabled={currentSlide === 0}
          className="flex items-center gap-2 bg-transparent"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>

        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-primary" : "bg-muted"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          variant="outline"
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-2 bg-transparent"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        <p>Use the navigation buttons or dots to browse through all slides</p>
      </div>
    </div>
  )
}
