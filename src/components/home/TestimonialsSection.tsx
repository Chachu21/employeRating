// components/home/TestimonialsSection.tsx
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle, Star } from "lucide-react";
import { Testimonial } from "@/components/types/home";

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "HR Director at TechCorp",
    content:
      "This platform has revolutionized our hiring process. We can now verify candidates' work history and performance with confidence.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Developer",
    content:
      "As a professional, this platform has been invaluable for showcasing my verified work history to employers.",
    avatar: "/placeholder.svg",
    rating: 4,
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Operations Manager at Globex",
    content:
      "The ability to request formal recommendations has streamlined our HR processes significantly.",
    avatar: "/placeholder.svg",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="max-w-[900px] mx-auto text-slate-500 md:text-xl dark:text-slate-400">
            Hear from employers and employees using our platform.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                        aria-label={`${i + 1} star${
                          i < testimonial.rating ? " filled" : ""
                        }`}
                      />
                    ))}
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Badge
            variant="outline"
            className="rounded-full px-4 py-1 bg-background"
          >
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3 text-green-500" />
              <span>4.8/5 average rating from 500+ reviews</span>
            </span>
          </Badge>
        </div>
      </div>
    </section>
  );
}
