import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Briefcase, Code, Cloud, Database, GitMerge, Server, Shield, GraduationCap, User, Calendar, Languages } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

const App = () => {
  const { toast } = useToast();

  const handleNotImplemented = () => {
    toast({
      title: "Feature In Progress",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      variant: "destructive",
    });
  };

  const skills = {
    "Cloud Platforms": ["AWS", "AZURE", "GCP"],
    "Infrastructure as Code": ["Terraform", "Ansible"],
    "Containerization & Orchestration": ["Docker", "Kubernetes", "AZURE ACS", "AWS ECS"],
    "CI/CD": ["Azure Pipelines", "Jenkins", "GitHub Actions", "AWS Code Build"],
    "Version Control": ["Git", "Azure Repo", "GitHub", "AWS Code Commit"],
    "Databases": ["PostgreSQL", "MySQL", "MSSQL", "Neo4j", "Cassandra", "MongoDB", "Click House"],
    "Big Data & Analytics": ["Apache Kafka", "Apache Spark", "Apache NiFi", "Apache Superset"],
    "Scripting": ["Bash", "YAML", "Python"],
    "Web Servers": ["Nginx", "Apache"],
    "Security & Networking": ["IAM", "MFA", "WAF", "VPC", "VPN", "DNS"],
  };

  const skillLogos = {
    "AWS": <img  className="h-6 w-6 mr-2" alt="AWS logo" src="https://images.unsplash.com/photo-1662466767355-bdda21f993fc" />,
    "AZURE": <img  className="h-6 w-6 mr-2" alt="Azure logo" src="https://images.unsplash.com/photo-1622878389272-27b3f321d11c" />,
    "GCP": <img  className="h-6 w-6 mr-2" alt="GCP logo" src="https://images.unsplash.com/photo-1678483789111-3a04c4628bd6" />,
    "Terraform": <img  className="h-6 w-6 mr-2" alt="Terraform logo" src="https://images.unsplash.com/photo-1643546352161-3c34e040b495" />,
    "Ansible": <img  className="h-6 w-6 mr-2" alt="Ansible logo" src="https://images.unsplash.com/photo-1690683789978-3cf73960d650" />,
    "Docker": <img  className="h-6 w-6 mr-2" alt="Docker logo" src="https://images.unsplash.com/photo-1654277041218-84424c78f0ae" />,
    "Kubernetes": <img  className="h-6 w-6 mr-2" alt="Kubernetes logo" src="https://images.unsplash.com/photo-1678993233644-a5568ead78b4" />,
    "Azure Pipelines": <img  className="h-6 w-6 mr-2" alt="Azure Pipelines logo" src="https://images.unsplash.com/photo-1678483789105-2720201bee03" />,
    "Jenkins": <img  className="h-6 w-6 mr-2" alt="Jenkins logo" src="https://images.unsplash.com/photo-1654277041218-84424c78f0ae" />,
    "GitHub Actions": <img  className="h-6 w-6 mr-2" alt="GitHub Actions logo" src="https://images.unsplash.com/photo-1654277041218-84424c78f0ae" />,
    "AWS Code Build": <img  className="h-6 w-6 mr-2" alt="AWS CodeBuild logo" src="https://images.unsplash.com/photo-1614680376739-414d95ff43df" />,
    "Git": <img  className="h-6 w-6 mr-2" alt="Git logo" src="https://images.unsplash.com/photo-1654277041218-84424c78f0ae" />,
    "PostgreSQL": <img  className="h-6 w-6 mr-2" alt="PostgreSQL logo" src="https://images.unsplash.com/photo-1633356122545-ad3810fd4022" />,
    "MySQL": <img  className="h-6 w-6 mr-2" alt="MySQL logo" src="https://images.unsplash.com/photo-1633356122545-ad3810fd4022" />,
    "MongoDB": <img  className="h-6 w-6 mr-2" alt="MongoDB logo" src="https://images.unsplash.com/photo-1633356122545-ad3810fd4022" />,
    "Apache Kafka": <img  className="h-6 w-6 mr-2" alt="Apache Kafka logo" src="https://images.unsplash.com/photo-1654148308773-609632527794" />,
    "Apache Spark": <img  className="h-6 w-6 mr-2" alt="Apache Spark logo" src="https://images.unsplash.com/photo-1650951472998-4abf9d05f0c4" />,
    "Python": <img  className="h-6 w-6 mr-2" alt="Python logo" src="https://images.unsplash.com/photo-1617040619263-41c5a9d2d116" />,
    "Nginx": <img  className="h-6 w-6 mr-2" alt="Nginx logo" src="https://images.unsplash.com/photo-1663813116840-cef0040331fe" />,
  };


  const experience = [
    {
      role: "Lead DevOps Engineer",
      company: "YOZY Technologies LLP",
      duration: "Dec 2023 - Present",
    },
    {
      role: "Senior Software Engineer",
      company: "YOZY Technologies LLP",
      duration: "Apr 2022 - Dec 2023",
    },
    {
      role: "Software Engineer",
      company: "YOZY Technologies LLP",
      duration: "Dec 2021 - Mar 2022",
    },
    {
      role: "Systems Engineer (DevOps)",
      company: "Chellammal Metric Higher Sec School",
      duration: "Sep 2019 - Nov 2021",
    },
    {
      role: "System Engineer",
      company: "Advance Technologies Systems",
      duration: "May 2017 - Aug 2019",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const Section = ({ icon, title, children }) => (
    <motion.section variants={itemVariants} className="mb-12">
      <h2 className="text-3xl font-bold text-cyan-300 mb-6 flex items-center">
        {React.createElement(icon, { className: "mr-4 h-8 w-8" })}
        {title}
      </h2>
      {children}
    </motion.section>
  );

  const SkillCard = ({ title, skillsList }) => (
    <motion.div variants={itemVariants} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 h-full">
      <h3 className="text-xl font-semibold text-cyan-300 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skillsList.map((skill, index) => (
          <span key={index} className="bg-cyan-900/50 text-cyan-200 text-sm font-medium px-3 py-1 rounded-full flex items-center">
            {skillLogos[skill]}
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <>
      <Helmet>
        <title>Karmugilan K. | DevOps & Cloud Engineer</title>
        <meta name="description" content="Portfolio of Karmugilan K., an experienced DevOps & Cloud Engineer specializing in multi-cloud environments, CI/CD, and infrastructure automation." />
        <meta property="og:title" content="Karmugilan K. | DevOps & Cloud Engineer" />
        <meta property="og:description" content="Portfolio of Karmugilan K., an experienced DevOps & Cloud Engineer specializing in multi-cloud environments, CI/CD, and infrastructure automation." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-slate-300 font-sans leading-relaxed">
        <main className="max-w-7xl mx-auto p-4 sm:p-8 md:p-12">
          <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
              <img  class="w-32 h-32 rounded-full border-4 border-slate-900" alt="Karmugilan K. profile picture" src="https://horizons-cdn.hostinger.com/31d0f285-dfb8-4ba4-a4a8-cba77d2b8fd6/8db76cd1dc3cd760d3bff23637995bed.png" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              KARMUGILAN. K
            </h1>
            <p className="text-2xl text-cyan-300 mt-2">
              DevOps & Cloud Engineer (Multi Cloud)
            </p>
            <div className="mt-6 flex justify-center items-center flex-wrap gap-x-8 gap-y-4 text-lg">
              <a href="mailto:k.karmugilan@gmail.com" className="flex items-center hover:text-cyan-300 transition-colors">
                <Mail className="mr-2 h-5 w-5" /> k.karmugilan@gmail.com
              </a>
              <a href="tel:+918608240400" className="flex items-center hover:text-cyan-300 transition-colors">
                <Phone className="mr-2 h-5 w-5" /> +91-8608240400
              </a>
            </div>
          </motion.header>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Section icon={User} title="Objective">
              <p className="text-lg text-slate-400">
                Experienced DevOps Engineer with proven expertise in automating and streamlining infrastructure and deployment workflows. Adept at leveraging CI/CD, cloud technologies, and Infrastructure as Code (IaC) to enhance operational efficiency, system reliability, scalability, and performance.
              </p>
            </Section>

            <Section icon={Briefcase} title="Experience">
              <div className="relative border-l-2 border-slate-700 pl-8">
                {experience.map((job, index) => (
                  <motion.div key={index} variants={itemVariants} className="mb-10 relative">
                    <div className="absolute -left-[42px] top-1.5 h-4 w-4 rounded-full bg-cyan-400 border-4 border-slate-900"></div>
                    <p className="text-sm text-cyan-400 mb-1">{job.duration}</p>
                    <h3 className="text-2xl font-semibold text-white">{job.role}</h3>
                    <p className="text-lg text-slate-400">{job.company}</p>
                  </motion.div>
                ))}
              </div>
            </Section>

            <Section icon={Code} title="Technical Skills">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, skillsList]) => (
                  <SkillCard key={category} title={category} skillsList={skillsList} />
                ))}
              </div>
            </Section>

            <Section icon={GraduationCap} title="Education">
              <motion.div variants={itemVariants} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-2xl font-semibold text-white">Bachelor of Computer Applications (BCA)</h3>
                <p className="text-lg text-slate-400 mt-1">Jamal Mohamed College, Trichy - Bharathidasan University</p>
                <p className="text-md text-cyan-400 mt-2">Graduated: 2017</p>
              </motion.div>
            </Section>

            <Section icon={User} title="Personal Profile">
              <motion.div variants={itemVariants} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-lg">
                  <div className="flex items-center"><User className="mr-3 h-5 w-5 text-cyan-400" /> <strong>Name:</strong> <span className="ml-2 text-slate-400">Karmugilan K</span></div>
                  <div className="flex items-center"><Calendar className="mr-3 h-5 w-5 text-cyan-400" /> <strong>D.O.B:</strong> <span className="ml-2 text-slate-400">20/10/1996</span></div>
                  <div className="flex items-center"><User className="mr-3 h-5 w-5 text-cyan-400" /> <strong>Gender:</strong> <span className="ml-2 text-slate-400">Male</span></div>
                  <div className="flex items-center"><User className="mr-3 h-5 w-5 text-cyan-400" /> <strong>Marital Status:</strong> <span className="ml-2 text-slate-400">Married</span></div>
                  <div className="flex items-center"><MapPin className="mr-3 h-5 w-5 text-cyan-400" /> <strong>Nationality:</strong> <span className="ml-2 text-slate-400">Indian</span></div>
                  <div className="flex items-center"><Languages className="mr-3 h-5 w-5 text-cyan-400" /> <strong>Languages:</strong> <span className="ml-2 text-slate-400">Tamil, English</span></div>
                </div>
              </motion.div>
            </Section>
          </motion.div>
        </main>
        <footer className="text-center p-8 mt-12 border-t border-slate-800">
          <p className="text-slate-500">© {new Date().getFullYear()} Karmugilan K. All rights reserved.</p>
          <p className="text-slate-600 text-sm mt-2">I hereby declare the information presented in this resume accurately reflects my qualifications and experience.</p>
        </footer>
      </div>
      <Toaster />
    </>
  );
};

export default App;
