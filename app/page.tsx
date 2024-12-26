import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Home() {
  const AI_APPS = [
    {
      name: "Image Generator",
      description: "Generate images using AI",
      url: "/ai-image-generator",
    },
  ];
  return (
    <Container className="py-10 md:py-16 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-5">Try an AI App</h1>
      <div className="flex flex-col gap-5">
        {AI_APPS.map((app) => (
          <Link
            key={app.url}
            href={app.url}
            className="bg-white shadow-lg rounded-lg p-5 w-96 max-w-full mb-5"
          >
            <h2 className="text-xl font-bold">{app.name}</h2>
            <p className="text-gray-500">{app.description}</p>
          </Link>
        ))}
      </div>
    </Container>
  );
}
