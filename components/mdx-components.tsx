import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

const components = {
  h1: ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
    <h1 className="text-3xl font-bold mb-6 mt-8" {...props} />
  ),
  h2: ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-2xl font-semibold mb-4 mt-6" {...props} />
  ),
  h3: ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-xl font-semibold mb-3 mt-5" {...props} />
  ),
  p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
    <p className="mb-4 leading-relaxed" {...props} />
  ),
  a: ({ href, ...props }: ComponentPropsWithoutRef<"a">) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className="text-blue-600 hover:underline" {...props} />
      );
    }
    return (
      <a
        href={href}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    );
  },
  ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc pl-6 mb-4" {...props} />
  ),
  ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-6 mb-4" {...props} />
  ),
  li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className="mb-1" {...props} />
  ),
  code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: ({ className, ...props }: ComponentPropsWithoutRef<"pre">) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4" {...props} />
  ),
  blockquote: ({ className, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="border-l-4 border-muted pl-4 italic my-4" {...props} />
  ),
  hr: ({ className, ...props }: ComponentPropsWithoutRef<"hr">) => (
    <hr className="my-8 border-border" {...props} />
  ),
  img: ({ className, ...props }: ComponentPropsWithoutRef<"img">) => (
    <img className="rounded-lg max-w-full my-6" {...props} />
  ),
};

export function MDXComponents({ components: additionalComponents }: { components?: Record<string, React.ComponentType> }) {
  return {
    ...components,
    ...additionalComponents,
  };
}
