import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { addProduct } from "../store/slices/productSlice";
import { v4 as uuid } from "uuid";

const productSchema = z.object({
  name: z.string().min(1, "Category name is required"),
  rate: z.string().min(1, "Rate is required"),
  categoryType: z.string().min(1, "Category Type is required"),
});

const CreateProductForm = () => {
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data) => {
    const matchingCategory = categories.find(
      (category) => category.name === data.categoryType
    );
    const gstRate = matchingCategory ? matchingCategory.gstRate : null;
    dispatch(addProduct({ id: uuid(), ...data, gstRate }));
    reset();
  };

  return (
    <div className="w-full max-w-md  p-4 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* product name  */}
        <div className="mb-3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name </span>
            </div>{" "}
            <input
              type="text"
              placeholder="Type name"
              className="input input-bordered w-full max-w-xs"
              {...register("name")}
            />
            {errors.name && (
              <div className="label">
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              </div>
            )}
          </label>
        </div>

        {/* product rate  */}
        <div className="mb-3">
          <label className="form-control w-full max-w-xs ">
            <div className="label">
              <span className="label-text">Rate</span>
            </div>{" "}
            <input
              type="number"
              placeholder="Type rate"
              className="input input-bordered w-full max-w-xs"
              {...register("rate")}
            />
            {errors.rate && (
              <div className="label">
                <span className="label-text-alt text-red-500">
                  {errors.rate.message}
                </span>
              </div>
            )}
          </label>
        </div>

        {/* product category  */}

        <div className="mb-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Category Type </span>
            </div>
            <select
              className="select select-bordered"
              {...register("categoryType")}
              defaultValue=""
            >
              <option disabled selected>
                Pick type
              </option>

              {categories &&
                categories.map((category) => (
                  <option key={category.id} value={category?.name}>
                    {category?.name}
                  </option>
                ))}
            </select>
          </label>
          {errors.categoryType && (
            <div className="label">
              <span className="label-text-alt text-red-500">
                {errors.categoryType.message}
              </span>
            </div>
          )}
        </div>

        <button type="submit" className="btn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default CreateProductForm;
