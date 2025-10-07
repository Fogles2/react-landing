import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Server, Globe, Zap, Shield, Clock, HeadphonesIcon, CheckCircle2, ArrowRight, Database, Cpu, HardDrive, Network, Palette, Layout, Code, Mail, Search, User, LogIn, Quote, Star, AtSign, Building2, Briefcase } from 'lucide-react'
import logo from './assets/logo.png'
import hostingServers from './assets/hosting-servers-1.jpg'
import cloudHosting from './assets/cloud-hosting.png'
import './App.css'

function App() {
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [domainSearch, setDomainSearch] = useState('')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const features = [
    {
      icon: Palette,
      title: "Professional Web Design",
      description: "Custom-designed business websites that reflect your brand identity and engage your target audience effectively.",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: Layout,
      title: "Responsive Development",
      description: "Building modern, mobile-first business websites that look and perform flawlessly on any device.",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: Mail,
      title: "Business Email Hosting",
      description: "Professional email addresses with your domain name, featuring robust security and reliable delivery.",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: Server,
      title: "Reliable Web Hosting",
      description: "Ensuring your business website is always online with 99.9% uptime and enterprise-grade infrastructure.",
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      icon: Zap,
      title: "Optimized Performance",
      description: "Delivering lightning-fast load times and smooth user experiences for your business website.",
      color: "from-yellow-500/20 to-yellow-600/20"
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "Providing expert assistance for your business website and email hosting needs, 24/7.",
      color: "from-pink-500/20 to-pink-600/20"
    }
  ]

  const domainTLDs = [
    { tld: '.com', price: '$12.99', popular: true, color: 'text-blue-400' },
    { tld: '.net', price: '$14.99', popular: false, color: 'text-green-400' },
    { tld: '.org', price: '$13.99', popular: false, color: 'text-orange-400' },
    { tld: '.biz', price: '$15.99', popular: false, color: 'text-purple-400' },
    { tld: '.io', price: '$39.99', popular: true, color: 'text-cyan-400' },
    { tld: '.co', price: '$29.99', popular: false, color: 'text-pink-400' }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      date: "15 Jan, 2025",
      rating: 5,
      text: "Turnpage Networks transformed our online presence with a stunning website and reliable hosting. Their business email solution has been flawless!",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Global Ventures Inc",
      date: "08 Jan, 2025",
      rating: 5,
      text: "Outstanding service! The team delivered a professional website that perfectly represents our brand. The hosting and email services are top-notch.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studio Pro",
      date: "22 Dec, 2024",
      rating: 5,
      text: "Best decision we made for our business! Beautiful website design, fast hosting, and professional email addresses. Highly recommended!",
      avatar: "ER"
    }
  ]

  const infrastructureFeatures = [
    {
      icon: Database,
      title: "Scalable Storage",
      stat: "99.99%",
      description: "Reliable Data Access"
    },
    {
      icon: Cpu,
      title: "High Performance",
      stat: "10Gbps",
      description: "Network Speed"
    },
    {
      icon: HardDrive,
      title: "SSD Storage",
      stat: "NVMe",
      description: "Ultra-Fast Drives"
    },
    {
      icon: Network,
      title: "Global CDN",
      stat: "50+",
      description: "Edge Locations"
    }
  ]

  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      features: [
        "Basic Business Website Design",
        "5 GB Web Hosting",
        "3 Business Email Addresses",
        "Free Domain (1 year)",
        "Free SSL Certificate",
        "Email Support"
      ]
    },
    {
      name: "Business",
      price: "$99",
      period: "/month",
      popular: true,
      features: [
        "Advanced Business Website Design",
        "50 GB Web Hosting",
        "10 Business Email Addresses",
        "Free Domain (1 year)",
        "Free SSL Certificate",
        "Priority Support",
        "SEO Optimization"
      ]
    },
    {
      name: "Enterprise",
      price: "$249",
      period: "/month",
      features: [
        "Custom Business Website Development",
        "Unlimited Web Hosting",
        "Unlimited Business Email Addresses",
        "Free Domain (1 year)",
        "Free SSL Certificate",
        "24/7 Phone Support",
        "Dedicated Resources",
        "Advanced Security"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Turnpage Networks" className="h-10 w-10" />
            <span className="text-2xl font-bold text-foreground">Turnpage Networks</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#domains" className="text-muted-foreground hover:text-primary transition-colors">Domains</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
            <a href="https://webmail.turnpage.io" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-green-400 transition-colors flex items-center gap-1">
              <Mail className="h-4 w-4" />
              Webmail
            </a>
            <a href="https://billing.turnpage.io" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary/50 hover:border-primary hover:bg-primary/10">
                <LogIn className="h-4 w-4 mr-2" />
                Client Login
              </Button>
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section with Banner */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-primary/30 rounded-full">
                <span className="text-primary font-semibold text-sm">🚀 Complete Business Solutions</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                Business Website Design
                <span className="block bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mt-2">Hosting & Email</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your business with professional website design, reliable hosting, and business email addresses. Everything you need to succeed online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="text-lg px-8 py-6 rounded-lg border-2 border-border hover:border-primary hover:text-primary transition-all">
                  View Portfolio
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">500+</div>
                  <div className="text-sm text-muted-foreground">Business Websites</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-2xl blur-3xl"></div>
              <img 
                src={hostingServers} 
                alt="Business Web Hosting Infrastructure" 
                className="relative rounded-2xl shadow-2xl border border-border/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Domain Checker Section */}
      <section id="domains" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Find Your Perfect Domain</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Search for your ideal business domain name and register it today with competitive pricing.
            </p>
          </div>

          {/* Domain Search */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter your domain name..."
                  value={domainSearch}
                  onChange={(e) => setDomainSearch(e.target.value)}
                  className="pl-12 py-6 text-lg bg-background border-border focus:border-primary"
                />
              </div>
              <Button className="px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                Search
              </Button>
            </div>
          </div>

          {/* TLD List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {domainTLDs.map((domain, index) => (
              <div
                key={index}
                className="relative bg-card border-2 border-border hover:border-primary rounded-xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer group"
              >
                {domain.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold transform rotate-12">
                    Popular
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-3xl font-bold ${domain.color} mb-2`}>{domain.tld}</div>
                    <div className="text-sm text-muted-foreground">Starts at</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">{domain.price}</div>
                    <div className="text-xs text-muted-foreground">/year</div>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  Register Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Complete Business Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From professional website design to reliable hosting and business email addresses, we provide everything your business needs online.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className={`inline-flex p-4 rounded-lg mb-4 transition-all bg-gradient-to-br ${feature.color} ${
                    hoveredFeature === index ? 'scale-110' : ''
                  }`}>
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Quote className="h-16 w-16 text-orange-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground mb-4">Clients Say About Us</h2>
            <div className="flex justify-center gap-2 mb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentTestimonial === index ? 'w-8 bg-primary' : 'w-2 bg-border'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-primary/30 rounded-2xl p-8 md:p-12 relative">
              <Quote className="absolute top-6 right-6 h-20 w-20 text-primary/20" />
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-muted-foreground mb-2">{testimonials[currentTestimonial].company}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].date}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                {testimonials[currentTestimonial].text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Enterprise Hosting Infrastructure</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powering your business website with cutting-edge technology for unparalleled speed and reliability.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src={cloudHosting} 
                alt="Cloud Infrastructure" 
                className="rounded-2xl shadow-xl border border-border/50"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {infrastructureFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 cursor-pointer"
                  >
                    <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{feature.stat}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Optimized Hosting Architecture</h3>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-primary rounded-lg p-6 text-center">
                <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-semibold text-foreground mb-1">Users</div>
                <div className="text-xs text-muted-foreground">Global Access</div>
              </div>
              
              <div className="flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500 rounded-lg p-6 text-center">
                <Shield className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <div className="font-semibold text-foreground mb-1">Security</div>
                <div className="text-xs text-muted-foreground">DDoS Protection</div>
              </div>
              
              <div className="flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500 rounded-lg p-6 text-center">
                <Server className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <div className="font-semibold text-foreground mb-1">Servers</div>
                <div className="text-xs text-muted-foreground">Load Balanced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Business Solutions Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete packages including website design, hosting, and business email addresses for your growing business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-primary shadow-xl bg-gradient-to-br from-primary/5 to-purple-500/5' 
                    : 'border-border bg-card hover:border-primary'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-purple-500 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full py-6 text-lg rounded-lg transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-primary-foreground shadow-lg'
                      : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/90 via-purple-500/80 to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get started with professional website design, reliable hosting, and business email addresses today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all">
              Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a href="https://billing.turnpage.io" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-2 border-background text-primary-foreground hover:bg-background/10 text-lg px-8 py-6 rounded-lg">
                <LogIn className="mr-2 h-5 w-5" />
                Client Login
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Turnpage Networks" className="h-8 w-8" />
                <span className="text-xl font-bold text-foreground">Turnpage Networks</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Professional business website design, hosting, and email solutions.
              </p>
              <div className="flex gap-3">
                <a href="https://billing.turnpage.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                  <User className="h-5 w-5" />
                </a>
                <a href="https://webmail.turnpage.io" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Business Web Design</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Web Hosting</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Business Email</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Domain Registration</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="https://billing.turnpage.io" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Client Login</a></li>
                <li><a href="https://webmail.turnpage.io" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Webmail Access</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Turnpage Networks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
