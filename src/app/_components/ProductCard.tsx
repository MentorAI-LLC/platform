import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  showArrow: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, showArrow }) => {
  return (
    <div className="relative text-center p-4 transform transition-transform duration-300 hover:scale-110">
      <div className="w-20 h-20 mx-auto mb-4 bg-yellow-500 rounded-full"></div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      {showArrow && (
        <img src="/arrow.svg" alt="arrow" className="arrow" />
      )}
    </div>
  );
};

export default ProductCard;
