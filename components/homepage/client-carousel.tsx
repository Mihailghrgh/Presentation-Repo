"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { clients } from "./client";

export default function ClientCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            ✨ Trusted Partnerships
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Clients
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We`re proud to partner with industry leaders who trust us to find
            exceptional talent for their teams
          </p>
        </div>

        {/* Featured client spotlight */}
        <div className="mb-16">
          <Card className="max-w-4xl group mx-auto p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-5xl group-hover:text-6xl duration-100">
                    {clients[currentIndex % clients.length].logo}
                  </span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {clients[currentIndex % clients.length].name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {clients[currentIndex % clients.length].industry} • Global
                  Leader
                </p>
                <p className="text-lg text-gray-700 italic">
                  `Exceptional talent acquisition services that consistently
                  deliver top-tier candidates aligned with our company culture
                  and technical requirements.`
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Animated logo carousel */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee space-x-12">
              {clients.concat(clients).map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <Card className="w-48 h-40backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="h-full flex flex-col items-center justify-center p-6">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-3 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                        <span className="font-bold text-5xl group-hover:text-blue-600">
                          {client.logo}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-gray-800 text-center">
                        {client.name}
                      </span>
                      <span className="text-xs text-gray-500 mt-1">
                        {client.industry}
                      </span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Companies Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">10k+</div>
            <div className="text-gray-600">Successful Placements</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='m0 .5 32 0M.5 0v32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
}
