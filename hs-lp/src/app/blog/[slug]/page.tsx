import { getPostBySlug, getPostContent } from '@/app/lib/blog';
import { notFound } from 'next/navigation';
import Footer from '@/app/components/Footer';

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  try {
    const post = await getPostBySlug(params.slug);
    const content = await getPostContent(post.content || '');

    return (
      <div className="min-h-screen bg-background text-foreground pt-24">
        <article className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-white/30 font-mono">
                {post.category}
              </span>
              <time className="text-sm text-white/30">
                {post.date}
              </time>
            </div>
            <h1 className="text-2xl font-light mb-4 text-white/90">
              {post.title}
            </h1>
          </div>
          
          <div 
            className="prose prose-invert prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
        <Footer />
      </div>
    );
  } catch {
    notFound();
  }
}