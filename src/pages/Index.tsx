import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyUsSection from "@/components/WhyUsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title and meta tags
    document.title = "BioVeins Lifesciences - Quality Medicines & Trusted Results";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "BioVeins Lifesciences is a trusted pharmaceutical company manufacturing high-quality medicines and supplying them to hospitals and healthcare providers across India.");
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://bioveins.in/");
    }

    // Add breadcrumb structured data
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bioveins.in/"
      }]
    });
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.head.removeChild(breadcrumbScript);
    };
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyUsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
