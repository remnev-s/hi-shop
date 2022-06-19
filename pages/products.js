import App from 'next/app';
import { HeaderContent } from '../components/blocksPage/headerContent/headerContent';
import { AllProducts } from '../components/products/allproducts';

const Products = () => {
  return (
    <>
      <AllProducts sectionDistance={true} />
    </>
  );
};

export default Products;
