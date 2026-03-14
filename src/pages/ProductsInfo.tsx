import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

const productDetails = [
  {
    id: "fer30-tablets",
    name: "Fer30 Tablets",
    category: "Iron Supplement",
    description:
      "Iron, Zinc, Folic Acid & Vitamin B12 supplement for treating iron deficiency anemia and nutritional support.",
    images: ["/PRODUCTS/fer 30 1.png", "/PRODUCTS/fer 30 2.png", "/PRODUCTS/fer 30 3.png"],
    benefits: [
      "Treats iron deficiency anemia",
      "Provides pregnancy nutritional support",
      "Reduces fatigue and weakness",
      "Addresses nutritional deficiencies",
      "Supports red blood cell formation"
    ],
    keyIngredients: [
      { name: "Iron", amount: "30mg (elemental)" },
      { name: "Zinc", amount: "10mg" },
      { name: "Folic Acid", amount: "1.5mg" },
      { name: "Vitamin B12", amount: "15mcg" }
    ],
    dosage: "Usually 1 tablet daily or as directed by a physician.",
    sideEffects: "Constipation, dark stools, nausea. Avoid overdose to prevent iron toxicity.",
    storage: "Store below 25°C. Protect from moisture.",
    targetAudience: "Pregnant women, patients with anemia, nutritional deficiency cases",
    shelfLife: "24-36 months",
    precautions: "Avoid overdose (iron toxicity risk). Keep away from children."
  },
  {
    id: "bless-m-sachets",
    name: "Bless-M Sachets",
    category: "Male Fertility",
    description:
      "Comprehensive male fertility support formula with antioxidants and essential nutrients.",
    images: ["/PRODUCTS/bless m 1.png", "/PRODUCTS/bless m 2.png", "/PRODUCTS/bless m 3.png"],
    benefits: [
      "Improves sperm motility and count",
      "Provides antioxidant protection for sperm",
      "Supports male reproductive health",
      "Addresses male infertility concerns",
      "Enhances fertility outcomes"
    ],
    keyIngredients: [
      { name: "Myo-Inositol", amount: "4g" },
      { name: "Ubiquinol Acetate", amount: "100mg" },
      { name: "L-Carnitine", amount: "250mg" },
      { name: "Zinc", amount: "55mg" },
      { name: "Selenium", amount: "70mcg" },
      { name: "Vitamin D", amount: "1000 IU" },
      { name: "Astaxanthin", amount: "8mg" },
      { name: "Lycopene", amount: "2.5mg" },
      { name: "L-Arginine", amount: "100mg" },
      { name: "Taurine", amount: "100mg" },
      { name: "ATP", amount: "20mg" }
    ],
    dosage: "1 sachet daily or as directed by a physician.",
    sideEffects: "Mild digestive upset, headache, rare allergic reactions.",
    storage: "Store below 25°C. Keep dry and away from sunlight.",
    targetAudience: "Men with low sperm count, men with poor sperm motility, couples undergoing fertility treatment",
    shelfLife: "24 months"
  },
  {
    id: "bless-f-sachets",
    name: "Bless-F Sachets",
    category: "PCOS Support",
    description:
      "Specialized formula for Polycystic Ovary Syndrome management and hormonal balance.",
    images: ["/PRODUCTS/bless f 1.png", "/PRODUCTS/bless f 2.png", "/PRODUCTS/bless f 3.png"],
    benefits: [
      "Management of Polycystic Ovary Syndrome (PCOS)",
      "Improves hormonal balance",
      "Supports ovulation and menstrual regularity",
      "Helps reduce insulin resistance",
      "May improve fertility outcomes",
      "Evidence shows myo-inositol improves metabolic and hormonal profiles in women with PCOS"
    ],
    keyIngredients: [
      { name: "Myo-Inositol", amount: "2g" },
      { name: "Lactoferrin", amount: "100mg" },
      { name: "Trans-Resveratrol", amount: "80mg" },
      { name: "D-Chiro Inositol", amount: "50mg" },
      { name: "Melatonin", amount: "3mg" },
      { name: "Quatrefolic (active folate)", amount: "220mcg" },
      { name: "Vitamin D3", amount: "600 IU" }
    ],
    dosage: "Typically 1 sachet daily or as directed by a physician.",
    sideEffects: "Mild nausea, headache, gastrointestinal discomfort, rare allergic reaction.",
    storage: "Store below 25°C. Protect from moisture and direct sunlight.",
    targetAudience: "Women diagnosed with PCOS, women with irregular menstrual cycles, women trying to conceive",
    shelfLife: "24 months",
    precautions: "Not recommended without medical supervision during pregnancy. Patients with chronic illnesses should consult a doctor."
  },
  {
    id: "chymovein-forte-tablets",
    name: "Chymovein Forte Tablets",
    category: "Anti-inflammatory",
    description:
      "Trypsin-Chymotrypsin combination for reducing inflammation, swelling, and promoting tissue healing.",
    images: ["/PRODUCTS/CHYMOVEIN FORTE(1).png", "/PRODUCTS/CHYMOVEIN FORTE(2).png", "/PRODUCTS/CHYMOVEIN FORTE(3).png"],
    benefits: [
      "Reduces post-surgical swelling",
      "Treats trauma and injuries",
      "Helps with sports injuries",
      "Manages inflammatory conditions",
      "Promotes tissue healing by breaking down damaged proteins"
    ],
    keyIngredients: [
      { name: "Trypsin", amount: "48mg" },
      { name: "Chymotrypsin", amount: "100,000 Armour units" }
    ],
    dosage: "Usually 1-2 tablets before meals, as prescribed.",
    sideEffects: "Skin rash, diarrhea, stomach upset, rare allergic reaction.",
    storage: "Store below 25°C. Keep in dry place.",
    shelfLife: "24 months",
    precautions: "Avoid in patients with severe bleeding disorders. Use under medical supervision."
  },
  {
    id: "folmaa-tablets",
    name: "Fol-MAA Soft Gel Capsules",
    category: "Prenatal Supplement",
    description:
      "Advanced prenatal nutrition with active folate, B vitamins, iodine and DHA for pregnancy support and fetal development.",
    images: ["/PRODUCTS/fol maa 1.png", "/PRODUCTS/fol maa 2.png", "/PRODUCTS/fol maa 3.png"],
    benefits: [
      "Pregnancy nutritional support",
      "Prevention of neural tube defects",
      "Supports fetal brain development",
      "Addresses maternal vitamin deficiency",
      "Essential for healthy pregnancy outcomes"
    ],
    keyIngredients: [
      { name: "L-Methylfolate Calcium", amount: "1mg" },
      { name: "Pyridoxal-5-Phosphate (Vitamin B6)", amount: "2.5mg" },
      { name: "Methylcobalamin (Vitamin B12)", amount: "2.5mcg" },
      { name: "Iodine", amount: "150mcg" },
      { name: "DHA (Docosahexaenoic Acid)", amount: "200mg" }
    ],
    dosage: "1 capsule daily or as advised by healthcare professional.",
    sideEffects: "Mild nausea, gastric discomfort, rare allergic reactions.",
    storage: "Store below 25°C. Protect from light and humidity.",
    targetAudience: "Women planning pregnancy, pregnant women, women with folate deficiency",
    shelfLife: "24 months",
    packaging: "10 x 1 x 10 Soft Gelatin Capsules"
  },
];

