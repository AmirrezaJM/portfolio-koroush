import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projectsData = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory, secure payments, and an intuitive admin dashboard.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
        githubUrl: "#",
        liveUrl: "#",
        color: "from-blue-500/20 to-cyan-500/20",
    },
    {
        title: "SaaS Dashboard",
        description: "Analytics dashboard for a SaaS product featuring complex data visualizations and real-time metrics tracking.",
        tags: ["React", "Node.js", "PostgreSQL", "Recharts"],
        githubUrl: "#",
        liveUrl: "#",
        color: "from-purple-500/20 to-pink-500/20",
    },
    {
        title: "AI Writing Assistant",
        description: "An AI-powered application that helps users generate, edit, and optimize content for various platforms.",
        tags: ["OpenAI API", "Next.js", "Tailwind CSS", "TRPC"],
        githubUrl: "#",
        liveUrl: "#",
        color: "from-emerald-500/20 to-teal-500/20",
    },
    {
        title: "Portfolio Template",
        description: "A customizable, performant portfolio template designed for developers to showcase their work effectively.",
        tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
        githubUrl: "#",
        liveUrl: "#",
        color: "from-orange-500/20 to-red-500/20",
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl">
                {/* Section header */}
                <div className="flex flex-col items-center mb-16 space-y-4 text-center">
                    <h2 className="text-sm font-mono tracking-widest text-primary uppercase">
                        Selected Work
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Featured Projects
                    </h3>
                    <p className="max-w-2xl text-muted-foreground md:text-lg">
                        A selection of my recent work, showcasing frontend and backend capabilities.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map((project, index) => (
                        <div 
                            key={index}
                            className="group relative rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)] overflow-hidden flex flex-col h-full"
                        >
                            {/* Project Thumbnail Placeholder (Gradient) */}
                            <div className={`h-48 w-full bg-linear-to-br ${project.color} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100 transform delay-75">
                                    <span className="px-6 py-2 rounded-full bg-background/90 text-foreground text-sm font-medium tracking-wide shadow-xl">
                                        View Details
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h4>
                                    <div className="flex items-center gap-3">
                                        <Link 
                                            href={project.githubUrl} 
                                            className="text-muted-foreground hover:text-foreground transition-colors"
                                            aria-label="GitHub Repository"
                                        >
                                            <Github className="w-5 h-5" />
                                        </Link>
                                        <Link 
                                            href={project.liveUrl} 
                                            className="text-muted-foreground hover:text-foreground transition-colors"
                                            aria-label="Live Demo"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                                
                                <p className="text-muted-foreground leading-relaxed mb-6 grow">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span 
                                            key={tagIndex}
                                            className="text-xs font-mono tracking-wider px-3 py-1 bg-primary/5 text-primary rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 flex justify-center">
                    <Link 
                        href="#"
                        className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-mono tracking-widest text-primary uppercase border border-primary/20 rounded-lg hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                    >
                        View More Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
