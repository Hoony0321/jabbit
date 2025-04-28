import ProductView from './components/ProductView';
import getConsultingProductById from '@/src/client/lib/api/getConsultingProductById';

const Products = async ({ params }: { params: Promise<{ id: string }> }) => {
  const productId = (await params).id;
  const response = await getConsultingProductById(productId);

  const consultingProduct = response.data;
  return <ProductView consultingProduct={consultingProduct} />;
};

export default Products;
