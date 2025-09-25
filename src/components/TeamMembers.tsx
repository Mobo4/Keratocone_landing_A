import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from "@/components/ui/sonner";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image?: string;
  fallbackImages?: string[];
  initials: string;
  useInitialsOnly?: boolean;
}

const TeamMembers = () => {
  const isMobile = useIsMobile();
  const [imageLoadErrors, setImageLoadErrors] = useState<Record<string, boolean>>({});
  const [notificationShown, setNotificationShown] = useState(false);

  // Update image paths with staff directory images and comprehensive fallbacks
  const team: TeamMember[] = [
    {
      name: "Dr. Alexander Bonakdar",
      title: "Optometrist, Founder & Clinical Director",
      bio: "Dr. Bonakdar has 35 years of experience specializing in dry eye disease, keratoconus, and binocular vision disorders. He completed his residency at the prestigious Bascom Palmer Eye Institute and is dedicated to providing advanced personalized care using cutting-edge technology.",
      image: "/images/staff/drbonakdar.png",
      fallbackImages: [
        "/lovable-uploads/4b09b2bf-3915-4a88-a9c4-de479b3942ce.png",
        "/lovable-uploads/dr-alexander-bonakdar.png",
        "/images/team/dr-alexander-bonakdar.png"
      ],
      initials: "AB"
    },
    {
      name: "Dr. Sarah Martinez",
      title: "Optometrist, Ocular Surface Disease Specialist",
      bio: "Dr. Martinez specializes in the diagnosis and management of complex ocular surface diseases, including dry eye syndrome and meibomian gland dysfunction. She is passionate about helping patients achieve relief from chronic eye discomfort through customized treatment plans.",
      image: "/images/staff/Assistant-1.png",
      fallbackImages: [
        "/lovable-uploads/565bf9ed-02dc-4776-bd22-fe8b9cfb18ba.png",
        "/lovable-uploads/sarah-martinez.png",
        "/images/team/sarah-martinez.png"
      ],
      initials: "SM"
    },
    {
      name: "Alejandra Hernandez",
      title: "Practice Manager",
      bio: "With over two decades of experience in healthcare administration, Alejandra ensures that our practice runs smoothly and efficiently. She is dedicated to creating an exceptional patient experience from the moment you schedule your appointment to your follow-up care.",
      image: "/images/staff/Assistant-2.png",
      fallbackImages: [
        "/lovable-uploads/81102eb7-1e90-4a74-bca7-167808954687.png",
        "/lovable-uploads/alejandra-hernandez.png",
        "/images/team/alejandra-hernandez.png"
      ],
      initials: "AH"
    },
    {
      name: "Michael Chen, COMT",
      title: "Lead Ophthalmic Technician",
      bio: "As a Certified Ophthalmic Medical Technologist, Michael performs specialized diagnostic testing and assists our doctors during procedures. His extensive knowledge and gentle approach help patients feel comfortable throughout their care journey.",
      useInitialsOnly: true, // Flag to use initials only
      initials: "MC"
    },
    {
      name: "Rebecca Wilson",
      title: "Patient Coordinator",
      bio: "Rebecca is often the friendly voice you hear when calling our office. She expertly manages scheduling, insurance verification, and helps patients understand their treatment options. Her warm personality makes every interaction a positive experience.",
      image: "/images/staff/Assistant-3.png",
      fallbackImages: [
        "/lovable-uploads/9736ecd2-8c60-4139-b0a4-c8bac0cbec74.png",
        "/lovable-uploads/rebecca-wilson.png",
        "/images/team/rebecca-wilson.png"
      ],
      initials: "RW"
    },
    {
      name: "David Torres",
      title: "Optical Manager",
      bio: "David has an excellent eye for style and helps patients select the perfect eyewear to complement their facial features and lifestyle needs. With his extensive knowledge of lens technologies, he ensures you get the best vision solution possible.",
      image: "/images/staff/Assistant-4.png",
      fallbackImages: [
        "/lovable-uploads/ac0de99a-82b3-45d0-b687-35f424d39b40.png",
        "/lovable-uploads/david-torres.png",
        "/images/staff/david-torres.png",
        "/images/team/david-torres.png"
      ],
      initials: "DT"
    }
  ];

  // Try multiple paths to find a working image
  const handleImageError = (member: TeamMember, e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    const currentSrc = target.src;
    
    // If there are fallback images available
    if (member.fallbackImages && member.fallbackImages.length > 0) {
      // Find the current fallback index or start with first fallback if main image failed
      const isMainImageFailed = currentSrc.includes(member.image || '');
      let nextFallbackIndex = 0;
      
      if (!isMainImageFailed) {
        // Find which fallback we're currently on
        const currentFallbackIndex = member.fallbackImages.findIndex(fb => 
          currentSrc.includes(fb));
          
        if (currentFallbackIndex >= 0 && currentFallbackIndex < member.fallbackImages.length - 1) {
          nextFallbackIndex = currentFallbackIndex + 1;
        } else {
          // We've exhausted all fallbacks
          setImageLoadErrors(prev => ({...prev, [member.name]: true}));
          checkErrorsAndNotify();
          return;
        }
      }
      
      // Try the next fallback
      const nextFallback = member.fallbackImages[nextFallbackIndex];
      target.src = nextFallback;
    } else {
      // Mark this member's image as failed with no more fallbacks
      setImageLoadErrors(prev => ({...prev, [member.name]: true}));
      checkErrorsAndNotify();
    }
  };
  
  // Show a toast notification if multiple images fail
  const checkErrorsAndNotify = () => {
    const errorCount = Object.values(imageLoadErrors).filter(Boolean).length;
    if (errorCount > 2 && !notificationShown) {
      toast.error("Multiple team member images couldn't be loaded. Please upload the images to your project.");
      setNotificationShown(true);
    }
  };
  
  return (
    <section className="py-16 bg-gradient-to-r from-white to-purple-50 relative overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={8} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our <span className="text-eyecare-blue">Team</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated team of eye care professionals committed to providing you with exceptional care and personalized service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="shadow-md hover:bg-eyecare-lighter-blue/30 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <Avatar className="w-24 h-24 mb-4">
                    {!member.useInitialsOnly && !imageLoadErrors[member.name] && (member.image || member.fallbackImages?.length) ? (
                      <AvatarImage 
                        src={member.image} 
                        alt={`${member.name} - ${member.title}`}
                        onError={(e) => handleImageError(member, e)}
                        className="object-cover object-center transform-none" // Removed translate-y-3 and replaced with transform-none
                      />
                    ) : null}
                    <AvatarFallback className="bg-eyecare-lighter-blue text-eyecare-blue text-xl">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                  <p className="text-eyecare-blue font-medium text-sm mb-2">{member.title}</p>
                </div>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
