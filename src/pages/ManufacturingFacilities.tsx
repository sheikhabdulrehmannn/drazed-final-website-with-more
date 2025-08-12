// ManufacturingFacilities.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Warehouse, TestTube, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Card from '../components/Card';
import ImageLightbox from '../components/ImageLightbox';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ManufacturingFacilities = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useScrollAnimation();

  const facilityFeatures = [
    {
      title: 'Production Halls',
      description: 'Multiple dedicated production lines for rubber, plastic, and PVC components.',
      icon: <Factory className="h-8 w-8" />
    },
    {
      title: 'Storage Areas',
      description: 'Climate-controlled warehouses for raw materials and finished goods to maintain product integrity.',
      icon: <Warehouse className="h-8 w-8" />
    },
    {
      title: 'Testing & R&D Labs',
      description: 'Fully equipped quality control and research laboratories to ensure product performance and innovation.',
      icon: <TestTube className="h-8 w-8" />
    },
    {
      title: 'Administrative Offices',
      description: 'Modern workspaces housing our engineering, sales, design, and management teams.',
      icon: <Building className="h-8 w-8" />
    }
  ];

  const galleryImages = [
    // Replace placeholder URLs with real facility images when available
    { src: 'https://via.placeholder.com/800x600?text=Facility+Exterior', alt: 'Exterior view of Millat Polymer & Rubber facility' },
    { src: 'https://via.placeholder.com/800x600?text=Production+Floor', alt: 'Production floor with machinery' },
    { src: 'https://via.placeholder.com/800x600?text=Injection+Molding', alt: 'Injection molding equipment' },
    { src: 'https://via.placeholder.com/800x600?text=Rubber+Compounding', alt: 'Rubber compounding section' },
    { src: 'https://via.placeholder.com/800x600?text=Testing+Lab', alt: 'Quality testing and R&D lab' },
    { src: 'https://via.placeholder.com/800x600?text=Warehouse', alt: 'Warehouse and loading area' }
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeIn" }} className="min-h-screen">
      
      {/* Hero Banner */}
      <HeroBanner
        backgroundImage="https://via.placeholder.com/1920x1080?text=Manufacturing+Facility"
        title="World-Class <span class='text-primary'>Manufacturing Facilities</span>"
        subtitle="Precision • Capacity • Excellence"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Manufacturing <span className="text-primary">Facility</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Located in [CITY – Placeholder], Pakistan, our state-of-the-art manufacturing complex spans over [SIZE – Placeholder] sq. ft., 
              housing a skilled workforce of [EMPLOYEE COUNT – Placeholder] professionals. 
              Designed for maximum efficiency and scalability, the facility integrates production, quality testing, and warehousing under one roof, 
              enabling us to meet diverse client needs across automotive, industrial, and infrastructure sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="section-padding bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Facility <span className="text-primary">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every element of our facility is designed to support world-class polymer manufacturing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilityFeatures.map((feature, index) => (
              <Card
                key={index}
                title={feature.title}
                className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} text-center lift-hover`}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {feature.icon}
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scale-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Photo <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore a glimpse of our facility, production processes, and operational capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`${index % 3 === 0 ? 'slide-in-left' : index % 3 === 1 ? 'scale-in' : 'slide-in-right'} aspect-video overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-millat-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="scale-in max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Explore Our Production Processes
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how Millat Polymer & Rubber’s advanced production methods ensure consistent quality and efficiency.
            </p>
            <Link 
              to="/production-processes" 
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
            >
              <span>Explore Our Production Processes</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <ImageLightbox
        images={galleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </motion.div>
  );
};

export default ManufacturingFacilities;