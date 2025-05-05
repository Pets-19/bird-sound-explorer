import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Map, Puzzle, Users, Bird, Moon } from 'lucide-react';

const features = [
  {
    icon: <Headphones className="h-12 w-12 text-primary-500" />,
    title: "High-Quality Audio",
    description: "Experience crystal clear bird calls recorded by experts from around the globe."
  },
  {
    icon: <Map className="h-12 w-12 text-primary-500" />,
    title: "Interactive Maps",
    description: "Visualize migration patterns and discover bird habitats across all continents."
  },
  {
    icon: <Puzzle className="h-12 w-12 text-primary-500" />,
    title: "Educational Games",
    description: "Learn while having fun with our entertaining bird-themed games and quizzes."
  },
  {
    icon: <Users className="h-12 w-12 text-primary-500" />,
    title: "Community Features",
    description: "Share recordings, compete in challenges, and connect with other bird enthusiasts."
  },
  {
    icon: <Bird className="h-12 w-12 text-primary-500" />,
    title: "Field Identification",
    description: "Record birds in the wild and get AI-assisted identification help instantly."
  },
  {
    icon: <Moon className="h-12 w-12 text-primary-500" />,
    title: "Conservation Focus",
    description: "Learn about endangered birds and how you can help protect their habitats."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            A Complete Bird Sound Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform combines education, entertainment, and conservation to create a unique experience for bird enthusiasts of all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;