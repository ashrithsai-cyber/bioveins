import { motion } from "framer-motion";
import { Pill, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductCarousel = ({ images, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-44 overflow-hidden group">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${productName} ${index + 1}`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      
      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Carousel indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const products = [
  {
    id: "fer30-tablets",
    name: "Fer30 Tablets",
    category: "Iron Supplement",
    desc: "Iron amino acid chelate equivalent to elemental Iron 30mg + Folic Acid 1.5mg + Vitamin B12 15mcg + Zinc Picolinate 10mg",
    icon: Pill,
    color: "bg-primary/10 text-primary",
    images: ["/PRODUCTS/fer 30 1.png", "/PRODUCTS/fer 30 2.png", "/PRODUCTS/fer 30 3.png"],
  },
  {
    id: "bless-m-sachets",
    name: "Bless-M Sachets",
    category: "Male Fertility",
    desc: "Myo-inositol 4g + Ubiquinol Acetate 100mg + Astaxanthin 8mg + L-Carnitine 250mg + Lycopene 2.5mg + L-Arginine 100mg + Taurine 100mg + Zinc 55mg + Selenium 70mcg + ATP 20mg + Vitamin D 1000 IU",
    icon: Package,
    color: "bg-accent/10 text-accent",
    images: ["/PRODUCTS/bless m 1.png", "/PRODUCTS/bless m 2.png", "/PRODUCTS/bless m 3.png"],
  },
  {
    id: "bless-f-sachets",
    name: "Bless-F Sachets",
    category: "Expert in PCOS",
    desc: "Myo-Inositol 2g + Lactoferrin 100mg + Trans-Resveratrol 80mg + D-Chiro Inositol 50mg + Melatonin 3mg + Quatrefolic 220mcg + Chromium Picolinate 25mcg + Vitamin D3 600 IU",
    icon: Package,
    color: "bg-primary/10 text-primary",
    images: ["/PRODUCTS/bless f 1.png", "/PRODUCTS/bless f 2.png", "/PRODUCTS/bless f 3.png"],
  },
  {
    id: "chymovein-forte-tablets",
    name: "Chymovein Forte Tablets",
    category: "Anti-inflammatory",
    desc: "Trypsin + Chymotrypsin Tablets — A powerful enzyme combination for reducing inflammation, swelling, and pain.",
    icon: Pill,
    color: "bg-accent/10 text-accent",
    images: ["/PRODUCTS/CHYMOVEIN FORTE(1).png", "/PRODUCTS/CHYMOVEIN FORTE(2).png", "/PRODUCTS/CHYMOVEIN FORTE(3).png"],
  },
  {
    id: "folmaa-tablets",
    name: "Folmaa Tablets",
    category: "Supplement",
    desc: "Folic acid supplement designed to support overall health and wellness.",
    icon: Pill,
    color: "bg-primary/10 text-primary",
    images: ["/PRODUCTS/fol maa 1.png", "/PRODUCTS/fol maa 2.png", "/PRODUCTS/fol maa 3.png"],
  },
];

const ProductsSection = () => (
  <section id="products" className="py-24 section-gradient">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Products</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Quality Medicines, Trusted Results
        </h2>
        <p className="text-muted-foreground text-lg">
          Each product is manufactured under strict quality standards to ensure safety, efficacy, and reliability.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card rounded-xl overflow-hidden card-elevated border border-border"
          >
            {p.images ? (
              <ProductCarousel images={p.images} productName={p.name} />
            ) : (
              <div className="h-44 border-b border-border bg-secondary/60 flex items-center justify-center">
                <p className="text-sm font-medium text-muted-foreground">Image Space (Add Later)</p>
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-lg ${p.color} flex items-center justify-center`}>
                  <p.icon size={22} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.category}</span>
                  <h3 className="text-lg font-display font-bold text-foreground">{p.name}</h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              <Link
                to={`/products-info/${p.id}`}
                className="inline-block mt-5 px-4 py-2 rounded-md bg-sky-300 text-slate-900 text-sm font-semibold hover:bg-sky-400 transition-colors"
              >
                View More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
