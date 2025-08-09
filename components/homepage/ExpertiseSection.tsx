"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building2, Database } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Users,
    percentage: "98%",
    title: "Candidate Retention",
    description:
      "of candidates we place remain in their roles or are promoted within 18 months",
  },
  {
    id: 2,
    icon: Building2,
    number: "1,000+",
    title: "Successful Placements",
    description:
      "placements made for companies across industries like Banking, SaaS, Government, and more.",
  },
  {
    id: 3,
    icon: Database,
    number: "120,000+",
    title: "Candidate Database",
    description:
      "a vast database of candidates ready to meet your specific needs.",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))] -z-10" />

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-blue-400/30">
            ⭐ WHY CHOOSE US?
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Expertise That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Delivers Results
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            At Iceberg, we don`t just fill positions—we find the perfect
            fit. We understand the critical role talent plays in your business
            success, especially in the fast-evolving Cybersecurity and
            eDiscovery industries. Our team has built a global network across 23
            countries, ensuring access to the best candidates, from technical
            engineers to C-suite executives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <Card
                key={stat.id}
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-500 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {stat.percentage || stat.number}
                    </div>
                    <h3 className="text-xl font-semibold text-blue-200 mb-3">
                      {stat.title}
                    </h3>
                  </div>

                  <p className="text-blue-100 leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Learn More About Us
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
