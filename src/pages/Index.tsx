import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MainSections from '@/components/MainSections';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MainSections />
      <Footer />
    </div>
  );
};

export default Index;
