import ImageGenerator from "@/components/modules/ImageGenerator";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <Container className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-5">Image Generator</h1>
      <ImageGenerator />
    </Container>
  );
}
