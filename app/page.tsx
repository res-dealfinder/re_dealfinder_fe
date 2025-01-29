"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Building2,
  BarChart3,
  Clock,
  DollarSign,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";
import { PropertySearch } from "@/components/property-search";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background pt-24 pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Make Smarter Property Investment Decisions
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
              Advanced analytics and insights for real estate investors. Analyze
              properties, predict returns, and optimize your portfolio all in
              one place.
            </p>

            <PropertySearch />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <Card className="p-6 bg-background/60 backdrop-blur">
                <BarChart3 className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">
                  Advanced Analytics
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive property analysis with predictive modeling and
                  market insights.
                </p>
              </Card>
              <Card className="p-6 bg-background/60 backdrop-blur">
                <Clock className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Real-Time Data</h3>
                <p className="text-muted-foreground">
                  Stay updated with live market trends, comparable sales, and
                  neighborhood statistics.
                </p>
              </Card>
              <Card className="p-6 bg-background/60 backdrop-blur">
                <DollarSign className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">ROI Forecasting</h3>
                <p className="text-muted-foreground">
                  Accurate return predictions based on historical data and
                  market conditions.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Everything You Need for Property Analysis
            </h2>
            <p className="text-xl text-muted-foreground">
              Powerful tools designed for real estate professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground">
              Real feedback from real estate investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s profile picture`}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div
                  className="flex gap-1 mb-3"
                  aria-label={`Rated ${testimonial.rating} out of 5 stars`}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="text-muted-foreground relative">
                  <span className="sr-only">Testimonial quote:</span>"
                  {testimonial.quote}"
                </blockquote>
                <div
                  className="absolute top-6 right-6 text-primary/10"
                  aria-hidden="true"
                >
                  <svg
                    className="h-8 w-8 transform rotate-180"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.255-.436C11.437 21.862 9.967 24 8 24v2c3.314 0 6-2.686 6-6V8h-4zm14 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.255-.436C25.437 21.862 23.967 24 22 24v2c3.314 0 6-2.686 6-6V8h-4z" />
                  </svg>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that's right for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 ${
                  plan.featured ? "border-primary shadow-lg" : ""
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-2">
                    ${plan.price}
                    <span className="text-base font-normal text-muted-foreground">
                      /mo
                    </span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.featured ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make Better Investment Decisions?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of investors who trust our platform for property
            analysis
          </p>
          <Button size="lg" variant="secondary">
            Start Your Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Real Estate Investor",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    quote:
      "PropAnalyze has transformed how I evaluate properties. The ROI predictions are incredibly accurate, and the market insights have helped me make confident investment decisions.",
  },
  {
    name: "Michael Chen",
    role: "Property Developer",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    quote:
      "The comprehensive analysis tools have saved me countless hours of research. The platform's intuitive interface makes complex data easy to understand and act upon.",
  },
  {
    name: "Emily Rodriguez",
    role: "Portfolio Manager",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    quote:
      "I manage multiple properties, and PropAnalyze has streamlined my entire workflow. The portfolio tracking features are exceptional, and the market insights are invaluable.",
  },
];

const features = [
  {
    title: "Market Analysis",
    description: "Comprehensive market insights and trends",
    points: [
      "Comparable property analysis",
      "Market trend predictions",
      "Neighborhood statistics",
      "Price history tracking",
    ],
  },
  {
    title: "Financial Modeling",
    description: "Detailed financial analysis and projections",
    points: [
      "Cash flow analysis",
      "ROI calculations",
      "Investment scenarios",
      "Tax implications",
    ],
  },
  {
    title: "Property Management",
    description: "Tools for effective property management",
    points: [
      "Expense tracking",
      "Maintenance scheduling",
      "Tenant screening",
      "Document management",
    ],
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for beginning investors",
    features: [
      "Basic property analysis",
      "Market comparables",
      "ROI calculator",
      "5 reports per month",
    ],
  },
  {
    name: "Professional",
    price: "99",
    description: "For serious real estate investors",
    featured: true,
    features: [
      "Advanced property analysis",
      "Custom reports",
      "Portfolio tracking",
      "Unlimited reports",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "199",
    description: "For large teams and organizations",
    features: [
      "Everything in Professional",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "Training sessions",
    ],
  },
];
