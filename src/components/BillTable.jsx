import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import { v4 as uuid } from "uuid";
import { addToBill, clearSales } from "../store/slices/billSlice";
import { showSuccessToast } from "../utils/toast";

const BillSchema = z.object({
  billDate: z.string().nonempty("Bill Date is required"),
});
const BillTable = () => {
  const sales = useSelector((state) => state.bill.sales);
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BillSchema),
    defaultValues: {
      billDate: "",
    },
  });
  const handleGenerateBill = (data) => {
    if (sales.length > 0) {
      const bill = { id: uuid(), date: data.billDate, items: [...sales] };
      dispatch(addToBill(bill));
      showSuccessToast("Bill generated! Go to revenue");
      dispatch(clearSales());
      reset();
    }
  };

  const isSalesEmpty = sales.length === 0;
  return (
    <div className="m-4 flex flex-col justify-center">
      <form onSubmit={handleSubmit(handleGenerateBill)}>
        <div className="flex flex-col  gap-y-4 ">
          {" "}
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Bill Date</span>
              </div>
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...register("billDate")}
              />

              {errors.billDate && (
                <div className="label">
                  <span className="label-text-alt text-red-500">
                    {errors.billDate.message}
                  </span>
                </div>
              )}
            </label>{" "}
          </div>
          <div>
            <button type="submit" className="btn" disabled={isSalesEmpty}>
              Generate Bill
            </button>
          </div>
        </div>
      </form>
      {sales.length > 0 && (
        <div className="overflow-x-auto mt-4 sales-table">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Product</th>
                <th>Category</th>
                <th>Rate</th>
                <th>Qty</th>
                <th>Tax</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((product, i) => {
                return (
                  <tr key={product?.id}>
                    <th>{i + 1}</th>
                    <td>{product?.name}</td>
                    <td>{product?.categoryType}</td>
                    <td>{product?.rate}</td>
                    <td>{product?.qty}</td>
                    <td>{product?.gstRate}</td>
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
export default BillTable;
