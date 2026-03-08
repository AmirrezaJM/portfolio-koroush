import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 py-12 md:py-20 max-w-[1440px]">
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h1>
                    <p className="text-muted-foreground text-lg">
                        Discover more about my background, experience, and the skills I bring to the table.
                    </p>
                </div>

                <div className="prose prose-neutral dark:prose-invert max-w-none pt-8">
                    <p>
                        I am a passionate software developer specializing in building modern web applications.
                        With a strong foundation in frontend technologies like React and Next.js, and backend
                        experience with Node.js and SQL/NoSQL databases, I strive to create scalable and
                        user-friendly digital experiences.
                    </p>
                    <p>
                        Over the years, I&#39;ve had the opportunity to work on various exciting projects, ranging
                        from e-commerce platforms to internal enterprise tools. My approach combines a deep
                        appreciation for clean code and a relentless drive toward solving complex problems with
                        elegant solutions.
                    </p>
                </div>

                <div className="pt-8 flex justify-center gap-4">
                    <Button asChild>
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/">Back to Home</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
