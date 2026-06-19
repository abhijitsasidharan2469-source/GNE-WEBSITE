import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Briefcase, Heart, Globe, BookOpen, Users, Star, TrendingUp, Zap, CheckCircle2, Linkedin, Target, Lightbulb } from "lucide-react";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "About GNE Infra | Our Story, Culture & Team",
  description:
    "Discover GNE Infra's founding story, company culture, global offices, and the passionate team building the renewable energy future.",
};

export default function AboutPage() {
  const offices = [
    {
      city: "Bangalore, India",
      country: "Headquarters",
      description: "Global headquarters and R&D center",
      team: "200+ team members"
    },
    {
      city: "Delhi, India",
      country: "Operations Hub",
      description: "Project execution and commercial hub",
      team: "80+ professionals"
    },
    {
      city: "Singapore",
      country: "Asia-Pacific",
      description: "Regional office and business development",
      team: "40+ staff"
    },
    {
      city: "Dubai, UAE",
      country: "Middle East Hub",
      description: "Gateway to ME and Africa expansion",
      team: "30+ professionals"
    },
    {
      city: "London, UK",
      country: "Europe Office",
      description: "European market expansion center",
      team: "25+ team members"
    },
    {
      city: "Sydney, Australia",
      country: "APAC Center",
      description: "Australia and Oceania operations",
      team: "20+ professionals"
    }
  ];

  const milestones = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Founded by Lalit Kumarr with a vision to democratize renewable energy in Asia",
      icon: "🌱"
    },
    {
      year: "2017",
      title: "First Major Success",
      description: "Completed India's first 50 MWp utility-scale solar plant in record time",
      icon: "⚡"
    },
    {
      year: "2018",
      title: "International Expansion",
      description: "Opened Singapore office and secured $50M in Series A funding",
      icon: "🌍"
    },
    {
      year: "2019",
      title: "BESS Innovation",
      description: "Launched integrated battery energy storage solutions with AI-powered EMS",
      icon: "🔋"
    },
    {
      year: "2021",
      title: "Global Reach",
      description: "Established presence in 8 countries with 300+ MWp portfolio",
      icon: "🗺️"
    },
    {
      year: "2023",
      title: "The H2 Leap",
      description: "Pioneered green hydrogen integration for industrial decarbonization",
      icon: "♻️"
    },
    {
      year: "2025",
      title: "Carbon Neutral",
      description: "Achieved carbon-neutral operations and 500k+ tons CO₂ reduction impact",
      icon: "🌿"
    }
  ];

  const cultureValues = [
    {
      icon: Heart,
      title: "People First",
      description: "We believe our team is our greatest asset. Investing in growth, wellness, and happiness."
    },
    {
      icon: Briefcase,
      title: "Ownership Mindset",
      description: "Every team member owns their domain. We emppower leadership at all levels."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Industry certifications, training programs, and mentorship opportunities for all."
    },
    {
      icon: Globe,
      title: "Global Diversity",
      description: "40+ nationalities working together. Diversity strengthens our innovation."
    },
    {
      icon: Star,
      title: "Excellence Culture",
      description: "We celebrate wins, learn from failures, and never stop improving."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear pathways from Junior Engineer to VP. Grow with us."
    }
  ];

  const achievements = [
    { metric: "500+", label: "MWp Installed", color: "from-emerald-500 to-green-500" },
    { metric: "15+", label: "Countries", color: "from-blue-500 to-cyan-500" },
    { metric: "€2.5B+", label: "Projects Value", color: "from-purple-500 to-pink-500" },
    { metric: "50k+", label: "Lives Impacted", color: "from-orange-500 to-red-500" }
  ];

  const testimonials = [
    {
      quote: "GNE Infra didn't just build our solar plant—they built a partnership. Their team's commitment to excellence is unmatched.",
      company: "Fortune 500 Energy Company",
      author: "VP Operations"
    },
    {
      quote: "From concept to commissioning in record time, GNE delivered a 200% ROI project. Exceptional execution.",
      company: "Industrial Manufacturing Group",
      author: "CFO"
    },
    {
      quote: "The integrated solar-BESS solution they designed reduced our grid dependency by 80%. Truly innovative.",
      company: "Regional Utility Provider",
      author: "Chief Technology Officer"
    }
  ];

  const teamBenefits = [
    "Competitive salary & stock options",
    "100% health insurance coverage",
    "Flexible work arrangements",
    "Annual international conferences",
    "Career development budget",
    "Wellness programs & gym",
    "Parental leave (4+ months)",
    "Learning stipend (₹100k/year)"
  ];

  const stats = [
    { number: "10+", label: "Years of Excellence", icon: TrendingUp },
    { number: "500+", label: "MWp Delivered", icon: Zap },
    { number: "15+", label: "Countries Presence", icon: Globe },
    { number: "98%", label: "Client Satisfaction", icon: Star }
  ];

  const whyUs = [
    {
      title: "Integrated Approach",
      description: "Solar + BESS + Hydrogen engineered as one coordinated system, not isolated projects."
    },
    {
      title: "Execution Excellence",
      description: "98% on-time project delivery with transparent milestones and dedicated project management."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "People First",
      description: "We believe our team is our greatest asset. Investing in growth, wellness, and happiness."
    },
    {
      icon: Briefcase,
      title: "Ownership Mindset",
      description: "Every team member owns their domain. We empower leadership at all levels."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Industry certifications, training programs, and mentorship opportunities for all."
    },
    {
      icon: Globe,
      title: "Global Diversity",
      description: "40+ nationalities working together. Diversity strengthens our innovation."
    }
  ];

  const leadership = [
    {
      name: "Lalit Kumarr",
      title: "Founder & CEO",
      bio: "20+ years in renewable energy sector. Previously led large-scale solar projects across Asia-Pacific.",
      linkedin: "https://www.linkedin.com/in/lalitkumar07/"
    },
    {
      name: "Priya Sharma",
      title: "Chief Technology Officer",
      bio: "Former head of R&D at leading solar manufacturer. 15+ years innovation expertise in BESS systems.",
      linkedin: "#"
    },
    {
      name: "Marcus Johnson",
      title: "Chief Operating Officer",
      bio: "Operations excellence champion. Managed 500+ MWp portfolio execution with 98% on-time delivery.",
      linkedin: "#"
    },
    {
      name: "Advita Singh",
      title: "VP - Business Development",
      bio: "Strategic partnerships builder. Established GNE Infra's presence across 15+ countries and regions.",
      linkedin: "#"
    }
  ];

  const timeline = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Founded by Lalit Kumarr with a vision to democratize renewable energy in Asia",
      event: "Founded GNE Infra with vision to democratize renewable energy",
      icon: "🌱"
    },
    {
      year: "2017",
      title: "First Major Success",
      description: "Completed India's first 50 MWp utility-scale solar plant in record time",
      event: "Completed first 50 MWp utility-scale solar project",
      icon: "⚡"
    },
    {
      year: "2018",
      title: "International Expansion",
      description: "Opened Singapore office and secured $50M in Series A funding",
      event: "Expanded to 200+ MWp installations across 8 countries",
      icon: "🌍"
    },
    {
      year: "2019",
      title: "BESS Innovation",
      description: "Launched integrated battery energy storage solutions with AI-powered EMS",
      event: "Launched integrated BESS solutions for grid stability",
      icon: "🔋"
    },
    {
      year: "2021",
      title: "Global Reach",
      description: "Established presence in 8 countries with 300+ MWp portfolio",
      event: "Expanded to 200+ MWp installations across 8 countries",
      icon: "🗺️"
    },
    {
      year: "2023",
      title: "The H2 Leap",
      description: "Pioneered green hydrogen integration for industrial decarbonization",
      event: "Pioneered green hydrogen integration with solar systems",
      icon: "♻️"
    },
    {
      year: "2025",
      title: "Carbon Neutral",
      description: "Achieved carbon-neutral operations and 500k+ tons CO₂ reduction impact",
      event: "Achieved carbon-neutral operations with 500k+ tons CO₂ reduction",
      icon: "🌿"
    }
  ];

  return (
    <div>
      {/* About Hero Section */}
      <Section className="py-8 sm:py-10 bg-slate-50 dark:bg-slate-950/40">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-600 sm:text-xs">
                  WELCOME TO GNE INFRA
                </span>
                <span className="h-px flex-1 bg-emerald-600 opacity-60"></span>
              </div>
              <h1 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-[42px] lg:leading-tight">
                YOUR TRUSTED ENERGY PARTNER
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-[15px] sm:leading-7">
                At GNE Infra, we are committed to providing innovative solar energy solutions and Battery Energy Solutions (BESS) that are designed to meet the growing energy demands of businesses, industries, and communities. We are dedicated to revolutionizing the energy landscape with innovative and sustainable solar solutions. As a leading EPC (Engineering, Procurement, and Construction) company, we specialize in delivering high-quality, end-to-end solar energy solutions and BESS for commercial, industrial, and utility-scale projects. We specialize in the full spectrum of solar project development, from design and engineering to procurement and constructions.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-950/5 shadow-xl shadow-slate-950/10 transition-transform duration-500 ease-out hover:scale-[1.02] lg:max-w-md lg:justify-self-end">
              <Image
                src="/solutions-bg.jpg"
                alt="Solar project overview"
                width={1400}
                height={1000}
                className="h-[220px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[260px] lg:h-[300px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="py-10 relative overflow-hidden bg-emerald-50 dark:bg-slate-950">
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="h-full min-h-[260px] p-6 bg-white/90 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-700/60 shadow-sm overflow-hidden rounded-[2rem]">
              <div className="flex h-full flex-col justify-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30">
                    <Target className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-600">Our Mission</p>
                    <div className="mt-2 h-1 w-14 rounded-full bg-emerald-500"></div>
                  </div>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-7">
                  “To develop and execute bankable clean energy projects by combining strong EPC capabilities, land procurement with grid integration approval expertise, stakeholder management, and advanced energy solutions, while building future-ready capabilities to become Solar, BESS, Green Hydrogen, Developer and actively contributing to Viksit Bharat 2047.”
                </p>
              </div>
            </Card>

            <Card className="h-full min-h-[260px] p-6 bg-white/90 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-700/60 shadow-sm overflow-hidden rounded-[2rem]">
              <div className="flex h-full flex-col justify-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
                    <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-600">Our Vision</p>
                    <div className="mt-2 h-1 w-14 rounded-full bg-blue-500"></div>
                  </div>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-7">
                  “To become a leading intelligent renewable energy ecosystem, delivering solar, storage, hybrid, and green hydrogen infrastructure through execution excellence, indigenous technology, and sustainable innovation.”
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>



      {/* Company Culture */}
      <Section className="py-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50/30 to-emerald-50/30 dark:from-blue-950/20 dark:to-emerald-950/20"></div>
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-black text-slate-950 dark:text-white mb-3">
              Our Culture
            </h2>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              We don&apos;t just build projects—we build a community where innovation thrives and people grow.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cultureValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card
                  key={idx}
                  className="p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-emerald-100 dark:from-blue-900/40 dark:to-emerald-900/40 rounded-lg w-fit mb-4">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-black text-lg text-slate-950 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="py-10 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-4xl font-black text-center text-slate-950 dark:text-white mb-3">
            Our Journey
          </h2>
          <p className="text-center text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Key milestones that shaped GNE Infra&apos;s growth
          </p>

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start group">
                {/* Timeline Marker */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900/40 dark:to-blue-900/40 flex items-center justify-center text-2xl border-4 border-white dark:border-slate-950 shadow-lg">
                    {item.icon}
                  </div>
                  {idx !== timeline.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-emerald-400 to-emerald-200 dark:from-emerald-600 dark:to-emerald-800 mt-4"></div>
                  )}
                </div>

                {/* Content */}
                <div className="pt-2 flex-grow">
                  <div className="inline-block mb-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-xs font-black text-emerald-700 dark:text-emerald-300">
                    {item.year}
                  </div>
                  <h3 className="font-black text-lg text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>








      {/* Leadership Section - Premium Showcase */}
      <Section className="py-10 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/20 dark:bg-emerald-900/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/50 dark:border-emerald-900/50 bg-emerald-50/30 dark:bg-emerald-950/30 px-4 py-2 text-sm font-bold text-emerald-700 dark:text-emerald-300 backdrop-blur-sm mb-6">
              <Users className="h-4 w-4" />
              World-Class Leadership
            </div>
            <h2 className="text-4xl font-black text-slate-950 dark:text-white mb-3">
              Meet Our Board Members
            </h2>
            <p className="text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              Experienced visionaries committed to advancing renewable energy globally. Our leadership brings 150+ years of combined expertise across solar, BESS, and energy infrastructure.
            </p>
          </div>

          {/* Leadership Grid - Premium Card Showcase */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {leadership.map((leader, idx) => (
              <div
                key={idx}
                className="group relative"
              >
                {/* Card Background with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 to-emerald-100/5 dark:from-emerald-900/20 dark:to-emerald-900/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>

                <Card className="relative p-6 h-full flex flex-col bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Decorative Top Element */}
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-emerald-200/10 dark:bg-emerald-900/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

                  {/* Leader Image Placeholder */}
                  <div className="relative h-32 mb-6 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                    <Users className="h-16 w-16 text-slate-400 dark:text-slate-500" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg text-slate-950 dark:text-white">{leader.name}</h3>
                    <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-1">{leader.title}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">{leader.bio}</p>
                  </div>

                  {/* LinkedIn Badge */}
                  <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                    <a
                      href={leader.linkedin}
                      className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 text-sm font-semibold transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      Connect
                    </a>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Leadership Quote Section */}
          <Card className="p-12 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950/40 dark:to-blue-950/40 border border-emerald-200/50 dark:border-emerald-900/50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 text-9xl font-black text-emerald-600 dark:text-emerald-400">
                &ldquo;
              </div>
            </div>
            <div className="relative z-10">
              <p className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                &ldquo;Our mission is not just to build Solar, BESS, and Hydrogen projects, but to build a sustainable future. Every megawatt we install, every ton of CO₂ we prevent, every community we empower—this is the legacy we&apos;re creating together.&rdquo;
              </p>
              <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
                — Lalit Kumarr, Founder & CEO, GNE Infra
              </p>
            </div>
          </Card>


        </div>
      </Section>

      {/* Closing CTA */}
      <Section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-50/50 to-blue-50/50 dark:from-emerald-950/30 dark:to-blue-950/30"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-black text-slate-950 dark:text-white mb-4">
            Let&apos;s Build the Energy Future Together
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            From vision to execution, GNE Infra delivers integrated renewable solutions that drive real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
              Back to Home
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/70 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 backdrop-blur-sm">
              Start a Project
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
