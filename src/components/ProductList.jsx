import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <div className="overflow-x-auto ">
      {/* {products} */}
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Product</th>
            <th>Category</th>
            <th>Rate</th>
            <th>Tax</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product, i) => {
              return (
                <tr key={product.id}>
                  <th>{i + 1}</th>
                  <td>{product?.name}</td>
                  <td>{product?.categoryType}</td>
                  <td>{product?.rate}</td>
                  <td>{product?.gstRate}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default ProductList;
