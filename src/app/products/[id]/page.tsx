import { BASE_URL } from '@/src/client/constants/API';
import ProductView from './components/ProductView';

const Products = async ({ params }: { params: Promise<{ id: string }> }) => {
  const productId = (await params).id;

  const response = await fetch(`${BASE_URL}/products/${productId}`, {
    method: 'GET',
    cache: 'no-store',
  });

  const productData = await response.json();

  return <ProductView productData={productData} />;
};

export default Products;
