
import React from 'react';
import StatCounter from '@/components/StatCounter';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { useTranslation } from 'react-i18next';

const KeratoconusStats = () => {
  const { t } = useTranslation();
  // Use longer duration for better visibility of animation
  const animationDuration = 1200; // Increased from 800ms to 1200ms
  
  // Safe translation handling for title parts
  const mainTitle = t('keratoconus.stats.title', 'Keratoconus Treatment');
  const highlightTitle = t('keratoconus.stats.highlight', 'Success');
  
  return (
    <section className="py-16 bg-gradient-to-r from-eyecare-lighter-blue to-purple-100 relative overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={15} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            {mainTitle} <span className="text-eyecare-blue">{highlightTitle}</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            {t('keratoconus.stats.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="hover:shadow-2xl hover:shadow-purple-200/60 hover:border-2 hover:border-eyecare-blue transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-eyecare-blue mb-2">
                      <StatCounter endValue={95} label="" duration={animationDuration} suffix="%" />
                    </div>
                    <div className="text-gray-700 font-medium">{t('keratoconus.stats.successRate')}</div>
                  </div>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="font-medium">95% Success Rate</div>
              <p className="text-sm text-muted-foreground mt-2">
                Our specialized keratoconus treatments have a 95% success rate in halting disease progression and improving vision quality.
              </p>
            </HoverCardContent>
          </HoverCard>
          
          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="hover:shadow-2xl hover:shadow-purple-200/60 hover:border-2 hover:border-eyecare-blue transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-eyecare-blue mb-2">
                      <StatCounter endValue={3500} label="" duration={animationDuration} />
                    </div>
                    <div className="text-gray-700 font-medium">{t('keratoconus.stats.patientsHealed')}</div>
                  </div>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="font-medium">3,500+ Patients Treated</div>
              <p className="text-sm text-muted-foreground mt-2">
                Dr. Bonakdar has successfully treated over 3,500 keratoconus patients, making him one of the most experienced specialists in Orange County.
              </p>
            </HoverCardContent>
          </HoverCard>
          
          <HoverCard>
            <HoverCardTrigger asChild>
              <Card className="hover:shadow-2xl hover:shadow-purple-200/60 hover:border-2 hover:border-eyecare-blue transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-eyecare-blue mb-2">
                      <StatCounter endValue={35} label="" duration={animationDuration} suffix="+" />
                    </div>
                    <div className="text-gray-700 font-medium">{t('keratoconus.stats.yearsExperience')}</div>
                  </div>
                </CardContent>
              </Card>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="font-medium">35 Years of Experience</div>
              <p className="text-sm text-muted-foreground mt-2">
                With 35 years dedicated to eye care, our team brings unparalleled expertise to every keratoconus case we manage.
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </section>
  );
};

export default KeratoconusStats;
