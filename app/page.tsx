import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "Shannon",
    github: "https://github.com",
    description:
      "Production-grade multi-agent platform with deterministic replay, budget enforcement, and enterprise observability. Built with Rust, Go, and Python.",
  },
  {
    name: "Dnalyaw",
    github: "https://github.com",
    description:
      "AI quantitative trading system with nanosecond risk checks in Rust, order management in Go, and RL-driven signal generation in Python.",
  },
];

const books = [
  { year: "2026", title: "AI Quantitative Trading" },
  { year: "2025", title: "Multi-Agent Architecture Patterns" },
  { year: "2024", title: "LLM Transformer: From Zero to One" },
];

const timeline = [
  {
    period: "2026~",
    description:
      "Building open source AI Agent frameworks and an AI medium-to-high frequency quant trading platform. Exploring agentic coding workflows.",
  },
  {
    period: "2025~",
    description:
      "Recurrent token generation in Transformer architectures won't take us to AGI. Researching dynamic neural networks and reasoning.",
  },
  {
    period: "2023 - 2024",
    description:
      "Became deeply interested in large language models (LLMs) and general AI.",
  },
  {
    period: "2019 - 2022",
    description:
      "Took a well-deserved break from startups while actively investing in several challenging projects.",
  },
  {
    period: "2015 - 2018",
    description:
      "Founded a cloud-native platform designed to simplify cloud infrastructure management.",
  },
  {
    period: "2008 - 2014",
    description:
      "Founded a social advertising platform, which was later acquired by AdChina, a subsidiary of Alibaba Group.",
  },
  {
    period: "2003 - 2007",
    description:
      "Studied at University of Toronto, major in Computer Science. Attended Geoff Hinton's class.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="flex items-start gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src="/avatar.svg" alt="Carlos Chen" />
          <AvatarFallback>CC</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">Carlos Chen</h1>
        </div>
      </section>

      {/* Bio */}
      <section className="space-y-4 text-muted-foreground">
        <p>
          Serial tech founder turned AI researcher. I build production AI systems
          and write about what I learn along the way.
        </p>
        <p>
          Previously founded a social advertising platform acquired by{" "}
          <Link
            href="#"
            className="text-foreground underline underline-offset-4"
          >
            AdChina (Alibaba Group)
          </Link>
          . Studied Computer Science at the University of Toronto{" "}
          <code className="text-sm bg-muted px-1 py-0.5 rounded">(03 - 07)</code>
          , where I attended Professor{" "}
          <Link
            href="#"
            className="text-foreground underline underline-offset-4"
          >
            Geoffrey Hinton
          </Link>
          &apos;s class.
        </p>
        <p>
          I started sharing what I was learning about AI in 2024. The community
          grew to over 100,000 practitioners across Bilibili and TikTok. That
          momentum pushed me to write three books and build two open-source
          platforms.
        </p>
        <p className="text-sm">
          <a
            href="mailto:carlos@example.com"
            className="text-muted-foreground hover:text-foreground"
          >
            carlos@example.com
          </a>
        </p>
      </section>

      <Separator />

      {/* Projects */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Projects</h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <Card key={project.name} className="border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  {project.name}
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-normal"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Books */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Books</h2>
        <div className="space-y-2">
          {books.map((book) => (
            <div key={book.title} className="flex items-baseline gap-4">
              <span className="text-sm text-muted-foreground w-10">
                {book.year}
              </span>
              <span className="text-sm">{book.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Timeline</h2>
        <div className="space-y-6 relative">
          {timeline.map((item, index) => (
            <div key={item.period} className="relative pl-6">
              {index !== timeline.length - 1 && (
                <div className="absolute left-[5px] top-3 bottom-[-24px] w-px bg-border" />
              )}
              <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500" />
              <div className="space-y-1">
                <span className="text-sm font-medium text-blue-600">
                  {item.period}
                </span>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
