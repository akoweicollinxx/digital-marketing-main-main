import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/watch.mp4",
    isVideo: true, // Add a flag to distinguish videos
    title: "3D Watch Design",
    link: "/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/tomford.mp4",
    isVideo: true, // Default to false for images
    title: "Tomford Ombre Leader",
    link: "/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/classico.webp",
    isVideo: false,
    title: "MatchDay Poster",
    link: "/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/flyer2.webp",
    isVideo: false,
    title: "Event Flyer Design",
    link: "/",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/rebar.webp",
    isVideo: false,
    title: "Rebar Lounge",
    link: "https://rebarrestaurant.vercel.app/service.html",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/pchau.webp",
    isVideo: false,
    title: "Perfect Chau",
    link: "https://perfectchau.vercel.app/",
  },
];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, isVideo, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              {isVideo ? (
                <video
                  controls
                  className="h-5/6 w-full object-cover rounded-lg"
                >
                  <source src={imageUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  height={10000}
                  width={10000}
                  className="h-5/6 w-full object-cover rounded-lg"
                  src={imageUrl}
                  alt={`Random stock image ${idx + 1}`}
                />
              )}
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
