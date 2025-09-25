import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from './contexts/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import SkipToMain from './components/SkipToMain';
import GeoGuard from './components/GeoGuard';
import ServiceLocationRouter from './components/ServiceLocationRouter';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import { useAnalytics } from './hooks/useAnalytics';

// Lazy load all pages for better performance
const Index = React.lazy(() => import('./pages/Index'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const EyewearPage = React.lazy(() => import('./pages/EyewearPage'));
const FashionPage = React.lazy(() => import('./pages/FashionPage'));
const EyeConditionsPage = React.lazy(() => import('./pages/EyeConditionsPage'));
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = React.lazy(() => import('./pages/TermsOfServicePage'));
const KeratoconusPage = React.lazy(() => import('./pages/KeratoconusPage'));
const KeratoconusLandingPage = React.lazy(() => import('./pages/KeratoconusLandingPage'));
const KeratoconusQRCodePage = React.lazy(() => import('./pages/KeratoconusQRCodePage'));
const DryEyePage = React.lazy(() => import('./pages/DryEyePage'));
const HeadacheEyeFatiguePage = React.lazy(() => import('./pages/HeadacheEyeFatiguePage'));
const OrthoKPage = React.lazy(() => import('./pages/OrthoKPage'));
const LasikPage = React.lazy(() => import('./pages/LasikPage'));
const CataractPage = React.lazy(() => import('./pages/CataractPage'));

// Additional Condition Pages
const SubconjunctivalHemorrhagePage = React.lazy(() => import('./pages/conditions/SubconjunctivalHemorrhagePage'));
const PosteriorVitreousDetachmentPage = React.lazy(() => import('./pages/conditions/PosteriorVitreousDetachmentPage'));
const OcularSurfaceDiseasePage = React.lazy(() => import('./pages/conditions/OcularSurfaceDiseasePage'));
const ComputerVisionSyndromePage = React.lazy(() => import('./pages/conditions/ComputerVisionSyndromePage'));
const UveitisIritisPage = React.lazy(() => import('./pages/conditions/UveitisIritisPage'));
const HerpesSimplexKeratitisPage = React.lazy(() => import('./pages/conditions/HerpesSimplexKeratitisPage'));
const NarrowAnglesPage = React.lazy(() => import('./pages/conditions/NarrowAnglesPage'));
const BlepharitisPage = React.lazy(() => import('./pages/conditions/BlepharitisPage'));
const FuchsCornealDystrophyPage = React.lazy(() => import('./pages/conditions/FuchsCornealDystrophyPage'));
const AllergicConjunctivitisPage = React.lazy(() => import('./pages/conditions/AllergicConjunctivitisPage'));
const FloatersFlashesPage = React.lazy(() => import('./pages/conditions/FloatersFlashesPage'));
const MyopiaPage = React.lazy(() => import('./pages/conditions/MyopiaPage'));
const PingueculaPterygiumPage = React.lazy(() => import('./pages/conditions/PingueculaPterygiumPage'));

const AdminToolsPage = React.lazy(() => import('./pages/AdminToolsPage'));
const IrvineEyeDoctorPage = React.lazy(() => import('./pages/IrvineEyeDoctorPage'));
const NewportBeachEyeDoctorPage = React.lazy(() => import('./pages/NewportBeachEyeDoctorPage'));
const CostaMesaEyeDoctorPage = React.lazy(() => import('./pages/CostaMesaEyeDoctorPage'));
const SantaAnaEyeDoctorPage = React.lazy(() => import('./pages/SantaAnaEyeDoctorPage'));
const TustinEyeDoctorPage = React.lazy(() => import('./pages/TustinEyeDoctorPage'));
const AnaheimEyeDoctorPage = React.lazy(() => import('./pages/AnaheimEyeDoctorPage'));
const AnaheimHillsEyeDoctorPage = React.lazy(() => import('./pages/AnaheimHillsEyeDoctorPage'));
const OrangeEyeDoctorPage = React.lazy(() => import('./pages/OrangeEyeDoctorPage'));
const VillaParkEyeDoctorPage = React.lazy(() => import('./pages/VillaParkEyeDoctorPage'));
const RiversideEyeDoctorPage = React.lazy(() => import('./pages/RiversideEyeDoctorPage'));

// Neighborhood Pages - Irvine
const WoodbridgeEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/WoodbridgeEyeDoctorPage'));
const TurtleRockEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/TurtleRockEyeDoctorPage'));
const UniversityParkEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/UniversityParkEyeDoctorPage'));
const QuailHillEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/QuailHillEyeDoctorPage'));
const NorthwoodEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/NorthwoodEyeDoctorPage'));
const OakCreekEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/OakCreekEyeDoctorPage'));
const OrchardHillsEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/OrchardHillsEyeDoctorPage'));
const PortolaSpringsEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/PortolaSpringsEyeDoctorPage'));
const GreatParkEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/GreatParkEyeDoctorPage'));
const CypressVillageEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/CypressVillageEyeDoctorPage'));

// Neighborhood Pages - Newport Beach
const NewportCoastEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/NewportCoastEyeDoctorPage'));
const BalboaIslandEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/BalboaIslandEyeDoctorPage'));
const CoronaDelMarEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/CoronaDelMarEyeDoctorPage'));

// Neighborhood Pages - Costa Mesa
const SouthCoastMetroEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/SouthCoastMetroEyeDoctorPage'));
const MesaVerdeEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/MesaVerdeEyeDoctorPage'));

// Neighborhood Pages - Anaheim
const AnaheimHillsNeighborhoodEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/AnaheimHillsEyeDoctorPage'));
const PlatinumTriangleEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/PlatinumTriangleEyeDoctorPage'));

// Neighborhood Pages - Tustin
const TustinRanchEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/TustinRanchEyeDoctorPage'));
const OldTownTustinEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/OldTownTustinEyeDoctorPage'));

// Neighborhood Pages - Huntington Beach
const HuntingtonHarborEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/HuntingtonHarborEyeDoctorPage'));
const DowntownHBEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/DowntownHBEyeDoctorPage'));

// Neighborhood Pages - Santa Ana
const EastSantaAnaEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/EastSantaAnaEyeDoctorPage'));

// Neighborhood Pages - Orange
const OldTowneOrangeEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/OldTowneOrangeEyeDoctorPage'));
const OrangeParkAcresEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/OrangeParkAcresEyeDoctorPage'));

// Neighborhood Pages - Fountain Valley
const FountainValleyEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/FountainValleyEyeDoctorPage'));
const FountainValleyWestEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/FountainValleyWestEyeDoctorPage'));
const TalbertFountainValleyEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/TalbertFountainValleyEyeDoctorPage'));

// Neighborhood Pages - Garden Grove
const GardenGroveEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/GardenGroveEyeDoctorPage'));
const WestGardenGroveEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/WestGardenGroveEyeDoctorPage'));
const EastGardenGroveEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/EastGardenGroveEyeDoctorPage'));

// Neighborhood Pages - Fullerton
const FullertonEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/FullertonEyeDoctorPage'));
const WestFullertonEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/WestFullertonEyeDoctorPage'));
const NorthFullertonEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/NorthFullertonEyeDoctorPage'));

// Neighborhood Pages - Yorba Linda
const YorbaLindaEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/YorbaLindaEyeDoctorPage'));
const EastYorbaLindaEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/EastYorbaLindaEyeDoctorPage'));
const BryantRanchYorbaLindaEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/BryantRanchYorbaLindaEyeDoctorPage'));

// Neighborhood Pages - Placentia
const PlacentiaEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/PlacentiaEyeDoctorPage'));
const WestPlacentiaEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/WestPlacentiaEyeDoctorPage'));

// Neighborhood Pages - Brea
const BreaEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/BreaEyeDoctorPage'));
const NorthBreaEyeDoctorPage = React.lazy(() => import('./pages/neighborhoods/NorthBreaEyeDoctorPage'));

const NotFound = React.lazy(() => import('./pages/NotFound'));
const OutOfServiceArea = React.lazy(() => import('./pages/OutOfServiceArea'));

// Educational Content Pages
const WhatIsKeratoconusPage = React.lazy(() => import('./pages/education/faq/conditions/WhatIsKeratoconusPage'));
const WhyEyesAlwaysDryPage = React.lazy(() => import('./pages/education/faq/conditions/WhyEyesAlwaysDryPage'));
const ChildNearsightedSignsPage = React.lazy(() => import('./pages/education/guides/conditions/ChildNearsightedSignsPage'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

function App() {
  useKeyboardNavigation();
  useAnalytics();
  
  return (
    <LanguageProvider>
      <SkipToMain />
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <GeoGuard>
          <Routes>
            {/* Out of service area route (not geo-guarded) */}
            <Route path="/out-of-service-area" element={<OutOfServiceArea />} />
            
            {/* All other routes are geo-guarded */}
            <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/eyewear" element={<EyewearPage />} />
          <Route path="/fashion" element={<FashionPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          
          {/* Standard English Routes */}
          <Route path="/conditions" element={<EyeConditionsPage />} />
          <Route path="/conditions/keratoconus" element={<KeratoconusPage />} />
          <Route path="/keratoconus-referral" element={<KeratoconusLandingPage />} />
          <Route path="/conditions/dry-eye" element={<DryEyePage />} />
          <Route path="/conditions/headache-eye-fatigue" element={<HeadacheEyeFatiguePage />} />
          <Route path="/conditions/ortho-k" element={<OrthoKPage />} />
          <Route path="/conditions/lasik" element={<LasikPage />} />
          <Route path="/conditions/cataract" element={<CataractPage />} />
          <Route path="/conditions/subconjunctival-hemorrhage" element={<SubconjunctivalHemorrhagePage />} />
          <Route path="/conditions/posterior-vitreous-detachment" element={<PosteriorVitreousDetachmentPage />} />
          <Route path="/conditions/ocular-surface-disease" element={<OcularSurfaceDiseasePage />} />
          <Route path="/conditions/computer-vision-syndrome" element={<ComputerVisionSyndromePage />} />
          <Route path="/conditions/uveitis-iritis" element={<UveitisIritisPage />} />
          <Route path="/conditions/herpes-simplex-keratitis" element={<HerpesSimplexKeratitisPage />} />
          <Route path="/conditions/narrow-angles" element={<NarrowAnglesPage />} />
          <Route path="/conditions/blepharitis" element={<BlepharitisPage />} />
          <Route path="/conditions/fuchs-corneal-dystrophy" element={<FuchsCornealDystrophyPage />} />
          <Route path="/conditions/allergic-conjunctivitis" element={<AllergicConjunctivitisPage />} />
          <Route path="/conditions/floaters-flashes" element={<FloatersFlashesPage />} />
          <Route path="/conditions/myopia" element={<MyopiaPage />} />
          <Route path="/conditions/pinguecula-pterygium" element={<PingueculaPterygiumPage />} />
          
          {/* Service Location Routes */}
          <Route path="/services/*" element={<ServiceLocationRouter />} />
          
          {/* City Location Routes */}
          <Route path="/locations/irvine-eye-doctor" element={<IrvineEyeDoctorPage />} />
          <Route path="/locations/newport-beach-eye-doctor" element={<NewportBeachEyeDoctorPage />} />
          <Route path="/locations/costa-mesa-eye-doctor" element={<CostaMesaEyeDoctorPage />} />
          <Route path="/locations/santa-ana-eye-doctor" element={<SantaAnaEyeDoctorPage />} />
          <Route path="/locations/tustin-eye-doctor" element={<TustinEyeDoctorPage />} />
          <Route path="/locations/anaheim-eye-doctor" element={<AnaheimEyeDoctorPage />} />
          <Route path="/locations/anaheim-hills-eye-doctor" element={<AnaheimHillsEyeDoctorPage />} />
          <Route path="/locations/orange-eye-doctor" element={<OrangeEyeDoctorPage />} />
          <Route path="/locations/villa-park-eye-doctor" element={<VillaParkEyeDoctorPage />} />
          <Route path="/locations/riverside-eye-doctor" element={<RiversideEyeDoctorPage />} />
          
          {/* Neighborhood Routes - Irvine */}
          <Route path="/neighborhoods/woodbridge-eye-doctor" element={<WoodbridgeEyeDoctorPage />} />
          <Route path="/neighborhoods/turtle-rock-eye-doctor" element={<TurtleRockEyeDoctorPage />} />
          <Route path="/neighborhoods/university-park-eye-doctor" element={<UniversityParkEyeDoctorPage />} />
          <Route path="/neighborhoods/quail-hill-eye-doctor" element={<QuailHillEyeDoctorPage />} />
          <Route path="/neighborhoods/northwood-eye-doctor" element={<NorthwoodEyeDoctorPage />} />
          <Route path="/neighborhoods/oak-creek-eye-doctor" element={<OakCreekEyeDoctorPage />} />
          <Route path="/neighborhoods/orchard-hills-eye-doctor" element={<OrchardHillsEyeDoctorPage />} />
          <Route path="/neighborhoods/portola-springs-eye-doctor" element={<PortolaSpringsEyeDoctorPage />} />
          <Route path="/neighborhoods/great-park-eye-doctor" element={<GreatParkEyeDoctorPage />} />
          <Route path="/neighborhoods/cypress-village-eye-doctor" element={<CypressVillageEyeDoctorPage />} />
          
          {/* Neighborhood Routes - Newport Beach */}
          <Route path="/neighborhoods/newport-coast-eye-doctor" element={<NewportCoastEyeDoctorPage />} />
          <Route path="/neighborhoods/balboa-island-eye-doctor" element={<BalboaIslandEyeDoctorPage />} />
          <Route path="/neighborhoods/corona-del-mar-eye-doctor" element={<CoronaDelMarEyeDoctorPage />} />
          
          {/* Neighborhood Routes - Costa Mesa */}
          <Route path="/neighborhoods/south-coast-metro-eye-doctor" element={<SouthCoastMetroEyeDoctorPage />} />
          <Route path="/neighborhoods/mesa-verde-eye-doctor" element={<MesaVerdeEyeDoctorPage />} />
          
          {/* Neighborhood Routes - Anaheim */}
          <Route path="/neighborhoods/anaheim-hills-neighborhood-eye-doctor" element={<AnaheimHillsNeighborhoodEyeDoctorPage />} />
          <Route path="/neighborhoods/platinum-triangle-eye-doctor" element={<PlatinumTriangleEyeDoctorPage />} />
          
          {/* Neighborhood Routes - Tustin */}
          <Route path="/neighborhoods/tustin-ranch-eye-doctor" element={<TustinRanchEyeDoctorPage />} />
          <Route path="/neighborhoods/old-town-tustin-eye-doctor" element={<OldTownTustinEyeDoctorPage />} />
          
          {/* Neighborhood Routes - Huntington Beach */}
          <Route path="/neighborhoods/huntington-harbor-eye-doctor" element={<HuntingtonHarborEyeDoctorPage />} />
          <Route path="/neighborhoods/downtown-hb-eye-doctor" element={<DowntownHBEyeDoctorPage />} />
          
          {/* Neighborhood Routes - Santa Ana */}
          <Route path="/neighborhoods/east-santa-ana-eye-doctor" element={<EastSantaAnaEyeDoctorPage />} />
          
          {/* Neighborhood Routes - Orange */}
          <Route path="/neighborhoods/old-towne-orange-eye-doctor" element={<OldTowneOrangeEyeDoctorPage />} />
          <Route path="/neighborhoods/orange-park-acres-eye-doctor" element={<OrangeParkAcresEyeDoctorPage />} />
          
          {/* Neighborhood Routes - Fountain Valley */}
          <Route path="/neighborhoods/fountain-valley-eye-doctor" element={<FountainValleyEyeDoctorPage />} />
          <Route path="/neighborhoods/fountain-valley-west-eye-doctor" element={<FountainValleyWestEyeDoctorPage />} />
          <Route path="/neighborhoods/talbert-fountain-valley-eye-doctor" element={<TalbertFountainValleyEyeDoctorPage />} />
          
          {/* Neighborhood Routes - Garden Grove */}
          <Route path="/neighborhoods/garden-grove-eye-doctor" element={<GardenGroveEyeDoctorPage />} />
          <Route path="/neighborhoods/west-garden-grove-eye-doctor" element={<WestGardenGroveEyeDoctorPage />} />
          <Route path="/neighborhoods/east-garden-grove-eye-doctor" element={<EastGardenGroveEyeDoctorPage />} />
          
          {/* Neighborhood Routes - Fullerton */}
          <Route path="/neighborhoods/fullerton-eye-doctor" element={<FullertonEyeDoctorPage />} />
          <Route path="/neighborhoods/west-fullerton-eye-doctor" element={<WestFullertonEyeDoctorPage />} />
          <Route path="/neighborhoods/north-fullerton-eye-doctor" element={<NorthFullertonEyeDoctorPage />} />
          
          {/* Neighborhood Routes - Yorba Linda */}
          <Route path="/neighborhoods/yorba-linda-eye-doctor" element={<YorbaLindaEyeDoctorPage />} />
          <Route path="/neighborhoods/east-yorba-linda-eye-doctor" element={<EastYorbaLindaEyeDoctorPage />} />
          <Route path="/neighborhoods/bryant-ranch-yorba-linda-eye-doctor" element={<BryantRanchYorbaLindaEyeDoctorPage />} />
          
          {/* Neighborhood Routes - Placentia */}
          <Route path="/neighborhoods/placentia-eye-doctor" element={<PlacentiaEyeDoctorPage />} />
          <Route path="/neighborhoods/west-placentia-eye-doctor" element={<WestPlacentiaEyeDoctorPage />} />
          
          {/* Neighborhood Routes - Brea */}
          <Route path="/neighborhoods/brea-eye-doctor" element={<BreaEyeDoctorPage />} />
          <Route path="/neighborhoods/north-brea-eye-doctor" element={<NorthBreaEyeDoctorPage />} />
          
          {/* Educational Content Routes */}
          <Route path="/education/faq/conditions/what-is-keratoconus" element={<WhatIsKeratoconusPage />} />
          <Route path="/education/faq/conditions/why-eyes-always-dry" element={<WhyEyesAlwaysDryPage />} />
          <Route path="/education/guides/conditions/child-nearsighted-signs" element={<ChildNearsightedSignsPage />} />
          
          {/* Spanish Routes */}
          <Route path="/es" element={<Index />} />
          <Route path="/es/about" element={<AboutPage />} />
          <Route path="/es/services" element={<ServicesPage />} />
          <Route path="/es/contact" element={<ContactPage />} />
          <Route path="/es/eyewear" element={<EyewearPage />} />
          <Route path="/es/fashion" element={<FashionPage />} />
          <Route path="/es/conditions" element={<EyeConditionsPage />} />
          <Route path="/es/conditions/keratoconus" element={<KeratoconusPage />} />
          <Route path="/es/conditions/dry-eye" element={<DryEyePage />} />
          <Route path="/es/conditions/headache-eye-fatigue" element={<HeadacheEyeFatiguePage />} />
          <Route path="/es/conditions/ortho-k" element={<OrthoKPage />} />
          <Route path="/es/conditions/lasik" element={<LasikPage />} />
          <Route path="/es/conditions/cataract" element={<CataractPage />} />
          <Route path="/es/conditions/subconjunctival-hemorrhage" element={<SubconjunctivalHemorrhagePage />} />
          <Route path="/es/conditions/posterior-vitreous-detachment" element={<PosteriorVitreousDetachmentPage />} />
          <Route path="/es/conditions/ocular-surface-disease" element={<OcularSurfaceDiseasePage />} />
          <Route path="/es/conditions/computer-vision-syndrome" element={<ComputerVisionSyndromePage />} />
          <Route path="/es/conditions/uveitis-iritis" element={<UveitisIritisPage />} />
          <Route path="/es/conditions/herpes-simplex-keratitis" element={<HerpesSimplexKeratitisPage />} />
          <Route path="/es/conditions/narrow-angles" element={<NarrowAnglesPage />} />
          <Route path="/es/conditions/blepharitis" element={<BlepharitisPage />} />
          <Route path="/es/conditions/fuchs-corneal-dystrophy" element={<FuchsCornealDystrophyPage />} />
          <Route path="/es/conditions/allergic-conjunctivitis" element={<AllergicConjunctivitisPage />} />
          <Route path="/es/conditions/floaters-flashes" element={<FloatersFlashesPage />} />
          <Route path="/es/conditions/myopia" element={<MyopiaPage />} />
          <Route path="/es/conditions/pinguecula-pterygium" element={<PingueculaPterygiumPage />} />
          
          {/* Spanish City Location Routes */}
          <Route path="/es/locations/irvine-eye-doctor" element={<IrvineEyeDoctorPage />} />
          <Route path="/es/locations/newport-beach-eye-doctor" element={<NewportBeachEyeDoctorPage />} />
          <Route path="/es/locations/costa-mesa-eye-doctor" element={<CostaMesaEyeDoctorPage />} />
          <Route path="/es/locations/santa-ana-eye-doctor" element={<SantaAnaEyeDoctorPage />} />
          <Route path="/es/locations/tustin-eye-doctor" element={<TustinEyeDoctorPage />} />
          <Route path="/es/locations/anaheim-eye-doctor" element={<AnaheimEyeDoctorPage />} />
          <Route path="/es/locations/anaheim-hills-eye-doctor" element={<AnaheimHillsEyeDoctorPage />} />
          <Route path="/es/locations/orange-eye-doctor" element={<OrangeEyeDoctorPage />} />
          <Route path="/es/locations/villa-park-eye-doctor" element={<VillaParkEyeDoctorPage />} />
          <Route path="/es/locations/riverside-eye-doctor" element={<RiversideEyeDoctorPage />} />
          
          {/* Admin */}
          <Route path="/admin/tools" element={<AdminToolsPage />} />
          <Route path="/admin/keratoconus-qr" element={<KeratoconusQRCodePage />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </GeoGuard>
      </Suspense>
      <ScrollToTopButton />
      <Toaster />
    </LanguageProvider>
  );
}

export default App;