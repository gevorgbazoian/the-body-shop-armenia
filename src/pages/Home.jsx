import Hero from "../components/Hero";
import Ingredients from "../components/Ingredients";
import BestSellers from "../components/BestSellers";
import IngredientJourney from "../components/IngredientJourney";
import Sustainability from "../components/Sustainability";
import BeforeAfter from "../components/BeforeAfter";
import Collections from "../components/Collections";
import Stores from "../components/Stores";
import Newsletter from "../components/Newsletter";

export default function Home({ onAddToCart }) {
  return (
    <div className="relative w-full">
      {/* 1. Hero Cover */}
      <Hero />

      {/* 2. Expanding Ingredient cards with 3D Leaf */}
      <Ingredients />

      {/* 3. Horizontal Scroll Best Sellers */}
      <BestSellers onAddToCart={onAddToCart} />

      {/* 4. WOW Section: Shea Butter Pinned Scroll Journey */}
      <IngredientJourney />

      {/* 5. Sustainability Text Convergence */}
      <Sustainability />

      {/* 6. Skin Before/After slider */}
      <BeforeAfter />

      {/* 7. Curved Collection zooms */}
      <Collections />

      {/* 8. Boutique locator & central Yerevan map */}
      <Stores />

      {/* 9. Minimal Signup */}
      <Newsletter />
    </div>
  );
}
