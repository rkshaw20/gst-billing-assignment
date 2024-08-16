import { useSelector } from "react-redux";

const Revenue = () => {
  const bills = useSelector((state) => state.bill.bills);

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const startOfMonth = new Date(currentYear, currentMonth, 1);
  const endOfMonth = new Date(currentYear, currentMonth + 1, 1);

  // total revenue of present day
  const totalRevenueDay = bills
    ?.filter(
      (bill) => new Date(bill.date).toDateString() === today.toDateString()
    )
    .reduce(
      (sum, bill) =>
        sum +
        bill.items.reduce(
          (itemSum, item) => itemSum + item.qty * parseFloat(item.rate),
          0
        ),
      0
    );

  // total revenue of current month

  const totalRevenueMonth = bills
    ?.filter((bill) => {
      const billDate = new Date(bill.date);
      return billDate >= startOfMonth && billDate < endOfMonth;
    })
    .reduce(
      (sum, bill) =>
        sum +
        bill.items.reduce(
          (itemSum, item) => itemSum + item.qty * parseFloat(item.rate),
          0
        ),
      0
    );

  // total revenue of present year

  const totalRevenueYear = bills
    ?.filter((bill) => new Date(bill.date).getFullYear() === currentYear)
    .reduce(
      (sum, bill) =>
        sum +
        bill.items.reduce(
          (itemSum, item) => itemSum + item.qty * parseFloat(item.rate),
          0
        ),
      0
    );

  return (
    <div className="w-full p-2 flex flex-col items-center">
      <div className="text-xl font-semibold p-1 mb-4">Revenue</div>
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Total Revenue by Day</div>
          <div className="stat-value">${totalRevenueDay.toFixed(2)}</div>
          <div className="stat-desc">From today</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Total Revenue by Month</div>
          <div className="stat-value">${totalRevenueMonth.toFixed(2)}</div>
          <div className="stat-desc">From the month</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Total Revenue by Year</div>
          <div className="stat-value">${totalRevenueYear.toFixed(2)}</div>
          <div className="stat-desc">From the year</div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
