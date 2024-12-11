import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Particles from 'react-tsparticles';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock API request to get products
    axios.get('/api/products').then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen">
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: {
              type: 'circle',
              stroke: { width: 0, color: '#000000' },
            },
            opacity: { value: 0.5, random: true, animation: { enable: true, speed: 1, minimumValue: 0.1 } },
            size: { value: 3, random: true, animation: { enable: true, speed: 4, minimumValue: 0.1 } },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              outModes: { default: 'out' },
            },
          },
          interactivity: {
            detectsOn: 'window',
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
        }}
      />
      <div className="container mx-auto p-6 text-white">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our Vibrant E-commerce Site</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
