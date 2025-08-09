import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "HR Director",
    company: "TechCorp Solutions",
    avatar: "/professional-woman-diverse.png",
    rating: 5,
    content:
      "Outstanding service! They found us the perfect candidate within 2 weeks. Their understanding of our technical requirements was impressive, and the quality of candidates presented was exceptional.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Talent Acquisition Manager",
    company: "InnovateLabs",
    avatar: "/professional-man.png",
    rating: 5,
    content:
      "We've been working with this recruitment team for over a year. They consistently deliver high-quality candidates and have helped us build an amazing development team. Highly recommended!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Startup Founder",
    company: "GrowthTech",
    avatar: "/confident-business-woman.png",
    rating: 5,
    content:
      "As a startup, finding the right talent quickly was crucial. They understood our culture and found candidates who weren't just skilled but also aligned with our values. Game-changer for our hiring process.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "VP of Engineering",
    company: "DataFlow Systems",
    avatar: "/tech-executive.png",
    rating: 5,
    content:
      "Exceptional recruitment service. They took the time to understand our complex technical requirements and company culture. The candidates they presented were all interview-ready and highly qualified.",
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Chief People Officer",
    company: "CloudVentures",
    avatar: "/executive-woman.png",
    rating: 5,
    content:
      "Professional, efficient, and results-driven. They helped us scale our team from 20 to 100+ employees while maintaining quality. Their market insights and candidate vetting process is top-notch.",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Hiring Manager",
    company: "FinTech Pro",
    avatar: "/diverse-business-professionals.png",
    rating: 5,
    content:
      "Best recruitment experience we've had. They don't just send resumes - they provide market insights, salary benchmarks, and truly understand what we're looking for. Worth every penny.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from recruiters and companies who have successfully found top talent through our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full hover:shadow-2xl duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">`{testimonial.content}`</p>

                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
