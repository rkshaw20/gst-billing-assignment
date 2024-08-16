import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { addCategory } from "../store/slices/categorySlice";
import { v4 as uuid } from "uuid";
import { showErrorToast } from "../utils/toast";

const categorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
  gstRate: z
    .number()
    .min(0, "GST rate must be at least 0%")
    .max(100, "GST rate must be less than or equal to 100%"),
});

const CreateCategoryForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(categorySchema),
  });

  const onSubmit = (data) => {
    // if category already present then do not create it again
    const isDuplicate = categories.some(
      (category) => category.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isDuplicate) {
      showErrorToast("Category already present");
    } else {
      dispatch(addCategory({ id: uuid(), ...data }));
    }
  };

  return (
    <div className="w-full max-w-md   p-4  ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Category Name </span>
            </div>
            <select
              className="select select-bordered"
              {...register("name")}
              defaultValue="Food"
            >
              <option disabled>Select category</option>
              <option>Food</option>
              <option>Footwear </option>
              <option>Electronics </option>
              <option>Others </option>
            </select>
          </label>
          {errors.name && (
            <div className="label">
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">GST Rate (%) </span>
            </div>
            <select
              className="select select-bordered"
              {...register("gstRate", { valueAsNumber: true })}
              defaultValue={5}
            >
              <option disabled>Select GST Rate</option>
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
          </label>
        </div>

        <button type="submit" className="btn">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default CreateCategoryForm;
