import React, { useState, useEffect, useRef } from 'react';
import { RunwareService, GenerateImageParams, GeneratedImage } from '@/services/RunwareService';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Download, Image, X, AlertTriangle } from 'lucide-react';
import SecureStorage from '@/utils/secureStorage';

const imageCategories = [
  {
    id: 'eye-condition',
    name: 'Eye Conditions',
    prompts: [
      "Medical diagram of dry eye syndrome with detailed tear film",
      "Close-up of keratoconus showing corneal cone shape",
      "Eye with cataracts showing cloudy lens",
      "Glaucoma visualization showing optic nerve damage",
      "Macular degeneration comparison between healthy and affected retina"
    ]
  },
  {
    id: 'treatments',
    name: 'Treatments',
    prompts: [
      "LASIK surgery procedure on eye, medical illustration",
      "Cataract surgery with intraocular lens implantation",
      "Scleral lens fitting for keratoconus",
      "IPL therapy for dry eye treatment",
      "Corneal cross-linking procedure for keratoconus"
    ]
  },
  {
    id: 'backgrounds',
    name: 'Backgrounds',
    prompts: [
      "Modern optometry clinic interior with purple accents",
      "Abstract eye health background in purple gradient",
      "Medical technology background with subtle eye imagery",
      "Clean minimalist pattern for eye care website",
      "Blurred eye examination room background"
    ]
  }
];

