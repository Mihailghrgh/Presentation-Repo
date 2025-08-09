"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, User, Eye, Heart } from "lucide-react";
import { articles } from "./articles";

const categoryColors = {
  General: "bg-emerald-500",
  "Industry Knowledge": "bg-blue-500",
  "News and Insights": "bg-purple-500",
  "Career Tips": "bg-orange-500",
  "Market Trends": "bg-teal-500",
  Technology: "bg-indigo-500",
};

export default function NewsInsights() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
            📚 Latest Updates
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            News &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with expert insights, industry trends, and actionable
            strategies for modern recruitment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {articles.map((article) => {
            const isLarge = article.size === "large";
            const isMedium = article.size === "medium";

            return (
              <Card
                key={article.id}
                className={`group cursor-pointer hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 bg-white hover:ring-2 ring-blue-500 ${
                  isLarge
                    ? "md:col-span-2 lg:col-span-2 xl:col-span-2"
                    : isMedium
                    ? "md:col-span-1 lg:col-span-1 xl:col-span-1"
                    : "md:col-span-1 lg:col-span-1 xl:col-span-1"
                } `}
              >
                <div className="flex flex-col h-full">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Featured badge */}
                    {article.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg text-xs">
                          ⭐ Featured
                        </Badge>
                      </div>
                    )}

                    {/* Category badge */}
                    <div className="absolute top-3 right-3">
                      <Badge
                        className={`${
                          categoryColors[article.category] || "bg-gray-500"
                        } text-white border-0 shadow-lg text-xs`}
                      >
                        {article.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content section with white background */}
                  <CardContent className="p-6 bg-white flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <h3 className="font-bold leading-tight text-gray-900 group-hover:border-blue-400 group-hover:text-blue-600 transition-colors text-lg line-clamp-2">
                          {article.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>

                      {/* Author and meta info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-2 border-t border-gray-200">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span className="text-xs">{article.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span className="text-xs">
                              {new Date(article.date).toLocaleDateString(
                                "en-US",
                                { month: "short", day: "numeric" }
                              )}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-3 w-3" />
                            <span className="text-xs">{article.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="h-3 w-3" />
                            <span className="text-xs">{article.likes}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-gray-500">
                          {article.readTime}
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Newsletter signup */}
        <div className="mt-20">
          <div className="relative max-w-5xl mx-auto">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-3xl blur-3xl"></div>

            <Card className="relative bg-white border-0 shadow-2xl rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50"></div>

              <CardContent className="relative p-6 sm:p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                      📬 Newsletter
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      Stay in the{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                        Loop
                      </span>
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      Join 10,000+ professionals getting weekly insights on
                      recruitment trends, industry analysis, and career
                      opportunities.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-500">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Weekly insights
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        No spam, ever
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        Unsubscribe anytime
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your work email"
                        className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
                      />
                    </div>
                    <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                      Subscribe to Newsletter
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>

                    {/* Trust indicators */}
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          10k+
                        </div>
                        <div className="text-xs text-gray-500">Subscribers</div>
                      </div>
                      <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          4.9★
                        </div>
                        <div className="text-xs text-gray-500">Rating</div>
                      </div>
                      <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">
                          Weekly
                        </div>
                        <div className="text-xs text-gray-500">Updates</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='m0 .5 32 0M.5 0v32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
}
