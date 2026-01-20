import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, MessageCircle, Download, MapPin, Award, Code, Briefcase, BookOpen } from "lucide-react";
import { useState } from "react";

/**
 * DESIGN PHILOSOPHY: Warm Organic Modernism
 * - Warm pastel palette (cream, dusty rose, warm taupe)
 * - Organic curves and rounded corners (1.5rem)
 * - Flowing, wave-like section transitions
 * - Serif + Sans-serif typography (Cormorant Garamond + Outfit)
 * - Gentle animations and soft shadows
 * - Professional yet warm and approachable
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState<"experience" | "skills" | "education">("experience");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary font-serif">AS</div>
          <div className="flex items-center gap-4">
            <a href="#experience" className="text-sm hover:text-primary transition-colors">Experience</a>
            <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
            <a href="#education" className="text-sm hover:text-primary transition-colors">Education</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url('/images/texture-pattern.png')"}}></div>
        
        <div className="container py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-start order-2 md:order-1">
              <div className="relative w-64 h-80 md:w-72 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2rem] blur-2xl"></div>
                <img 
                  src="/images/ahmet-profile.jpg" 
                  alt="Ahmet Şengül" 
                  className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                  Ahmet Şengül
                </h1>
                <p className="text-2xl md:text-3xl text-primary font-light">
                  Geoinformation Engineer & GIS Specialist
                </p>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
                With over 20 years of experience in geoinformation engineering, I transform geographic data into strategic insights. Specialized in ESRI ArcGIS, 3D mapping, and autonomous driving technologies.
              </p>

              <div className="flex items-center gap-2 text-foreground/70">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Munich, Germany</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get in Touch
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="rounded-full border-primary text-primary hover:bg-primary/10"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="https://www.linkedin.com/in/ahmetsenguel" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:ahmetsengul@gmail.com" className="text-foreground/60 hover:text-primary transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background"></div>
      </section>

      {/* Experience, Skills, Education Tabs */}
      <section id="experience" className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Professional Journey</h2>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {[
              { id: "experience", label: "Experience", icon: Briefcase },
              { id: "skills", label: "Skills", icon: Code },
              { id: "education", label: "Education", icon: BookOpen }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Experience Tab */}
          {activeTab === "experience" && (
            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Surveying Engineer",
                  company: "Joule Energy, Stuttgart",
                  period: "10.2025 - 12.2025",
                  description: "Performing position and elevation staking on construction sites for critical structures including turbine foundations and control buildings.",
                  highlights: ["Precise leveling (mm tolerance)", "Turbine installation control", "Machine foundation elevation"]
                },
                {
                  title: "Geoinformation Engineer",
                  company: "BBA, Kassel",
                  period: "01.2025 - 04.2025",
                  description: "Managed QGIS transition and maintained geospatial tools for project operations.",
                  highlights: ["QGIS 3.34 testing & deployment", "PostgreSQL maintenance", "AutoCAD Map 3D documentation"]
                },
                {
                  title: "Project Engineer",
                  company: "3D Mapping Solutions, Munich",
                  period: "03.2023 - 05.2024",
                  description: "Developed HD maps and surface models for autonomous driving projects with major automotive clients.",
                  highlights: ["ADAS testing with BMW, Volvo, Audi", "LIDAR point cloud processing", "High-fidelity map creation"]
                },
                {
                  title: "GIS/Software Support Specialist",
                  company: "Istanbul Metropolitan Municipality",
                  period: "04.2020 - 03.2023",
                  description: "Led geographic analysis and data visualization initiatives using ESRI platforms.",
                  highlights: ["ArcGIS Pro & Enterprise management", "Machine learning projects (SAS, Azure ML)", "Agile methodology implementation"]
                }
              ].map((job, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-border/50 rounded-2xl">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <span className="text-sm text-foreground/60 whitespace-nowrap ml-4">{job.period}</span>
                  </div>
                  <p className="text-foreground/80 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.highlights.map((h, i) => (
                      <span key={i} className="text-xs bg-secondary text-foreground px-3 py-1 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  category: "GIS & Mapping",
                  skills: ["ESRI ArcGIS (Certified)", "ArcGIS Pro", "QGIS", "LIDAR Processing", "HD Maps", "Kepler GL"]
                },
                {
                  category: "CAD & 3D",
                  skills: ["AutoCAD", "MicroStation", "Rhino 3D", "AutoCAD Map 3D"]
                },
                {
                  category: "Programming",
                  skills: ["Python", "Java (Certified)", "SQL", "PostgreSQL", "FME"]
                },
                {
                  category: "Data & Visualization",
                  skills: ["Tableau", "Power BI", "SAS", "Microsoft Azure ML", "Data Analysis"]
                },
                {
                  category: "Project Management",
                  skills: ["PMI Certified", "Agile (Scrum/Kanban)", "Team Leadership", "Vendor Management"]
                },
                {
                  category: "Languages",
                  skills: ["Turkish (Native)", "English (Upper Intermediate)", "German (B2 - TELC Certified)"]
                }
              ].map((skillGroup, idx) => (
                <Card key={idx} className="p-6 border-border/50 rounded-2xl hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, i) => (
                      <span key={i} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                {
                  degree: "Master of Science",
                  field: "Geomatics / Geodesy and Geoinformation",
                  institution: "Istanbul Technical University & Technical University of Berlin",
                  year: "2007 - 2010",
                  icon: "🎓"
                },
                {
                  degree: "Bachelor of Engineering",
                  field: "Geodesy and Photogrammetry Technology",
                  institution: "Yıldız Technical University",
                  year: "2000 - 2005",
                  icon: "📚"
                }
              ].map((edu, idx) => (
                <Card key={idx} className="p-6 border-border/50 rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{edu.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.field}</p>
                      <p className="text-foreground/70 mt-2">{edu.institution}</p>
                      <p className="text-sm text-foreground/60 mt-2">{edu.year}</p>
                    </div>
                  </div>
                </Card>
              ))}

              <div className="mt-8 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Certifications & Courses</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "GIS Specialist", issuer: "Anadolu University", year: "2015" },
                    { title: "Project Management (PMI)", issuer: "Turkcell Academy", year: "2015" },
                    { title: "Data Foundations", issuer: "Udacity", year: "2018" },
                    { title: "Finance Master's Program", issuer: "Coursera & Rice University", year: "2019" },
                    { title: "German Language (TELC B2)", issuer: "TELC", year: "2025" }
                  ].map((cert, i) => (
                    <Card key={i} className="p-4 border-border/50 rounded-xl">
                      <p className="font-semibold text-foreground">{cert.title}</p>
                      <p className="text-sm text-foreground/70">{cert.issuer}</p>
                      <p className="text-xs text-primary mt-2">{cert.year}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Notable Projects</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Autonomous Driving Maps (ADAS)",
                description: "Developed high-fidelity 3D maps and surface models for Advanced Driver Assistance Systems testing with BMW, Volvo, and Audi.",
                tags: ["3D Mapping", "LIDAR", "ADAS", "Automotive"]
              },
              {
                title: "Fiber Optic Network Planning",
                description: "Led planning and optimization of fiber optic network infrastructure across 9 cities in Southern Turkey with $350K+ annual budget.",
                tags: ["Network Planning", "GIS Analysis", "Infrastructure", "Project Management"]
              },
              {
                title: "Urban GIS Infrastructure",
                description: "Managed comprehensive geographic analysis and digital mapping for Istanbul Metropolitan Municipality's urban planning initiatives.",
                tags: ["Urban Planning", "ArcGIS", "Data Analysis", "Visualization"]
              },
              {
                title: "Machine Learning Data Analysis",
                description: "Conducted machine learning experiments for traffic density prediction (SAS) and air quality forecasting (Microsoft Azure ML).",
                tags: ["Machine Learning", "Data Science", "SAS", "Azure ML"]
              }
            ].map((project, idx) => (
              <Card key={idx} className="p-6 border-border/50 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Beyond Work</h2>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Photography", description: "Professional profile photography project for Turkcell" },
              { title: "Travel", description: "Explored 25+ countries, lived in 3 continents" },
              { title: "Theater", description: "Active member of Turkcell Improvisational Theater Club" },
              { title: "Sports", description: "Scuba diving, snowboarding, tennis enthusiast" }
            ].map((interest, idx) => (
              <Card key={idx} className="p-6 text-center border-border/50 rounded-2xl hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-primary mb-2">{interest.title}</h3>
                <p className="text-sm text-foreground/70">{interest.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Let's Connect</h2>
          <p className="text-center text-foreground/80 mb-12 text-lg">
            I'm always interested in hearing about new opportunities and projects. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 border-border/50 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:ahmetsengul@gmail.com" className="text-primary hover:underline">
                ahmetsengul@gmail.com
              </a>
            </Card>

            <Card className="p-6 border-border/50 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">Phone</h3>
              <a href="tel:+491762176265" className="text-primary hover:underline">
                +49 176 21762650
              </a>
            </Card>

            <Card className="p-6 border-border/50 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <Linkedin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/ahmetsenguel" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                View Profile
              </a>
            </Card>

            <Card className="p-6 border-border/50 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-2">WhatsApp</h3>
              <a href="https://wa.me/491762176265" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Quick Message
              </a>
            </Card>
          </div>

          <div className="bg-secondary rounded-2xl p-8 text-center">
            <p className="text-foreground/80 mb-6">
              Whether you're looking for a GIS specialist, need geoinformation expertise, or want to discuss a project, I'd love to hear from you.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Me an Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/60 text-sm">
              © 2026 Ahmet Şengül. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/ahmetsenguel" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:ahmetsengul@gmail.com" className="text-foreground/60 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
