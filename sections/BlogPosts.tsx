import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Post {
  title: string;
  author: string;
  excerpt: string;
  image: ImageWidget;
  date: string;
  readingTime?: string;
  tags: string[];
}

export interface Props {
  title?: string;
  description?: string;
  cta?: CTA;
  posts?: Post[];
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2753/b2278d2d-2270-482b-98d4-f09d5f05ba97";

export default function BlogPosts({
  title = "Here's a component for you to showcase your blogposts",
  description = "This subheading is fully editable, remember?",
  cta = { id: "view-all", href: "/", text: "View all", outline: true },
  posts = [
    {
      title: "Title of blogpost #1",
      author: "Name of the author",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3",],
    },
    {
      title: "Title of blogpost #2",
      author: "Name of the author",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3",],
    },
    {
      title: "Title of blogpost #3",
      author: "Name of the author",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      readingTime: "10 min",
      tags: ["Tag #1", "Tag #2", "Tag #3",],
    },
  ],
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl md:mx-auto mx-5 text-sm py-12 lg:py-28">
      <div class="space-y-16">
        <div class="flex flex-col lg:flex-row gap-4 justify-between">
          <div class="space-y-6 lg:w-3/5">
            <p class="text-4xl leading-snug">
              {title}
            </p>
            <p class="text-lg">
              {description}
            </p>
          </div>
          <a
            key={cta?.id}
            id={cta?.id}
            href={cta?.href}
            target={cta?.href.includes("http") ? "_blank" : "_self"}
            class={`font-normal btn btn-primary ${
              cta.outline && "btn-outline"
            }`}
          >
            {cta?.text}
          </a>
        </div>
        <div class="md:grid md:grid-cols-3 gap-8">
          {posts?.map((post) => (
            <div class="border border-secondary rounded-lg overflow-hidden">
              <Image
                width={640}
                class="w-full object-fit z-10"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={post.image}
                alt={post.image}
                decoding="async"
                loading="lazy"
              />
              <div class="p-6 space-y-4">
                <div class="font-semibold">{post.readingTime}</div>
                <div class="space-y-2">
                  <h3 class="text-2xl">{post.title}</h3>
                  <p class="text-base">{post.excerpt}</p>
                </div>
                <div class="flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <div class="badge badge-lg badge-primary text-xs">{tag}</div>
                  ))}
                </div>
                <div class="flex flex-wrap gap-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
