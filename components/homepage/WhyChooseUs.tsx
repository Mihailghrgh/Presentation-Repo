"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Scale, TrendingUp, Calendar } from "lucide-react";

const specialties = [
  {
    id: 1,
    icon: Monitor,
    title: "Cybertech",
    description:
      "We place security analysts, engineers, and architects who can safeguard your organization from threats.",
    color: "from-blue-400 to-cyan-300",
  },
  {
    id: 2,
    icon: Scale,
    title: "Legal",
    description:
      "Finding legal experts in Cybersecurity, Data Privacy, and eDiscovery, including Counsels and Project Managers.",
    color: "from-purple-400 to-pink-300",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Go-To-Market (GTM)",
    description:
      "Matching you with the revenue generation roles who will drive your business forward in the Cybersecurity and eDiscovery space.",
    color: "from-green-400 to-emerald-300",
  },
  {
    id: 4,
    icon: Calendar,
    title: "Senior Appointments",
    description:
      "Recruiting executive roles like CISOs, CROs, and Consulting Partners who lead and transform your organization.",
    color: "from-orange-400 to-red-300",
  },
];

export default function SpecialtiesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))] -z-10" />

      {/* Floating elements for visual interest */}
      <div className="absolute top-32 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 left-20 w-28 h-28 bg-cyan-500/10 rounded-full blur-xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 text-cyan-200 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-cyan-400/30">
            🎯 OUR RECRUITMENT SPECIALTIES
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Tailored Recruitment{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Solutions
            </span>
            <br />
            for Every Need
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            We understand that every business is unique, which is why our
            recruitment solutions are customized to your specific requirements.
            Whether you need deeply technical experts or high-level strategic
            leaders, TalentConnect has the experience and network to find the
            best fit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {specialties.map((specialty) => {
            const IconComponent = specialty.icon;
            return (
              <Card
                key={specialty.id}
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-500 group h-full"
              >
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${specialty.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {specialty.title}
                    </h3>
                  </div>

                  <p className="text-blue-100 leading-relaxed flex-1">
                    {specialty.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Get In Touch
          </Button>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.1)'%3e%3cpath d='m0 .5 32 0M.5 0v32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
}
