import "../assets/css/Home.css";
import React, { useState } from "react";
import ItemCard from "../components/ItemCard";
import Lipstick from "../assets/images/Products/lipstick.jpg"
import Concealer from "../assets/images/Products/contour.jpg"
import Brush from "../assets/images/Products/brushes.jpg"
import EyeShadow from "../assets/images/Products/eyeshadow.jpg"
import Hairserum from "../assets/images/Products/hairserum.jpg"
import Kajal from "../assets/images/Products/kajal.jpg"
import Lipliner from "../assets/images/Products/lipliner.jpg"
import Mask from "../assets/images/Products/mask.jpg"
import Mosturizer from "../assets/images/Products/moisturizer.jpg"
import Nails from "../assets/images/Products/nails.jpg"
import Scrub from "../assets/images/Products/scrub.jpg"
import Sunscreen from "../assets/images/Products/sunscreen.jpg"
import { useNavigate } from "react-router-dom";

export function Products() {

  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
      setCartItems([...cartItems, item]);
  };

  const handleViewCart = () => {
      navigate('/cart', { state: { cartItems } });
  };

  return (
    <>
      <h1 className="products">Our Products</h1>

      <div className="container" style={{ marginTop: "10px" }}>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <ItemCard
            image={Lipstick}
            title="Lipstip"
            text="A long-lasting, vibrant lipstick in various shades."
            price={200}
            addToCart={handleAddToCart}
            // addToCart={() => handleAddToCart({ title: "Lipstip", price: 200 })}
          />
          <ItemCard
            image={Concealer}
            title="Concealer"
            text="A smooth and blendable contour stick for perfect cheekbones."
            price={300}
            addToCart={() => handleAddToCart({ title: "Concealer", price: 300 })}
          />
          <ItemCard
            image={Brush}
            title="Makeup Brushes"
            text="A set of high-quality makeup brushes for flawless application."
            price={200}
            addToCart={() => handleAddToCart({ title: "Makeup Brushes", price: 200 })}
          />
          <ItemCard
            image={EyeShadow}
            title="Eyeshadow"
            text="A palette of highly pigmented eyeshadows in multiple colors."
            price={250}
            addToCart={() => handleAddToCart({ title: "Eyeshadow", price: 250 })}
          />
          <ItemCard
            image={Lipliner}
            title="Lip liners"
            text="Define and shape your lips with these creamy lip liners."
            price={300}
            addToCart={() => handleAddToCart({ title: "Lipliner", price: 300 })}
          />
          <ItemCard
            image={Mosturizer}
            title="Moisturizer"
            text="Hydrating moisturizer for daily use"
            price={350}
            addToCart={() => handleAddToCart({ title: "Moisturizer", price: 350 })}
          />
          <ItemCard
            image={Nails}
            title="Nails"
            text="This is a artificially created nails to protect and give nails a unique look"
            price={400}
            addToCart={() => handleAddToCart({ title: "Nails", price: 400 })}
          />
          <ItemCard
            image={Sunscreen}
            title="Sunscreen"
            text="Broad-spectrum sunscreen with SPF 30."
            price={350}
            addToCart={() => handleAddToCart({ title: "Sunscreen", price: 350 })}
          />
          <ItemCard
            image={Hairserum}
            title="Hair Serum"
            text="Leave-in hair serum for shine and frizz control."
            price={450}
            addToCart={() => handleAddToCart({ title: "Hair Serum", price: 450 })}
          />
          <ItemCard
            image={Scrub}
            title="Face Scrub"
            text="A gentle exfoliating scrub for smooth, radiant skin."
            price={200}
            addToCart={() => handleAddToCart({ title: "Face Scrub", price: 200 })}
          />
          <ItemCard
            image={Mask}
            title="Face Mask"
            text="A hydrating face mask for glowing, rejuvenated skin."
            price={100}
            addToCart={() => handleAddToCart({ title: "Face Mask", price: 100 })}
          />
          <ItemCard
            image={Kajal}
            title="Kajal"
            text="A smooth, long-lasting kajal for intense eyes."
            price={200}
            addToCart={() => handleAddToCart({ title: "Kajal", price: 200 })}
          />
        </div>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleViewCart}>View Cart</button>
    </>
  );
}



