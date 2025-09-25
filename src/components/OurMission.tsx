import React, { useState, useEffect } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { Eye, Heart, Star, Award } from 'lucide-react';
import { toast } from "@/components/ui/sonner";
import { RunwareService, GenerateImageParams } from '@/services/RunwareService';

const OurMission = () => {
  const isMobile = useIsMobile();
  const [imageError, setImageError] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Updated mission image paths with the new uploaded image as primary source
  const missionImagePaths = [
    "/lovable-uploads/448f498c-3b3e-4c40-9741-2962502e1f5e.png", // New before/after eye comparison image
    "/lovable-uploads/eyecare-facility.png",
    "/images/backgrounds/caring-eyecare.png",
    "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80", // Person holding blue light bulb
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80" // Yellow lights between trees
  ];
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    const currentIndex = missionImagePaths.indexOf(target.src);
    
    if (currentIndex >= 0 && currentIndex < missionImagePaths.length - 1) {
      // Try next source
      const nextSource = missionImagePaths[currentIndex + 1];
      target.src = nextSource;
    } else if (!imageError) {
      setImageError(true);
      // Only generate a new image if we haven't already done so and no image exists
      if (!generatedImage && !isGenerating) {
        generateClinicImage();
      } else {
        toast.error("Mission image couldn't be loaded. Please upload the image to your project.");
      }
    }
  };
  
  const generateClinicImage = async () => {
    // You'll need to use your own API key here for testing
    // In production, this should come from secure storage or environment variables
    const apiKey = ""; // This should be empty by default for safety
    
    if (!apiKey) {
      return;
    }
    
    setIsGenerating(true);
    toast.info("Generating a caring vision clinic image...");
    
    try {
      const runwareService = new RunwareService(apiKey);
      
      const params: GenerateImageParams = {
        positivePrompt: "Caring modern optometry clinic interior with compassionate staff and patients, warm lighting, eye examination equipment, professional photography style, purple accents, high quality, welcoming atmosphere",
        model: "runware:100@1",
        width: 1024,
        height: 768,
        numberResults: 1
      };
      
      const result = await runwareService.generateImage(params);
      
      if (result && result.imageURL) {
        setGeneratedImage(result.imageURL);
        toast.success("Vision clinic image created successfully");
      } else {
        throw new Error("No image URL in response");
      }
    } catch (error) {
      console.error("Failed to generate image:", error);
      toast.error("Could not generate clinic image, please upload one manually");
    } finally {
      setIsGenerating(false);
    }
  };
  
  const values = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Excellence in Eye Care",
      description: "We strive to exceed expectations by providing exceptional clinical care using the latest technology and techniques."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Compassionate Service",
      description: "We treat each patient with kindness, respect, and understanding, addressing both their physical and emotional needs."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Personalized Approach",
      description: "We recognize that each patient is unique, tailoring our care to individual needs, preferences, and circumstances."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Community Commitment",
      description: "We are dedicated to improving eye health in our community through education, prevention, and accessible care."
    }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-r from-eyecare-lighter-blue/20 to-blue-50 relative overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={12} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our <span className="text-eyecare-blue">Mission</span></h2>
            <p className="text-gray-700 mb-6">
              At Eyecare Center of Orange County, our mission is to preserve, protect, and enhance the gift of sight for all our patients. We are committed to delivering exceptional eye care using the latest advancements in medical technology while maintaining a compassionate, patient-centered approach.
            </p>
            <p className="text-gray-700 mb-6">
              We believe in empowering our patients through education, helping them make informed decisions about their eye health. Our team strives to create a welcoming environment where patients of all ages feel comfortable and valued.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-eyecare-lighter-blue flex items-center justify-center mr-3 flex-shrink-0">
                    <div className="text-eyecare-blue">
                      {value.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-eyecare-lighter-blue rounded-full opacity-30 z-0 animate-pulse"></div>
              <div className="rounded-lg shadow-lg overflow-hidden relative z-10">
                <img 
                  src={missionImagePaths[0]}
                  alt="Eye health before and after treatment" 
                  className="w-full h-auto hover:scale-[1.02] transition-transform duration-500" 
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center">
                  <p className="text-white text-center text-sm md:text-base p-4">Our vision: Transforming eye health through innovative and personalized care</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-eyecare-lighter-blue rounded-full opacity-30 z-0 animate-pulse" style={{animationDelay: '1s'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
