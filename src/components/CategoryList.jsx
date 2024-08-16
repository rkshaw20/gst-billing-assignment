import { useSelector } from "react-redux";

const CategoryList = () => {
  const categories = useSelector((state) => state.category.categories);
  console.log({ categories });

  return (
    <div className="overflow-x-auto ">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>GST Rate</th>
          </tr>
        </thead>
        <tbody>
          {/* row  */}
          {categories &&
            categories.map((category, i) => {
              return (
                <tr key={category.id}>
                  <th>{i + 1}</th>
                  <td>{category?.name}</td>
                  <td>{category?.gstRate}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
