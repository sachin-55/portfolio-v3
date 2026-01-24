import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ChevronRight,
  ExternalLink,
  Code2,
  Database,
  Layers,
  Briefcase,
  GraduationCap,
  User,
  MessageSquare,
  X,
  Send,
  Loader2,
  Terminal,
  Cpu,
} from "lucide-react";
import { PERSONAL_INFO, EXPERIENCE, PROJECTS, SKILLS, EDUCATION } from "./data";
import { chatWithSachin } from "./services/geminiService";

const SectionTitle: React.FC<{
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
}> = ({ title, subtitle, icon }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-purple-900/30 rounded-lg text-purple-400">
        {icon}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
    </div>
    {subtitle && <p className="text-gray-400 ml-12">{subtitle}</p>}
  </div>
);

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; content: string }[]
  >([
    {
      role: "ai",
      content:
        "Hi! I'm Sachin's AI assistant. Ask me anything about his projects, experience, or skills!",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"Work" | "Personal">("Work");

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isLoading) return;

    const userMessage = chatInput;
    setChatInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    const response = await chatWithSachin(userMessage);
    setMessages((prev) => [
      ...prev,
      { role: "ai", content: response || "Something went wrong." },
    ]);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-purple-600">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-red-500 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
              S
            </div>
            <span className="font-bold text-xl tracking-tighter">
              Bhattarai
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-purple-400 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
                </a>
              ),
            )}
            <button
              onClick={() => setIsChatOpen(true)}
              className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all hover:shadow-lg hover:shadow-purple-500/30 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Ask AI
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        {/* Abstract Background elements */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-red-600/10 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-purple-400 mb-6 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for new projects
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
              BUILDING{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-red-500 to-yellow-500">
                DIGITAL
              </span>{" "}
              EXPERIENCES.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl font-light">
              Fullstack Engineer & Tech Leader specializing in high-performance
              web and mobile applications. Converting complex problems into
              elegant code.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-yellow-400 transition-all hover:-translate-y-1 flex items-center gap-2"
              >
                View Projects <ChevronRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-2">
                {[
                  {
                    icon: <Github className="w-5 h-5" />,
                    href: `https://${PERSONAL_INFO.github}`,
                  },
                  {
                    icon: <Linkedin className="w-5 h-5" />,
                    href: `https://${PERSONAL_INFO.linkedin}`,
                  },
                  {
                    icon: <Mail className="w-5 h-5" />,
                    href: `mailto:${PERSONAL_INFO.email}`,
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500 hover:bg-purple-500/10 transition-all text-white hover:text-purple-400"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle icon={<User />} title="Profile Summary" />
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {PERSONAL_INFO.summary}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-black border border-white/5">
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  4+
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-bold">
                  Years Web Dev
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-black border border-white/5">
                <div className="text-3xl font-bold text-green-400 mb-1">2+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-bold">
                  Years Mobile
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-red-600 rounded-[40px] blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative aspect-square rounded-[36px] overflow-hidden border border-white/10 bg-black flex items-center justify-center">
              <img
                src="https://picsum.photos/800/800?random=1"
                alt="Workspace"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-2 mb-2">
                  <div className="px-2 py-1 rounded bg-purple-600 text-[10px] font-bold">
                    REACT EXPERT
                  </div>
                  <div className="px-2 py-1 rounded bg-red-600 text-[10px] font-bold">
                    NODE.JS
                  </div>
                </div>
                <div className="text-xl font-bold">
                  Crafting Clean Architectures
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            icon={<Briefcase />}
            title="Experience"
            subtitle="My professional journey and growth"
          />

          <div className="space-y-4">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="group relative">
                <div
                  className={`p-8 rounded-[32px] bg-white/5 border border-white/10 transition-all hover:bg-white/[0.08] ${exp.isCurrent ? "border-purple-500/30 ring-1 ring-purple-500/20" : ""}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          {exp.company}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 rounded-md bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-widest border border-green-500/30">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-lg">{exp.role}</p>
                    </div>
                    <div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/5 text-sm font-mono text-gray-400">
                      {exp.period}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {exp.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-gray-400 leading-relaxed"
                      >
                        <ChevronRight className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-black border border-white/10 text-xs font-mono text-purple-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <SectionTitle
              icon={<Layers />}
              title="Featured Projects"
              subtitle="A showcase of digital products I've engineered"
            />

            <div className="flex bg-black p-1 rounded-2xl border border-white/5">
              {(["Work", "Personal"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeTab === tab
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.filter((p) => p.category === activeTab).map(
              (proj, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col h-full bg-black rounded-[40px] border border-white/5 overflow-hidden transition-all hover:border-purple-500/50 hover:-translate-y-2"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-white/10 to-transparent relative p-8 flex items-end">
                    <div className="absolute top-6 left-6 p-3 bg-white/5 rounded-2xl border border-white/10 text-purple-400">
                      <Terminal className="w-6 h-6" />
                    </div>
                    <div className="relative z-10">
                      <div className="text-xs font-mono text-gray-500 mb-1 uppercase tracking-widest">
                        {proj.period}
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
                        {proj.title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-purple-600/20 via-transparent to-red-600/10 pointer-events-none"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="mt-auto pt-6 border-t border-white/5">
                      <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">
                        Core Contribution
                      </h4>
                      <p className="text-sm text-gray-300 italic">
                        "{proj.responsibilities}"
                      </p>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            icon={<Code2 />}
            title="Tech Stack"
            subtitle="The weapons of my choice"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {SKILLS.map((cat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[40px] bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-8">
                  {idx === 0 ? (
                    <Cpu className="w-6 h-6 text-yellow-400" />
                  ) : idx === 1 ? (
                    <Database className="w-6 h-6 text-green-400" />
                  ) : (
                    <Layers className="w-6 h-6 text-red-400" />
                  )}
                  <h3 className="text-xl font-bold">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-2xl bg-black border border-white/5 text-sm text-gray-300 hover:border-purple-500/50 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Contact Footer */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <SectionTitle icon={<GraduationCap />} title="Education" />
              <div className="p-8 rounded-[40px] bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold mb-2 text-yellow-400">
                  {EDUCATION.degree}
                </h3>
                <p className="text-gray-300 mb-1">{EDUCATION.institution}</p>
                <p className="text-sm font-mono text-gray-500">
                  {EDUCATION.year}
                </p>
              </div>
            </div>
            <div>
              <SectionTitle icon={<Mail />} title="Get in Touch" />
              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-6 rounded-[32px] bg-white/5 border border-white/10 hover:border-purple-500 transition-all group"
                >
                  <div className="p-3 bg-purple-500/20 rounded-2xl text-purple-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">
                      Email Me
                    </div>
                    <div className="text-lg font-bold">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Sachin Bhattarai. All rights
              reserved.
            </div>
            <div className="flex items-center gap-6">
              <a
                href={`https://${PERSONAL_INFO.github}`}
                className="text-gray-500 hover:text-white transition-colors"
              >
                Github
              </a>
              <a
                href={`https://${PERSONAL_INFO.linkedin}`}
                className="text-gray-500 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-purple-600 text-white rounded-full shadow-2xl shadow-purple-600/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group"
        >
          <MessageSquare className="w-7 h-7" />
          <span className="absolute right-full mr-4 px-3 py-1 bg-black border border-white/10 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Talk to my AI
          </span>
        </button>
      )}

      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-end md:p-10 pointer-events-none">
          <div className="w-full md:w-[450px] md:max-h-[700px] h-[80vh] bg-black border border-white/10 shadow-2xl rounded-t-[32px] md:rounded-[40px] flex flex-col overflow-hidden pointer-events-auto">
            {/* Chat Header */}
            <div className="p-6 bg-gradient-to-r from-purple-900/40 to-black border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Sachin AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      Powered by Gemini
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="p-2 hover:bg-white/5 rounded-xl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-3xl ${
                      m.role === "user"
                        ? "bg-purple-600 text-white rounded-tr-none"
                        : "bg-white/5 border border-white/10 text-gray-300 rounded-tl-none"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{m.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="p-4 rounded-3xl bg-white/5 border border-white/10 rounded-tl-none">
                    <Loader2 className="w-5 h-5 animate-spin text-purple-400" />
                  </div>
                </div>
              )}
            </div>

            {/* Chat Footer */}
            <form
              onSubmit={handleSendMessage}
              className="p-6 border-t border-white/10 flex gap-3"
            >
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about skills, projects..."
                className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!chatInput.trim() || isLoading}
                className="w-12 h-12 bg-purple-600 text-white rounded-2xl flex items-center justify-center hover:bg-purple-700 transition-colors disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
