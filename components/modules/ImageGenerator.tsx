"use client";
import { useState, FormEvent } from "react";
import generateImage from "@/components/server/generateImage";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Image from "next/image";

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState<string | undefined>("");
  const [imageUrl, setImageUrl] = useState<string | null | undefined>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleGenerateImage = async (e: FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!prompt) {
      setError("Prompt is required");
      return;
    }

    setLoading(true);
    setError(undefined);
    setImageUrl(null);

    try {
      const blob = await generateImage(prompt);
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    } catch (error) {
      console.error("Failed to generate image:", error);
      setError("Failed to generate image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="bg-white shadow-lg rounded-lg p-5"
      onSubmit={handleGenerateImage}
    >
      <div className="flex flex-col gap-3">
        <Input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          label="Enter a prompt"
          placeholder="A prompt to generate an image"
          className="w-96 max-w-full"
          error={error}
        />
        <div className="ml-auto flex gap-4 mb-5">
          <Button className={"min-w-[133px]"} type="submit" loading={loading} variant="primary">
            Generate Image
          </Button>
          {imageUrl ? (
            <Button
              type="button"
              onClick={() => {
                setPrompt("");
                setImageUrl(null);
              }}
              variant="secondary"
            >
              Clear
            </Button>
          ) : null}
        </div>
      </div>

      <div className="w-[500px] h-[500px] max-w-full relative">
        {imageUrl && (
          <Image
            fill={true}
            className="object-cover object-center rounded-lg"
            src={imageUrl}
            alt="Generated"
          />
        )}
        {loading && (
          <div className="w-full h-full text-white bg-gray-400 animate-pulse rounded-lg flex items-center justify-center">
            {"Generating Image.."}
          </div>
        )}
      </div>
    </form>
  );
};

export default ImageGenerator;
