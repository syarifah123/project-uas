import { FaShoppingCart, FaTruck, FaShoppingBag } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import Chart from "react-apexcharts";

export default function Dashboard() {
  return (
<div id="dashboard-container" className="bg-[#1B1B2F] min-h-screen text-white">      <PageHeader
        title={<span className="dark:text-white">Statika Grafik Penjualan</span>}
        breadcrumb={["Admin Panel Kuliner"]}
      />

      {/* Card */}
      <div className="p-5 grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
          <div className="absolute left-4 top-3 text-white/20 text-7xl">
            <FaTruck />
          </div>
          <div className="relative z-10 text-right">
            <h2 className="text-md font-semibold">Shipped orders</h2>
            <p className="text-4xl font-bold">67</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-rose-500 to-rose-400 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
          <div className="absolute left-4 top-3 text-white/20 text-7xl">
            <FaShoppingCart />
          </div>
          <div className="relative z-10 text-right">
            <h2 className="text-md font-semibold">Pending orders</h2>
            <p className="text-4xl font-bold">09</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-400 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
          <div className="absolute left-4 top-3 text-white/20 text-7xl">
            <FaShoppingBag />
          </div>
          <div className="relative z-10 text-right">
            <h2 className="text-md font-semibold">New orders</h2>
            <p className="text-4xl font-bold">35</p>
          </div>
        </div>
      </div>

      {/* Layout  */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 px-5 pb-5">
        {/* Kotak Inbox dan Activity */}
        <div className="space-y-4">
          <div className="bg-base-100 rounded-2xl dark:text-white p-5">
            <div className="flex justify-between items-center mb-3">
              <div>
                <p className="text-lg font-bold">Inbox</p>
                <p className="text-xs text-gray-400">Group: Support</p>
              </div>
              <a href="#" className="text-indigo-400 text-sm">
                View details
              </a>
            </div>
            <div className="divide-y divide-blue-700">
              <div className="flex justify-between py-2">
                <p>Waiting for order#12345</p>
                <span className="text-sm text-gray-400">4:39</span>
              </div>
              <div className="flex justify-between py-2">
                <p>Customer support id#22234</p>
                <span className="text-sm text-gray-400">11:07</span>
              </div>
            </div>
          </div>

          <div className="bg-base-100 rounded-2xl dark:text-white p-5">
            <div className="flex justify-between items-center mb-3">
              <p className="text-lg font-bold">Recent Activity</p>
              <a href="#" className="text-indigo-400 text-sm">
                View all
              </a>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Confirm order update</span>
                </div>
                <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  URGENT
                </span>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>Finish shipping update</span>
                </div>
                <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  URGENT
                </span>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full border border-white"></div>
                  <span>Create new order</span>
                </div>
                <span className="bg-emerald-500 dark:text-white text-xs font-bold px-2 py-1 rounded">
                  NEW
                </span>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full border border-gray-400"></div>
                  <span>Update payment report</span>
                </div>
                <span className="bg-gray-300 text-black text-xs font-bold px-2 py-1 rounded">
                  DEFAULT
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Grafik Sales */}
        <div className="bg-base-100 dark:text-white rounded-2xl p-5">
          <h3 className="text-lg font-bold mb-1">Today's Sales</h3>
          <p className="text-sm text-gray-400 mb-5">30 Sept 2021</p>
          <Chart
            options={{
              chart: { id: "sales-chart", toolbar: { show: false } },
              xaxis: {
                categories: [
                  "00",
                  "01",
                  "02",
                  "03",
                  "04",
                  "05",
                  "06",
                  "07",
                  "08",
                  "09",
                ],
              },
              colors: ["#3B82F6", "#EC4899"],
              stroke: { curve: "smooth" },
              legend: {
                show: true,
                labels: { colors: "#fff" },
              },
              tooltip: { theme: "dark" },
            }}
            series={[
              { name: "Today", data: [10, 15, 25, 35, 10, 5, 30, 38, 32, 28] },
              {
                name: "Yesterday",
                data: [12, 10, 20, 30, 20, 15, 25, 31, 25, 27],
              },
            ]}
            type="line"
            height={300}
          />
        </div>
        {/* Grafik Bar Chart 1 */}
        <div className="bg-base-100 dark:text-white rounded-2xl p-5">
          <h3 className="text-lg font-bold mb-1">Monthly Orders</h3>
          <p className="text-sm text-gray-400 mb-5">Periode: Jan - Jun</p>
          <Chart
            options={{
              chart: { type: "bar", toolbar: { show: false } },
              xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                labels: { style: { colors: "#fff" } },
              },
              yaxis: { labels: { style: { colors: "#fff" } } },
              colors: ["#f97316"],
              plotOptions: {
                bar: { borderRadius: 4, horizontal: false },
              },
              tooltip: { theme: "dark" },
              legend: { labels: { colors: "#fff" } },
            }}
            series={[{ name: "Orders", data: [120, 150, 180, 90, 200, 170] }]}
            type="bar"
            height={300}
          />
        </div>
        {/* Grafik Bar Chart 2 */}
        <div className="bg-base-100 dark:text-white rounded-2xl p-5">
          <h3 className="text-lg font-bold mb-1">Monthly Orders</h3>
          <p className="text-sm text-gray-400 mb-5">Periode: jul - des</p>
          <Chart
            options={{
              chart: { type: "bar", toolbar: { show: false } },
              xaxis: {
                categories: ["jul", "agus", "sept", "okt", "nov", "des"],
                labels: { style: { colors: "#fff" } },
              },
              yaxis: { labels: { style: { colors: "#fff" } } },
              colors: ["#f97316"],
              plotOptions: {
                bar: { borderRadius: 4, horizontal: false },
              },
              tooltip: { theme: "dark" },
              legend: { labels: { colors: "#fff" } },
            }}
            series={[{ name: "Orders", data: [150, 120, 100, 140, 180, 160] }]}
            type="bar"
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