const ImageGenerator = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [savedApiKey, setSavedApiKey] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [width, setWidth] = useState<number>(1024);
  const [height, setHeight] = useState<number>(1024);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatedImage, setGeneratedImage] = useState<GeneratedImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('eye-condition');
  const [suggestedPrompts, setSuggestedPrompts] = useState<string[]>([]);
  const [model, setModel] = useState<string>("runware:100@1");
  const [isLoadingStoredKey, setIsLoadingStoredKey] = useState<boolean>(true);
  
  const runwareServiceRef = useRef<RunwareService | null>(null);

  // Load stored API key on component mount
  useEffect(() => {
    const loadStoredApiKey = async () => {
      try {
        const storedKey = await SecureStorage.getApiKey();
        if (storedKey) {
          setSavedApiKey(storedKey);
          runwareServiceRef.current = new RunwareService(storedKey);
        }
      } catch (error) {
        console.error('Failed to load stored API key:', error);
      } finally {
        setIsLoadingStoredKey(false);
      }
    };
    
    loadStoredApiKey();
  }, []);

  // Initialize suggested prompts based on selected category
  useEffect(() => {
    const category = imageCategories.find(cat => cat.id === selectedCategory);
    if (category) {
      setSuggestedPrompts(category.prompts);
    }
  }, [selectedCategory]);

  // Clean up WebSocket connection when component unmounts
  useEffect(() => {
    return () => {
      if (runwareServiceRef.current) {
        runwareServiceRef.current.disconnect();
      }
    };
  }, []);

  const handleSaveApiKey = async () => {
    if (!apiKey.trim()) {
      toast.error("Please enter a valid API key");
      return;
    }
    
    try {
      await SecureStorage.setApiKey(apiKey);
      setSavedApiKey(apiKey);
      runwareServiceRef.current = new RunwareService(apiKey);
      setApiKey(''); // Clear the input for security
      toast.success("API key saved securely with 7-day expiration");
    } catch (error) {
      console.error('Failed to save API key:', error);
      toast.error("Failed to save API key securely");
    }
  };

  const handleClearApiKey = async () => {
    SecureStorage.clearApiKey();
    setSavedApiKey('');
    if (runwareServiceRef.current) {
      runwareServiceRef.current.disconnect();
      runwareServiceRef.current = null;
    }
    toast.success("API key cleared from secure storage");
  };

  const handleGenerateImage = async () => {
    if (!savedApiKey) {
      toast.error("Please save your API key first");
      return;
    }

    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    setIsLoading(true);
    toast.info("Generating image...");

    try {
      const params: GenerateImageParams = {
        positivePrompt: prompt,
        width,
        height,
        model
      };

      if (!runwareServiceRef.current) {
        runwareServiceRef.current = new RunwareService(savedApiKey);
      }

      const result = await runwareServiceRef.current.generateImage(params);
      setGeneratedImage(result);
      toast.success("Image generated successfully");
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("Failed to generate image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadImage = () => {
    if (!generatedImage?.imageURL) return;

    const link = document.createElement('a');
    link.href = generatedImage.imageURL;
    link.download = `eyecare-image-${generatedImage.imageUUID || Date.now()}.webp`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Image downloaded successfully");
  };

  const handleClearImage = () => {
    setGeneratedImage(null);
  };

  const handleUseSuggestedPrompt = (suggestedPrompt: string) => {
    setPrompt(suggestedPrompt);
  };

  if (isLoadingStoredKey) {
    return (
      <div className="relative rounded-xl overflow-hidden">
        <AnimatedBackground colorScheme="purple" numberOfCircles={10} />
        <div className="relative z-10 p-6 flex items-center justify-center min-h-[200px]">
          <div className="text-white">Loading secure storage...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-xl overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={10} />
      <div className="relative z-10 p-6">
        {!savedApiKey ? (
          <div className="bg-white/90 p-6 rounded-lg shadow-md mb-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-medium mb-2">Secure API Key Storage</h3>
                <div className="text-sm text-gray-600 mb-4 space-y-2">
                  <p>Your API key will be encrypted and stored locally with a 7-day expiration.</p>
                  <p className="font-medium text-amber-700">Security Notice: API keys should never be shared. Consider using a backend service for production applications.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Input
                type="password"
                placeholder="Enter your Runware API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
              <Button onClick={handleSaveApiKey}>Save API Key Securely</Button>
              <p className="text-sm text-gray-500">
                You can get your API key from <a href="https://runware.ai" target="_blank" rel="noopener noreferrer" className="text-eyecare-blue underline">Runware.ai</a>
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white/90 p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">API Key Stored Securely</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleClearApiKey}>
                Clear Key
              </Button>
            </div>

            <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="grid grid-cols-3 mb-6">
                {imageCategories.map(category => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {imageCategories.map(category => (
                <TabsContent key={category.id} value={category.id} className="space-y-4">
                  <div className="bg-white/90 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Suggested Prompts:</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.prompts.map((suggestedPrompt, index) => (
                        <Button 
                          key={index} 
                          variant="outline" 
                          size="sm"
                          className="text-xs bg-white"
                          onClick={() => handleUseSuggestedPrompt(suggestedPrompt)}
                        >
                          {suggestedPrompt}
                        </Button>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="bg-white/90 p-6 rounded-lg shadow-md">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Custom Prompt:</label>
                  <Input
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe the image you want to generate..."
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Image Width: {width}px</label>
                    <Slider
                      value={[width]}
                      min={512}
                      max={2048}
                      step={64}
                      onValueChange={(vals) => setWidth(vals[0])}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Image Height: {height}px</label>
                    <Slider
                      value={[height]}
                      min={512}
                      max={2048}
                      step={64}
                      onValueChange={(vals) => setHeight(vals[0])}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Model:</label>
                  <Select value={model} onValueChange={setModel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="runware:100@1">Runware 100 (Standard)</SelectItem>
                      <SelectItem value="runware:110@1">Runware 110 (Enhanced)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleGenerateImage} 
                  className="w-full bg-eyecare-blue hover:bg-eyecare-dark-blue"
                  disabled={isLoading}
                >
                  {isLoading ? "Generating..." : "Generate Image"} 
                </Button>
              </div>
            </div>

            {generatedImage && (
              <div className="bg-white/90 p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Generated Image</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={handleDownloadImage}>
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={handleClearImage}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg bg-gray-100 border">
                  {generatedImage.NSFWContent && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/75 text-white text-center p-4 z-10">
                      This image contains content that may not be appropriate
                    </div>
                  )}
                  <img 
                    src={generatedImage.imageURL} 
                    alt="Generated by Runware AI" 
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p><strong>Prompt:</strong> {generatedImage.positivePrompt}</p>
                  <p><strong>Seed:</strong> {generatedImage.seed}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
