import { useState } from "react";
import SalesTable from "../components/SalesTables";
import BillTable from "../components/BillTable";
import { useSelector } from "react-redux";

const Sales = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = useSelector((state) => state.category.categories);

  const handleCategorySelect = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="w-full p-2 ">
      <div className="text-xl font-semibold p-1 mb-4">Sales & Bill</div>

      {/* form to create a bill using product dropdown and category  */}
      <div className="p-1 m-1">
        <div className="flex gap-x-2">
          {/* category select dropdown  */}
          <label className=" w-full max-w-xs">
            <div className="label">
              <span className="label-text">Select Product Category </span>
            </div>
            <select
              className="select select-bordered"
              onChange={(e) => handleCategorySelect(e)}
            >
              <option disabled selected>
                Pick one
              </option>
              {categories &&
                categories?.map((product) => {
                  return <option key={product.id}>{product?.name}</option>;
                })}
            </select>
          </label>
        </div>

        {/* selected category product list table  */}
        {selectedCategory?.length > 0 && (
          <SalesTable selectedCategory={selectedCategory} />
        )}
        <div className="divider mt-10">Generate Bill</div>

        {/* bill generate button and table */}
        <BillTable />
      </div>
    </div>
  );
};

export default Sales;
