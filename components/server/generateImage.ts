"use server";
import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.HUGGING_FACE_API_TOKEN);

const generateImage = async (prompt: string): Promise<Blob> => {
    const response = await hf.textToImage({
        model: 'CompVis/stable-diffusion-v1-4',
        inputs: prompt,
    });

    return response;
};

export default generateImage;