import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero';
import ModesGrid from '../components/Home/ModesGrid';
import FeaturedBirds from '../components/Home/FeaturedBirds';
import Features from '../components/Home/Features';
import CTASection from '../components/Home/CTASection';
import MigrationModePreview from '../components/ModePreview/MigrationModePreview';
import BabyVsAdultPreview from '../components/ModePreview/BabyVsAdultPreview';
import LostSoundsPreview from '../components/ModePreview/LostSoundsPreview';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <ModesGrid />
      <FeaturedBirds />
      
      {/* Featured Modes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Featured Exploration Modes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get a preview of some of our most popular modes. Each one offers a unique way to
              connect with bird sounds and learn about avian life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MigrationModePreview />
            <BabyVsAdultPreview />
            <LostSoundsPreview />
          </div>
        </div>
      </section>
      
      <Features />
      <CTASection />
    </Layout>
  );
};

export default HomePage;