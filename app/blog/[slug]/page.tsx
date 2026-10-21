import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import MDXContent from "@/components/mdx/MDXContent";
import Reveal from "@/components/motion/Reveal";
import CtaSection from "@/components/sections/CtaSection";
import { formatDate } from "@/lib/format";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/posts";

type PostParams = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: PostParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Artikel tidak ditemukan" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

async function getPost(params: PostParams) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return post;
}

/**
 * Shell bersama untuk semua link ke /blog/[slug] — tidak membaca `params`,
 * jadi bisa di-prefetch dan dipakai ulang oleh setiap navigasi (instant navigation).
 */
export default function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  return (
    <>
      <article>
        <header className="relative overflow-hidden border-b border-line pb-14 pt-32 md:pb-16 md:pt-40">
          <div className="bg-grid absolute inset-0 opacity-60" />
          <div className="absolute -top-28 left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

          <div className="container-page relative">
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 py-2 text-sm text-muted transition-colors hover:text-foreground sm:py-0"
              >
                <ArrowLeft size={14} aria-hidden="true" />
                Semua artikel
              </Link>
            </Reveal>

            <Suspense fallback={<PostHeadingSkeleton />}>
              <PostHeading params={params} />
            </Suspense>
          </div>
        </header>

        <Suspense fallback={<PostBodySkeleton />}>
          <PostBody params={params} />
        </Suspense>
      </article>

      <CtaSection />
    </>
  );
}

async function PostHeading({ params }: { params: PostParams }) {
  const post = await getPost(params);

  return (
    <>
      <Reveal delay={0.1}>
        <div className="mt-7 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            {post.category}
          </span>
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs text-faint">
              #{tag}
            </span>
          ))}
        </div>
      </Reveal>

      <h1 className="text-display-sm mt-6 max-w-4xl text-balance">{post.title}</h1>

      <Reveal delay={0.2}>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {post.description}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-faint">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={14} className="text-accent" aria-hidden="true" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock3 size={14} className="text-accent" aria-hidden="true" />
            {post.readingTime}
          </span>
        </div>
      </Reveal>
    </>
  );
}

async function PostBody({ params }: { params: PostParams }) {
  const post = await getPost(params);

  const posts = await getAllPosts();
  const index = posts.findIndex((item) => item.slug === post.slug);
  const previous = index > 0 ? posts[index - 1] : null;
  const next = index < posts.length - 1 ? posts[index + 1] : null;

  return (
    <div className="container-page py-14 md:py-20">
      <Reveal className="mx-auto max-w-3xl">
        <MDXContent source={post.content} />
      </Reveal>

      <nav
        className="mx-auto mt-14 grid max-w-3xl gap-4 border-t border-line pt-8 sm:grid-cols-2"
        aria-label="Navigasi artikel"
      >
        {previous ? (
          <Link
            href={`/blog/${previous.slug}`}
            className="group rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-white/25"
          >
            <span className="flex items-center gap-2 text-xs text-faint">
              <ArrowLeft size={12} aria-hidden="true" />
              Artikel sebelumnya
            </span>
            <p className="mt-2 text-sm font-semibold text-balance">{previous.title}</p>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/blog/${next.slug}`}
            className="group rounded-2xl border border-line bg-surface p-5 text-right transition-colors hover:border-white/25 sm:col-start-2"
          >
            <span className="flex items-center justify-end gap-2 text-xs text-faint">
              Artikel berikutnya
              <ArrowRight size={12} aria-hidden="true" />
            </span>
            <p className="mt-2 text-sm font-semibold text-balance">{next.title}</p>
          </Link>
        )}
      </nav>
    </div>
  );
}

function PostHeadingSkeleton() {
  return (
    <div aria-hidden="true">
      <div className="mt-7 flex flex-wrap items-center gap-2">
        <span className="h-6 w-20 rounded-full bg-surface animate-pulse" />
        <span className="h-4 w-16 rounded bg-surface animate-pulse" />
        <span className="h-4 w-20 rounded bg-surface animate-pulse" />
      </div>
      <div className="mt-6 h-12 w-full max-w-3xl rounded-2xl bg-surface animate-pulse" />
      <div className="mt-3 h-12 w-2/5 max-w-xl rounded-2xl bg-surface animate-pulse" />
      <div className="mt-5 h-5 w-full max-w-2xl rounded-lg bg-surface animate-pulse" />
      <div className="mt-2.5 h-5 w-3/5 max-w-lg rounded-lg bg-surface animate-pulse" />
      <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
        <span className="h-4 w-28 rounded bg-surface animate-pulse" />
        <span className="h-4 w-20 rounded bg-surface animate-pulse" />
      </div>
    </div>
  );
}

function PostBodySkeleton() {
  return (
    <div className="container-page py-14 md:py-20" aria-hidden="true">
      <div className="mx-auto max-w-3xl space-y-4">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((line) => (
          <div
            key={line}
            className={`h-4 rounded bg-surface animate-pulse ${line === 7 ? "w-1/3" : line % 4 === 3 ? "w-4/5" : "w-full"}`}
          />
        ))}
      </div>

      <nav className="mx-auto mt-14 grid max-w-3xl gap-4 border-t border-line pt-8 sm:grid-cols-2">
        <div className="h-24 rounded-2xl border border-line bg-surface animate-pulse" />
        <div className="hidden h-24 rounded-2xl border border-line bg-surface animate-pulse sm:block sm:col-start-2" />
      </nav>
    </div>
  );
}
