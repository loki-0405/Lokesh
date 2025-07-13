
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Code,
  Database,
  Trophy,
  GraduationCap,
  User,
  Briefcase
} from "lucide-react";

const Index = () => {
  const skills = {
    languages: ["C++", "Java", "SQL", "Python"],
    frontend: ["React.js", "Axios"],
    backend: ["Spring Boot"],
    databases: ["MySQL", "Oracle Database"],
    tools: ["Spring Tool Suite", "IntelliJ IDEA", "VS Code", "DBeaver", "MySQL Workbench"],
    others: ["Postman", "Git", "GitHub", "Microsoft Excel", "Linux"]
  };

  const projects = [
    {
      title: "AI_Interview_Lab",
      tech: "Spring Boot, React.js, Gemini AI",
      description: "AI-powered mock interview platform with personalized preparation",
      highlights: [
        "Integrated Gemini AI for 10+ domain-specific questions per session",
        "Reduced manual input time by ~70% with secure file uploads",
        "Built responsive UI improving user interaction efficiency"
      ]
    },
    {
      title: "JWT-Auth-Portal", 
      tech: "Spring Boot, React.js",
      description: "Secure authentication portal with role-based access control",
      highlights: [
        "Implemented user registration, login with JWT tokens",
        "Secured 10+ backend APIs with JWT filters and BCrypt",
        "Achieved 100% stateless authentication, reduced overhead by 40%"
      ]
    },
    {
      title: "FileManagerAPI",
      tech: "Spring Boot, React.js", 
      description: "RESTful API system for file management operations",
      highlights: [
        "Handled 500+ test file uploads with 10+ MIME types support",
        "Support for files up to 10MB with server-side validation",
        "Reduced file processing errors by 60% with proper exception handling"
      ]
    }
  ];

  const achievements = [
    "Solved 300+ problems on LeetCode, CodeChef, and GeeksforGeeks",
    "Solved 30+ SQL problems on LeetCode and HackerRank",
    "SQL Certified - Basic SQL on HackerRank",
    "Python Certified - Cisco Python Essentials 1 and 2",
    "Cybersecurity Certified - Cisco Cybersecurity Essentials",
    "CCNA Certified Associate - Cisco CCNA Modules",
    "ServiceNow Certified System Administrator (CSA)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header/Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Pakala Venkata Sai Lokesh
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Final-year B.Tech IT student passionate about building scalable full-stack applications 
              with Spring Boot and React.js
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="w-4 h-4" />
                Visakhapatnam
              </div>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pakalalokesh81@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-colors"
              >
                <Mail className="w-4 h-4" />
                pakalalokesh81@gmail.com
              </a>
              <a href="tel:8328656521" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-colors">
                <Phone className="w-4 h-4" />
                8328656521
              </a>
              <a href="https://www.linkedin.com/in/pakala-lokesh-a01942256/" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a href="https://github.com/loki-0405" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        
        {/* Objective Section */}
        <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm animate-fade-in">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">About Me</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 leading-relaxed">
              Final-year B.Tech student in Information Technology at Vignan College with a <strong>9.04 CGPA</strong>. 
              Experienced in building full-stack applications using Spring Boot and React.js, and well-versed in 
              Data Structures and Algorithms. Seeking a software development role to apply hands-on experience 
              from academic projects and internships to real-world systems and contribute to scalable, 
              high-quality software solutions.
            </p>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm animate-fade-in">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">Education</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">B.Tech – Information Technology</h3>
                <p className="text-gray-600 mb-2">Vignan's Institute of Information Technology</p>
                <p className="text-gray-500">Visakhapatnam, Andhra Pradesh</p>
              </div>
              <div className="md:text-right mt-4 md:mt-0">
                <p className="text-lg font-bold text-blue-600">CGPA: 9.04</p>
                <p className="text-gray-500">Sept 2022 – May 2026</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Skills Section */}
        <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm animate-fade-in">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">Technical Skills</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  Databases
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {[...skills.tools, ...skills.others].map((skill) => (
                  <Badge key={skill} variant="outline" className="hover:bg-gray-50">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm animate-fade-in">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Briefcase className="w-6 h-6 text-indigo-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">Projects</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6 space-y-3">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      {project.title}
                      <ExternalLink className="w-4 h-4 text-gray-500" />
                    </h3>
                    <p className="text-blue-600 font-medium text-sm mb-2">{project.tech}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Achievements Section */}
        <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm animate-fade-in">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Trophy className="w-6 h-6 text-yellow-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">Achievements & Certifications</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200">
                  <Trophy className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{achievement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white animate-fade-in">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing Together!</h2>
            <p className="text-xl mb-8 text-blue-100">
              Ready to contribute to innovative projects and grow as a software developer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=pakalalokesh81@gmail.com" , '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-black hover:bg-white hover:text-blue-600"
                onClick={() => window.open('https://github.com/loki-0405', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
