import { useDispatch, useSelector } from "react-redux";
import { addToSale } from "../store/slices/billSlice";

const SalesTable = ({ selectedCategory }) => {
  const products = useSelector((state) => state.product.products);

  const dispatch = useDispatch();
  const selectedCategoryProduct = products.filter(
    ({ categoryType }) =>
      categoryType.toLowerCase() === selectedCategory?.toLowerCase()
  );
  const handleAddToSales = (product) => {
    dispatch(addToSale(product));
  };
  return (
    <div>
      {selectedCategory && (
        <div className="overflow-x-auto mt-4 ">
          <div className="underline text-center m-1">
            Selected category products list
          </div>
          <table className="table  ">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Product</th>
                <th>Category</th>
                <th>Rate</th>
                <th>Tax</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {selectedCategoryProduct &&
                selectedCategoryProduct.map((product, i) => {
                  return (
                    <tr key={product.id}>
                      <th>{i + 1}</th>
                      <td>{product?.name}</td>
                      <td>{product?.categoryType}</td>
                      <td>{product?.rate}</td>
                      <td>{product?.gstRate}</td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-xs"
                          onClick={() => handleAddToSales(product)}
                        >
                          Add to Sale
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default SalesTable;
