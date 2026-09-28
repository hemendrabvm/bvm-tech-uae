import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailPageContent from "@/components/blog/BlogDetailPageContent";
import { blogPosts, getPostBySlug } from "@/data/blogPosts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found | BVM" };
  return {
    title: `${post.title} | BVM Tech Limited UAE`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image.startsWith("http") ? [post.image] : undefined,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  return <BlogDetailPageContent post={post} />;
}
