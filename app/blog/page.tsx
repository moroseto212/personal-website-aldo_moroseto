import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PostCard from "@/components/blog/PostCard";
import CtaSection from "@/components/sections/CtaSection";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tulisan seputar performa web, desain antarmuka, animasi, dan pengembangan website — ditulis dari pengalaman proyek nyata.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <PageHero
        label="Blog"
        title="Catatan dari lapangan"
        description="Tulisan tentang performa, desain, animasi, dan teknologi web — berdasarkan pengalaman mengerjakan proyek nyata, bukan teori semata."
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          {posts.length === 0 ? (
            <p className="text-sm text-faint">Belum ada artikel. Silakan kembali lagi nanti.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <PostCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaSection
        title="Butuh artikel atau konten teknis?"
        description="Saya juga menulis dokumentasi, studi kasus, dan artikel teknis untuk brand dan tim produk."
      />
    </>
  );
}
