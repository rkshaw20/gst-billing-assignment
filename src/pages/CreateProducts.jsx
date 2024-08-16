import { useSelector } from "react-redux";
import CreateProductForm from "../components/CreateProductForm";
import ProductList from "../components/ProductList";

const CreateProducts = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <div className="w-full flex flex-col gap-2">
      {/* from header  */}
      <div className="text-xl font-semibold p-1 m-1">Create Products</div>

      {/* form  */}
      <CreateProductForm />

      {/* list  */}
      {products.length > 0 && <ProductList />}
    </div>
  );
};

export default CreateProducts;