const ProductsInfo = () => {
  const { productId } = useParams();
  const product = productDetails.find((item) => item.id === productId);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    if (product) {
      // Update document title
      document.title = `${product.name} - BioVeins Lifesciences`;

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", `${product.name} - ${product.description} Learn more about this quality medicine from BioVeins Lifesciences.`);
      }

      // Update canonical URL
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute("href", `https://bioveins.in/products-info/${product.id}`);
      }

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogTitle) ogTitle.setAttribute("content", `${product.name} - BioVeins Lifesciences`);
      if (ogDescription) ogDescription.setAttribute("content", `${product.name} - ${product.description}`);

      // Add product structured data
      const productScript = document.createElement('script');
      productScript.type = 'application/ld+json';
      productScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "category": product.category,
        "brand": {
          "@type": "Brand",
          "name": "BioVeins Lifesciences"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "BioVeins Lifesciences"
        }
      });
      document.head.appendChild(productScript);

      // Add breadcrumb structured data
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://bioveins.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Products",
            "item": "https://bioveins.in/#products"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": product.name,
            "item": `https://bioveins.in/products-info/${product.id}`
          }
        ]
      });
      document.head.appendChild(breadcrumbScript);

      return () => {
        document.head.removeChild(productScript);
        document.head.removeChild(breadcrumbScript);
      };
    }
  }, [product]);

  return (
    <section className="min-h-screen py-16 bg-background">
      <div className="container max-w-4xl">
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex px-4 py-2 rounded-md bg-sky-300 text-slate-900 text-sm font-semibold hover:bg-sky-400 transition-colors"
        >
          Back to Home
        </Link>
      </div>

      {product ? (
        <>
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Product Information</h1>
            <p className="text-muted-foreground text-base">Detailed information for the selected BioVeins product.</p>
          </div>

          <div className="rounded-xl border border-border bg-card overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 border-b border-border">
              {product.images.map((img, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={img} 
                    alt={`${product.name} ${index + 1}`} 
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              ))}
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{product.category}</p>
              <h2 className="text-xl font-display font-bold text-foreground mb-3">{product.name}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{product.description}</p>

              {/* Benefits Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Benefits & Uses</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm text-muted-foreground">
                      <span className="text-primary mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Ingredients Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Key Ingredients</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.keyIngredients.map((ingredient, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{ingredient.name}:</span>
                      <span className="font-medium text-foreground">{ingredient.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dosage Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Dosage & Administration</h3>
                <p className="text-sm text-muted-foreground">{product.dosage}</p>
              </div>

              {/* Side Effects Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Side Effects</h3>
                <p className="text-sm text-muted-foreground">{product.sideEffects}</p>
              </div>

              {/* Target Audience Section */}
              {product.targetAudience && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Target Audience</h3>
                  <p className="text-sm text-muted-foreground">{product.targetAudience}</p>
                </div>
              )}

              {/* Shelf Life Section */}
              {product.shelfLife && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Shelf Life</h3>
                  <p className="text-sm text-muted-foreground">{product.shelfLife}</p>
                </div>
              )}

              {/* Packaging Section */}
              {product.packaging && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Packaging</h3>
                  <p className="text-sm text-muted-foreground">{product.packaging}</p>
                </div>
              )}

              {/* Precautions Section */}
              {product.precautions && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Precautions</h3>
                  <p className="text-sm text-muted-foreground">{product.precautions}</p>
                </div>
              )}

              {/* Storage Section */}
              {product.storage && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Storage</h3>
                  <p className="text-sm text-muted-foreground">{product.storage}</p>
                </div>
              )}

              {/* Manufacturing Standards */}
              <div className="border-t border-border pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">
                  All BioVeins products are manufactured under strict quality control standards in WHO-GMP certified facilities.
                  Each batch undergoes rigorous testing for purity, potency, and safety.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="rounded-xl border border-border bg-card p-8 text-center max-w-xl mx-auto">
          <h1 className="text-2xl font-display font-bold text-foreground mb-3">Product Not Found</h1>
          <p className="text-muted-foreground">The product link is invalid. Please go back and select a product again.</p>
        </div>
      )}
      </div>
    </section>
  );
};

export default ProductsInfo;
