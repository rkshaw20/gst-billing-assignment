import { useSelector } from "react-redux";
import CreateCategoryForm from "../components/CreateCategoryForm";
import CategoryList from "../components/CategoryList";

const CreateCategories = () => {
  const categories = useSelector((state) => state.category.categories);

  return (
    <div className="w-full flex flex-col  gap-2">
      {/* from header  */}
      <div className="text-xl font-semibold p-1 m-1">Create Categories</div>
      {/* form  */}
      <CreateCategoryForm />

      {/* list  */}
      {categories.length > 0 && <CategoryList />}
    </div>
  );
};

export default CreateCategories;
