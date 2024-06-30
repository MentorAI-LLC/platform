import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  title: string;
  description: string;
}

const products: Product[] = [
  { id: 1, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
  { id: 2, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
  { id: 3, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
  { id: 4, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
  { id: 5, title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
];

const ProductSection: React.FC = () => {
  return (
    <div className="text-center p-12 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Product</h2>
      <p className="text-lg mb-20 mx-auto">A state-of-the-art AI-powered educational platform designed to create personalized learning roadmaps for tech students.</p>
      <div className="flex justify-center gap-6">
        {products.map((product, index) => (
          <ProductCard key={product.id} title={product.title} description={product.description} showArrow={index !== products.length - 1}/>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
