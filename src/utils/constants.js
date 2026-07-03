export const INGREDIENTS = [
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    scientific: "Aloe Barbadensis",
    icon: "🌿",
    color: "#DDEED8",
    bgClass: "bg-[#DDEED8]",
    tagline: "Soothe & Hydrate",
    benefits: "Intensely calms, hydrates, and cools sensitive skin.",
    origin: "Campeche, Mexico",
    community: "Sourced through Community Fair Trade from organic farmers who hand-harvest mature leaves within hours to lock in pure gel.",
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "avocado",
    name: "Avocado",
    scientific: "Persea Gratissima",
    icon: "🥑",
    color: "#E2ECC8",
    bgClass: "bg-[#E2ECC8]",
    tagline: "Nourish & Restore",
    benefits: "Rich in fatty acids and vitamins to deeply feed dry skin.",
    origin: "Limpopo, South Africa",
    community: "Our trade supports family farms, helping improve irrigation techniques and boosting local employment in processing oil.",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "shea-butter",
    name: "Shea Butter",
    scientific: "Butyrospermum Parkii",
    icon: "🌰",
    color: "#F3E9DC",
    bgClass: "bg-[#F3E9DC]",
    tagline: "Ultra-Rich Moisture",
    benefits: "Locks in intense moisture, softens skin, and repairs dry barriers.",
    origin: "Tungteiya, Ghana",
    community: "Handcrafted by over 600 women of the Tungteiya Shea Butter Association, providing fair wages and funding local healthcare and water projects.",
    image: "https://images.unsplash.com/photo-1590156221120-75d774f9b7c2?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "tea-tree",
    name: "Tea Tree",
    scientific: "Melaleuca Alternifolia",
    icon: "🍵",
    color: "#D2E3C8",
    bgClass: "bg-[#D2E3C8]",
    tagline: "Purify & Clarify",
    benefits: "Naturally antibacterial, targets blemishes and controls excess oil.",
    origin: "Mount Kenya, Kenya",
    community: "Grown by organic smallholders who steam-distill the leaves within 12 hours of harvest to preserve purifying qualities.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "british-rose",
    name: "British Rose",
    scientific: "Rosa Centifolia",
    icon: "🌹",
    color: "#FADADD",
    bgClass: "bg-[#FADADD]",
    tagline: "Radiant Dewy Glow",
    benefits: "Plumps skin with moisture, refines texture, and offers a sweet scent.",
    origin: "Herefordshire, England",
    community: "Our roses are organically grown, hand-picked, and air-dried to create the rose essence, supporting biodiverse farming.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "coconut",
    name: "Coconut",
    scientific: "Cocos Nucifera",
    icon: "🥥",
    color: "#FAF6F0",
    bgClass: "bg-[#FAF6F0]",
    tagline: "Smooth & Protect",
    benefits: "Softens texture, conditions hair and skin, and smells like paradise.",
    origin: "Samoa, Polynesia",
    community: "Cold-pressed wild-harvested organic coconut oil sourced from family cooperatives, supporting sustainable island economies.",
    image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&q=80&w=800"
  }
];

