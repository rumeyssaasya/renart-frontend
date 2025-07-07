import React, { useRef, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

interface Product {
  name: string;
  popularityScore: number;
  weight: number;
  images: { [color: string]: string };
  price: string;
  popularityOutOfFive: string;
}

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  const cardWidth = 310;
  const scrollRef = useRef<HTMLDivElement>(null);

  const renderData = [
    ...products,
    ...[...products].reverse(),
    ...products,
  ];

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const middle = (container.scrollWidth - container.clientWidth) / 2;
      container.scrollLeft = middle;
    }
  }, []);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  if (!products.length) {
    return <div className="no-match">No matching products found. Please update the filters and try again.</div>;
  }

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Product List</h2>
      <div className="carousel-scroll-wrapper">
        <button className="carousel-button prev" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="carousel-scroll-slide" ref={scrollRef}>
          {renderData.map((product, index) => (
            <div key={`${product.name}-${index}`} className="carousel-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductList;
