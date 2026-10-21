import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { formatDate } from "@/lib/format";
import type { PostMeta } from "@/lib/posts";

type PostCardProps = {
  post: PostMeta;
  index?: number;
};

export default function PostCard({ post, index = 0 }: PostCardProps) {
  return (
    <Reveal delay={Math.min(index * 0.08, 0.32)}>
      <Link href={`/blog/${post.slug}`} className="group block h-full focus-visible:outline-none">
        <article className="card flex h-full flex-col p-6 transition-all duration-300 hover:border-white/25 hover:bg-surface-2 md:p-7">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
              {post.category}
            </span>
            <span className="text-xs text-faint">{formatDate(post.date)}</span>
          </div>

          <h2 className="mt-5 text-lg font-semibold tracking-tight text-balance md:text-xl">
            {post.title}
          </h2>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3 md:text-base">
            {post.description}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
            <span className="flex items-center gap-1.5 text-xs text-faint">
              <Clock3 size={12} aria-hidden="true" />
              {post.readingTime}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted transition-colors group-hover:text-foreground">
              Baca
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </div>

          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span key={tag} className="text-[0.7rem] text-faint">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </article>
      </Link>
    </Reveal>
  );
}