export const PRODUCTS = [
  {
    id: "shea-body-butter",
    name: "Shea Body Butter",
    category: "Body Care",
    price: "8,900 ֏",
    priceVal: 8900,
    rating: 4.8,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800",
    benefits: "Provides 96hr intense moisture. Made with 95% ingredients of natural origin, including handcrafted community fair trade shea butter.",
    usage: "Massage a dollop into dry skin after bathing. Pay extra attention to dry elbows and knees.",
    ingredients: "Aqua, Butyrospermum Parkii Butter, Cetearyl Alcohol, Glycerin, Glyceryl Stearate, PEG-100 Stearate, C12-15 Alkyl Benzoate, Ethylhexyl Palmitate.",
    featured: true,
    collection: "Shea"
  },
  {
    id: "tea-tree-oil",
    name: "Tea Tree Oil",
    category: "Skincare",
    price: "6,500 ֏",
    priceVal: 6500,
    rating: 4.9,
    reviews: 298,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800",
    benefits: "A purifying concentrate that targets blemishes. Perfect for oily, blemished skin. Clinically proven to reduce impurities.",
    usage: "Apply 1-2 drops directly onto blemishes using clean fingers or a cotton bud. Use day and night.",
    ingredients: "Melaleuca Alternifolia Leaf Oil, Limonene, Calophyllum Inophyllum Seed Oil, Tocopherol, Leptospermum Petersonii Oil.",
    featured: true,
    collection: "Tea Tree"
  },
  {
    id: "vitamin-c-glow-revealing-serum",
    name: "Vitamin C Glow Serum",
    category: "Skincare",
    price: "13,900 ֏",
    priceVal: 13900,
    rating: 4.7,
    reviews: 84,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    benefits: "Imparts a radiant, even glow. Loaded with 10% natural-origin Vitamin C and Camu Camu berry extract.",
    usage: "Smooth a few drops over cleansed face and neck morning and night before moisturizing.",
    ingredients: "Aqua, Propanediol, 3-O-Ethyl Ascorbic Acid, Glycerin, Coco-Caprylate/Caprate, Camu Camu Fruit Extract.",
    featured: true,
    collection: "Vitamin C"
  },
  {
    id: "ginger-shampoo",
    name: "Ginger Anti-Dandruff Shampoo",
    category: "Hair Care",
    price: "5,800 ֏",
    priceVal: 5800,
    rating: 4.6,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800",
    benefits: "Clears flakes and soothes dry, itchy scalps. Made with ginger essential oil, birch bark, and white willow extracts.",
    usage: "Lather into wet hair, massage scalp gently, and rinse thoroughly. Follow with Ginger Conditioner.",
    ingredients: "Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Salicylic Acid, Zingiber Officinale Root Oil.",
    featured: true,
    collection: "Ginger"
  },
  {
    id: "tea-tree-skin-clearing-facial-wash",
    name: "Tea Tree Facial Wash",
    category: "Skincare",
    price: "5,200 ֏",
    priceVal: 5200,
    rating: 4.7,
    reviews: 121,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
    benefits: "Daily gel cleanser that removes impurities and excess oil without over-drying the skin.",
    usage: "Lather into wet skin using warm water. Massage in circles, rinse, and pat dry.",
    ingredients: "Aqua, Glycerin, Sodium Laureth Sulfate, Cocamidopropyl Betaine, PEG-120 Methyl Glucose Dioleate, Tea Tree Leaf Oil.",
    featured: true,
    collection: "Tea Tree"
  },
  {
    id: "british-rose-body-yogurt",
    name: "British Rose Body Yogurt",
    category: "Body Care",
    price: "7,900 ֏",
    priceVal: 7900,
    rating: 4.8,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800",
    benefits: "Absorbs instantly on damp skin for 48hr hydration. Smells like a fresh English rose garden in bloom.",
    usage: "Smooth onto damp or dry skin immediately after showering for instant hydration.",
    ingredients: "Aqua, Glycerin, Alcohol Denat., Dimethicone, Butylene Glycol, Parfum, Rose Extract, Sodium Hyaluronate.",
    featured: true,
    collection: "British Rose"
  }
];

export const COLLECTIONS = [
  { id: "tea-tree", name: "Tea Tree", desc: "Purifying skin clearers", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800" },
  { id: "vitamin-c", name: "Vitamin C", desc: "Glow & radiance boosters", image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800" },
  { id: "british-rose", name: "British Rose", desc: "Dewy floral hydration", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800" },
  { id: "shea", name: "Shea Butter", desc: "Ultra-rich barrier repair", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800" },
  { id: "moringa", name: "Moringa", desc: "Brightening floral body care", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=800" },
  { id: "olive", name: "Olive", desc: "Soothing Mediterranean hydration", image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80&w=800" }
];

export const STORES = [
  {
    id: "mashtots",
    name: "Mashtots Avenue Boutique",
    address: "24 Mashtots Avenue, Yerevan",
    hours: "10:00 - 22:00",
    phone: "+374 10 523344",
    coordinates: { x: 45, y: 48 },
    mapGlow: "shadow-[0_0_20px_rgba(27,94,32,0.6)]"
  },
  {
    id: "dalma",
    name: "Dalma Garden Mall Store",
    address: "3 Tsitsernakaberd Highway, Yerevan (1st Floor)",
    hours: "10:00 - 22:00",
    phone: "+374 60 461155",
    coordinates: { x: 38, y: 56 },
    mapGlow: "shadow-[0_0_20px_rgba(123,94,59,0.6)]"
  }
];

export const GIFT_SETS = [
  {
    id: "luxury-shea-gift-dome",
    name: "Luxury Shea Nourishing Gift Set",
    theme: "Self-Care",
    price: "16,500 ֏",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800",
    contents: ["Shea Body Butter 200ml", "Shea Hand Cream 30ml", "Shea Shower Cream 250ml", "Shea Body Scrub 50ml"]
  },
  {
    id: "british-rose-glowing-box",
    name: "British Rose Glow & Hydrate Set",
    theme: "Birthday",
    price: "12,900 ֏",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800",
    contents: ["Rose Shower Gel 250ml", "Rose Body Yogurt 200ml", "Rose Hand Cream 30ml", "Rose Soap 100g"]
  },
  {
    id: "tea-tree-purifying-routine",
    name: "Tea Tree Clear Skin Rescue Kit",
    theme: "Skincare System",
    price: "14,500 ֏",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    contents: ["Tea Tree Face Wash 250ml", "Tea Tree Toner 250ml", "Tea Tree Oil 10ml", "Clay Face Mask 50ml"]
  }
];
