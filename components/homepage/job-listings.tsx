import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, DollarSign, Clock } from "lucide-react"

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    logo: "/abstract-tech-logo.png",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    description:
      "We're looking for a Senior Frontend Developer to join our growing team. You'll work on cutting-edge web applications using React, TypeScript, and modern development tools.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "DevOps Engineer",
    company: "CloudVentures",
    logo: "/cloud-company-logo.png",
    location: "Remote",
    salary: "$100,000 - $130,000",
    type: "Full-time",
    description:
      "Join our DevOps team to build and maintain scalable cloud infrastructure. Experience with AWS, Docker, and Kubernetes required.",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
    posted: "1 day ago",
  },
  {
    id: 3,
    title: "Product Manager",
    company: "InnovateLabs",
    logo: "/innovation-company-logo.png",
    location: "New York, NY",
    salary: "$110,000 - $140,000",
    type: "Full-time",
    description:
      "Lead product strategy and development for our flagship SaaS platform. Work closely with engineering and design teams to deliver exceptional user experiences.",
    skills: ["Product Strategy", "Agile", "Analytics", "User Research"],
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "UX/UI Designer",
    company: "DesignStudio Pro",
    logo: "/generic-company-logo.png",
    location: "Los Angeles, CA",
    salary: "$85,000 - $110,000",
    type: "Full-time",
    description:
      "Create beautiful and intuitive user experiences for web and mobile applications. Collaborate with product and engineering teams to bring designs to life.",
    skills: ["Figma", "Sketch", "Prototyping", "User Testing"],
    posted: "1 week ago",
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "DataFlow Systems",
    logo: "/data-company-logo.png",
    location: "Boston, MA",
    salary: "$95,000 - $125,000",
    type: "Full-time",
    description:
      "Analyze complex datasets to drive business insights and build predictive models. Work with machine learning algorithms and statistical analysis.",
    skills: ["Python", "Machine Learning", "SQL", "Statistics"],
    posted: "4 days ago",
  },
  {
    id: 6,
    title: "Backend Developer",
    company: "ServerTech Inc",
    logo: "/server-company-logo.png",
    location: "Austin, TX",
    salary: "$90,000 - $120,000",
    type: "Full-time",
    description:
      "Build robust and scalable backend systems using Node.js and Python. Design APIs and work with databases to support our growing platform.",
    skills: ["Node.js", "Python", "PostgreSQL", "Redis"],
    posted: "5 days ago",
  },
]

export default function JobListings() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Job Opportunities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your next career opportunity with top companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="h-full hover:shadow-2xl hover:cursor-pointer transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={job.logo || "/placeholder.svg"}
                      alt={`${job.company} logo`}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 leading-tight">{job.title}</h3>
                      <p className="text-blue-600 font-medium">{job.company}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {job.type}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {job.salary}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    Posted {job.posted}
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{job.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full hover:cursor-pointer">Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  )
}
