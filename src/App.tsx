import { useEffect, useState } from 'react';
import ProductList from './components/ProductList/ProductList';
import Filters from './components/Filters/filter';

interface Product {
  name: string;
  popularityScore: number;
  weight: number;
  images: { [color: string]: string };
  price: string;
  popularityOutOfFive: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    minPopularity: '',
    maxPopularity: '',
    sortBy: '',
    sortOrder: '',
  });

  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, val]) => {
      if (val) params.append(key, val);
    });

    fetch(`https://renart-frontend-backend-production.up.railway.app/products?${params.toString()}`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(console.error);
  }, [filters]);

  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
