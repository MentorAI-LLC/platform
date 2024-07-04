import React from 'react';
import ProductCard from '../components/ProductCard';
import Section, { Description, Title } from '@/components/ui/Section';

interface Product {
  id: number;
  title: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Sign In',
    description: 'Sign In or Sign Up with your E-mail to start our platform.',
  },
  {
    id: 2,
    title: 'Discover',
    description:
      'Dicover how you can interact with the platform or book a ticket in one of our webinars to learn more.',
  },
  {
    id: 3,
    title: 'Engage',
    description:
      'Engage with the community, Share content or ask about anything you want.',
  },
  {
    id: 4,
    title: 'Use our Currency',
    description: 'Use our currency system to buy content or Earn money.',
  },
  {
    id: 5,
    title: 'Our AI model',
    description:
      'Use our currency system to interact with our AI model and generate whatever content you want.',
  },
];

const ProductSection: React.FC = () => {
  return (
    <Section name="product" className="text-center p-12 bg-gray-50">
      <Title>Product</Title>
      <Description className="text-lg mb-20 mx-auto">
        A state-of-the-art AI-powered educational platform designed to create
        personalized learning roadmaps for tech students.
      </Description>
      <div className="flex justify-center gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            showArrow={index !== products.length - 1}
          />
        ))}
      </div>
    </Section>
  );
};

export default ProductSection;
