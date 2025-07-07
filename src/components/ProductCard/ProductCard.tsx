import React, { useState } from 'react';
import StarRating from '../starRating/starRating';
import './ProductCard.css';

interface Product {
    name: string;
    popularityScore: number;
    weight: number;
    images: { [color: string]: string };
    price: string;
    popularityOutOfFive: string;
}

interface Props {
  product: Product;
}


const ProductCard: React.FC<Props> = ({ product }) => {
  const colorKeys = Object.keys(product.images);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const selectedColorKey = colorKeys[selectedColorIndex];
  const imageUrl = product.images[selectedColorKey];

  

  return (
    <div >
      <img src={imageUrl} alt={`${selectedColorKey}`} className="ring-image" />
      <p className='product-name'>{product.name}</p>
      <p className='product-price'>${product.price} USD</p>

        <div className="ring-button-color-select-group" >
        {colorKeys.map((color, idx) => (
            <div
            key={color}
            style={{
                width: 'max-content',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <button
                onClick={() => setSelectedColorIndex(idx)}
                style={{
                width: 26,
                height: 26,
                padding: 0,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                border: selectedColorIndex === idx ? '1px solid #6B6B6B' : 'none',
                }}
            >
                <div
                style={{
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    backgroundColor:
                    color === 'yellow' ? '#E6CA97' :
                    color === 'white' ? '#D9D9D9' :
                    color === 'rose' ? '#E1A4A9' : ''
                }}
                />
            </button>
            </div>
        ))}
        </div>

        <span className='ring-color-name' >
          <p className='color-text'>{selectedColorKey.charAt(0).toUpperCase() + selectedColorKey.slice(1)} Gold</p>
        </span>

        <div className='star-score' > 
            <StarRating  rating={parseFloat(product.popularityOutOfFive)} />
            <p className='popularity-out-of-five' >{product.popularityOutOfFive}/5</p>
        </div>
       
        
    </div>
  );
};

export default ProductCard;
