"use client";
import { Button } from '@/components/ui/button';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { 
  Database, 
  BarChart,
  Brain,
  Code,
  Table,
  FileSpreadsheet,
  TrendingUp,
  ChartBar,
  CheckCircle2,
  ArrowRight,
  Presentation,
  Target,
  Globe,
  Laptop,
  Server,
  Layout,
  Smartphone,
  Gauge,
  LineChart,
  PieChart,
  Bot,
  Network,
  Cpu,
  MessageSquare,
  Boxes,
  Cloud,
  Database as DbIcon,
  Workflow,
  Binary
} from "lucide-react";

// Add type definitions at the top
type PricingPlan = {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
};

type ServiceConfig = {
  title: string;
  subtitle: string;
  description: string;
  icon: JSX.Element;
  features: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[];
  tools: string[];
  pricing: PricingPlan[];
};

// Service configurations
const serviceConfigs: Record<string, ServiceConfig> = {
  DataAnalyst: {
    title: "Data Analysis",
    subtitle: "Transform Your Data into Actionable Insights",
    description: "Unlock the power of your data with our comprehensive data analysis services. We help businesses make informed decisions through advanced analytics and visualization.",
    icon: <Database className="w-8 h-8" />,
    features: [
      { icon: <BarChart className="w-8 h-8" />, title: "Data Visualization", description: "Create compelling visual representations of your data." },
      { icon: <FileSpreadsheet className="w-8 h-8" />, title: "Statistical Analysis", description: "Uncover patterns and trends through advanced methods." },
      { icon: <Table className="w-8 h-8" />, title: "Data Cleaning", description: "Transform raw data into reliable information." },
      { icon: <TrendingUp className="w-8 h-8" />, title: "Trend Analysis", description: "Identify and analyze market trends." },
      { icon: <ChartBar className="w-8 h-8" />, title: "Performance Metrics", description: "Track and analyze KPIs." },
      { icon: <Presentation className="w-8 h-8" />, title: "Reporting", description: "Create detailed reports and dashboards." }
    ],
    tools: [
      "Power BI",
      "Python",
      "Scikit-learn",
      "Pandas",
      "Tableau",
      "Excel",
      "SQL",
      "Seaborn"
    ],
    pricing: [
      {
        title: "Basic",
        price: "$99",
        features: [
          "Basic Data Analysis",
          "2 Custom Reports",
          "Data Cleaning",
          "Basic Visualizations",
          "Email Support",
          "4 Revision"
        ]
      },
      {
        title: "Professional",
        price: "$249",
        popular: true,
        features: [
          "Advanced Data Analysis",
          "5 Custom Reports",
          "Data Cleaning & Processing",
          "Interactive Dashboards",
          "Priority Support",
          "7 Revisions"
        ]
      },
      {
        title: "Enterprise",
        price: "Custom",
        features: [
          "Full Data Analysis Suite",
          "Unlimited Reports",
          "Advanced Analytics",
          "Real-time Dashboards",
          "24/7 Support",
          "Unlimited Revisions"
        ]
      }
    ]
  },
  AgenticAI: {
    title: "Agentic AI",
    subtitle: "Build Intelligent AI Agents & Solutions",
    description: "Create powerful AI agents and autonomous systems that transform how your business operates. We leverage cutting-edge AI technologies to build intelligent solutions that learn, adapt, and deliver results.",
    icon: <Bot className="w-8 h-8" />,
    features: [
      { 
        icon: <MessageSquare className="w-8 h-8" />, 
        title: "AI Chatbots", 
        description: "Custom chatbots with deep domain knowledge." 
      },
      { 
        icon: <Brain className="w-8 h-8" />, 
        title: "Predictive Models", 
        description: "Advanced predictive analytics solutions." 
      },
      { 
        icon: <Bot className="w-8 h-8" />, 
        title: "AI Agents", 
        description: "Autonomous agents for task automation." 
      },
      { 
        icon: <Cloud className="w-8 h-8" />, 
        title: "Model Deployment", 
        description: "Hugging Face and cloud deployment." 
      },
      { 
        icon: <Boxes className="w-8 h-8" />, 
        title: "RAG Applications", 
        description: "Retrieval-augmented generation systems." 
      },
      { 
        icon: <Workflow className="w-8 h-8" />, 
        title: "Data Pipeline", 
        description: "End-to-end data processing and modeling." 
      }
    ],
    tools: [
      "LLM Models",
      "OpenAI Agents SDK",
      "MCP Servers",
      "LangGraph",
      "LangChain",
      "Python",
      "Hugging Face",
      "Streamlit",
      "FastAPI"
    ],
    pricing: [
      {
        title: "Basic",
        price: "$149",
        features: [
          "Simple Chatbot Development",
          "Basic Data Cleaning",
          "Single ML Model",
          "Basic RAG Implementation",
          "Email Support",
          "3 Revisions"
        ]
      },
      {
        title: "Professional",
        price: "$349",
        popular: true,
        features: [
          "Advanced AI Agent",
          "Custom ML Models",
          "Advanced RAG System",
          "Database Integration",
          "Priority Support",
          "7 Revisions"
        ]
      },
      {
        title: "Enterprise",
        price: "Custom",
        features: [
          "Multiple AI Agents",
          "Complex ML Systems",
          "Full RAG Integration",
          "Custom Deployment",
          "24/7 Support",
          "Unlimited Revisions"
        ]
      }
    ]
  },
  WebDeveloper: {
    title: "Web Development",
    subtitle: "Build Your Digital Presence",
    description: "Create modern, responsive web applications with cutting-edge technologies. We deliver seamless user experiences across all devices.",
    icon: <Code className="w-8 h-8" />,
    features: [
      { icon: <Layout className="w-8 h-8" />, title: "UI/UX Design", description: "Beautiful user interfaces." },
      { icon: <Smartphone className="w-8 h-8" />, title: "Responsive Design", description: "Mobile-first approach." },
      { icon: <Server className="w-8 h-8" />, title: "Backend Development", description: "Robust server solutions." },
      { icon: <Globe className="w-8 h-8" />, title: "Web Applications", description: "Full-stack development." },
      { icon: <Laptop className="w-8 h-8" />, title: "E-commerce", description: "Online store solutions." },
      { icon: <Gauge className="w-8 h-8" />, title: "Performance", description: "Speed optimization." }
    ],
    tools: [
      "TypeScript",
      "Next.js",
      "React",
      "PostgreSQL",
      "Sanity",
      "Supabase",
      "Clerk",
      "Shadcn UI",
      "Material UI",
      "Aceternity",
      "Tailwind CSS"
    ],
    pricing: [
      {
        title: "Basic",
        price: "$249",
        features: [
          "5 Pages Website",
          "Responsive Design",
          "Basic SEO",
          "Contact Form",
          "Email Support",
          "5 Revisions"
        ]
      },
      {
        title: "Business",
        price: "$499",
        popular: true,
        features: [
          "10 Pages Website",
          "Advanced Features",
          "E-commerce Integration",
          "CMS Integration",
          "Priority Support",
          "5 Revisions"
        ]
      },
      {
        title: "Enterprise",
        price: "Custom",
        features: [
          "Custom Web App",
          "Full-stack Solution",
          "API Integration",
          "Advanced Security",
          "24/7 Support",
          "Unlimited Revisions"
        ]
      }
    ]
  }
} as const;

type ServiceType = keyof typeof serviceConfigs;

export default function ServicesPage({ params }: { params: { "services-page": ServiceType } }) {
  const router = useRouter();
  const service = serviceConfigs[params["services-page"]];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <main className="min-h-screen pt-10">
      {/* Hero Section */}
      <section className="relative py-10 overflow-hidden animate-fade-in">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-accent/5" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern dark:bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />

        <div className="container relative mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content */}
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <div className="inline-block">
                <Badge variant="secondary" className="text-lg px-6 py-2 mb-4 animate-slide-up">{service.title} Services</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-slide-up [animation-delay:200ms]">
                {service.subtitle}
        </h1>
              <p className="text-xl text-muted-foreground animate-slide-up [animation-delay:400ms]">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up [animation-delay:600ms]">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8 hover:scale-105 transition-transform duration-300">
                    Get Started
                  </Button>
                </Link>
                <Link href="#pricing">
                  <Button variant="outline" size="lg" className="rounded-full px-8 hover:scale-105 transition-transform duration-300">
                    View Pricing
          </Button>
                </Link>
              </div>
            </div>

            {/* Image/Illustration */}
            <div className="lg:w-1/2 relative animate-slide-up [animation-delay:800ms]">
              <div className="relative aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 rounded-full animate-rotate-slow" />
                <Image
                  src={`/images/BI Structure/rao-hamza-tariq.jpg`}
                  // src={`/images/${params["services-page"]}-illustration.png`}
                  alt={`${service.title} Illustration`}
                  width={500}
                  height={500}
                  className="relative rounded-3xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] animate-grid-flow" />
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-primary/10 via-transparent to-transparent animate-spin-slow" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-conic from-primary/10 via-transparent to-transparent animate-spin-slow" />

        <div className="container relative mx-auto px-4">
          {/* Header Section with floating elements */}
          <div className="relative mb-20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="relative text-center space-y-6">
              <div className="animate-bounce-slow inline-block">
                <Badge variant="secondary" className="px-6 py-2 text-lg font-medium backdrop-blur-sm">
                  Our Expertise
                </Badge>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold animate-fade-in [animation-delay:200ms]">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Comprehensive Solutions
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
                We offer a full range of {service.title.toLowerCase()} services to help you achieve your goals.
              </p>
            </div>
          </div>

          {/* Features Grid with hover effects and animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {service.features.map((feature, index) => (
              <div key={index} className="group perspective-1000">
                <div className="animate-float-up [animation-delay:var(--delay)]" style={{ '--delay': `${index * 150}ms` } as React.CSSProperties}>
                  <Card className="relative p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 backdrop-blur-sm bg-background/80 border-primary/10 overflow-hidden">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="relative space-y-6">
                      <div className="p-4 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors duration-300 shadow-lg shadow-primary/5">
                        {feature.icon}
                      </div>
                      
                      <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        {feature.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Hover reveal arrow */}
                      <div className="absolute bottom-4 right-4 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] animate-slide" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />

        <div className="container mx-auto px-4 relative">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6 animate-fade-in">
            <div className="inline-block">
              <Badge variant="secondary" className="transform hover:scale-105 transition-transform">
                Flexible Pricing
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Investment Plans
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose the perfect plan that aligns with your goals and budget. Each plan is crafted to deliver maximum value.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
            {service.pricing.map((plan, index) => (
              <div 
                key={index} 
                className="group animate-float-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className={`
                  relative p-8 h-full
                  transform transition-all duration-500
                  hover:shadow-2xl hover:shadow-primary/20 
                  hover:-translate-y-2 hover:scale-[1.02]
                  backdrop-blur-sm bg-background/90
                  ${plan.popular ? 'border-primary border-2' : 'border-primary/10'}
                `}>
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 -right-4">
                      <div className="bg-primary text-primary-foreground text-sm px-6 py-1 rounded-full shadow-lg transform rotate-12">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Plan content */}
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        {plan.title}
                      </h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground">/project</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 group/item">
                          <div className="p-1 rounded-full bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link href="/contact" className="block">
                      <Button 
                        className={`
                          w-full rounded-full group relative overflow-hidden
                          ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-primary/10 hover:bg-primary/20'}
                          transition-all duration-300
                        `}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Get Started
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </Link>
                  </div>

                  {/* Decorative corner gradients */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Tools Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-primary/[0.05] dark:from-primary/[0.03] dark:to-primary/[0.08]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern dark:bg-grid-white/[0.05] animate-fade-in" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6 animate-fade-in">
            <Badge variant="secondary" className="px-6 py-2 text-base font-medium rounded-full animate-bounce">
              Tools & Technologies
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Our Tech Stack
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Leveraging cutting-edge tools and technologies to create powerful, scalable solutions.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {service.tools.map((tool, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden backdrop-blur-sm bg-background/50 border-primary/10 hover:border-primary/30 transition-all duration-500 animate-fade-in [animation-delay:var(--delay)]"
                style={{ '--delay': `${index * 100}ms` } as React.CSSProperties}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8 flex flex-col items-center gap-4">
                  {/* Tool Icon - You may want to add icons for each tool */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-primary">
                      {tool.charAt(0)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    {tool}
                  </h3>

                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,var(--primary)_0%,transparent_60%)] opacity-20 animate-spin-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--primary)_0%,transparent_50%)] opacity-10 animate-pulse" />
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-morph" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-morph animation-delay-2000" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-12 backdrop-blur-xl bg-background/50 border border-primary/10 hover:border-primary/20 transition-all duration-700 animate-float">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                
                {/* Left Content */}
                <div className="space-y-6 text-center md:text-left">
                  <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-primary/5 backdrop-blur-xl border border-primary/10 hover:bg-primary/10 transition-all duration-500 animate-fade-in">
                    <span className="text-primary text-sm font-medium">Let&apos;s Create Together</span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl font-bold tracking-tight animate-fade-in [animation-delay:200ms]">
                    <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
                      Ready to Transform Your Vision?
                    </span>
                  </h2>

                  <p className="text-lg text-muted-foreground leading-relaxed max-w-md animate-fade-in [animation-delay:400ms]">
                    Let&apos;s collaborate to bring your ideas to life with our innovative {service.title.toLowerCase()} solutions and expertise.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6 animate-fade-in [animation-delay:600ms]">
                    <Link href="/contact" className="w-full sm:w-auto">
                      <Button size="lg" className="w-full sm:w-auto rounded-full px-8 py-6 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-primary/25">
                        Start Your Project
                      </Button>
                    </Link>
                    <Link href={`/Portfolio/${params["services-page"]}`} className="w-full sm:w-auto">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8 py-6 hover:bg-primary/10 hover:scale-105 transition-all duration-500">
                        Explore Our Work
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Right Decorative Element */}
                <div className="hidden md:block relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full animate-pulse" />
                  <div className="relative aspect-square rounded-full border border-primary/20 p-8 animate-spin-slow">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin-reverse" />
                    <div className="relative h-full w-full rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent backdrop-blur-3xl overflow-hidden">
                      <Image
                        src="/images/BI Structure/rao-hamza-tariq.jpg"
                        alt="Decorative service illustration"
                        fill
                        className="object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
