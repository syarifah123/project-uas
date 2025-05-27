import {
  FaShoppingCart,
  FaTruck,
  FaBan,
  FaDollarSign,
  FaShoppingBag,
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import Chart from "react-apexcharts";

export default function Dashboard() {
  return (
    <div id="dashboard-container">
      <PageHeader
        title="Statika Grafik Penjualan"
        breadcrumb={["Admin Panel Kuliner"]}
      >
        <button className="bg-blue-600 text-white px-3 py-1 rounded">
          Add
        </button>
        <button className="bg-green-600 text-white px-3 py-1 rounded">
          Export
        </button>
        <button className="bg-gray-600 text-white px-3 py-1 rounded">
          Back
        </button>
      </PageHeader>

      {/* CARD COUNT */}
      <div
        id="dashboard-grid"
        className="p-5 grid sm:grid-cols-1 md:grid-cols-3 gap-4"
      >
        {/* Shipped Orders */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
          <div className="absolute left-4 top-3 text-white/20 text-7xl">
            <FaTruck />
          </div>
          <div className="relative z-10 text-right">
            <h2 className="text-md font-semibold">Shipped orders</h2>
            <p className="text-4xl font-bold">67</p>
          </div>
        </div>

        {/* Pending Orders */}
        <div className="bg-gradient-to-r from-rose-500 to-rose-400 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
          <div className="absolute left-4 top-3 text-white/20 text-7xl">
            <FaShoppingCart />
          </div>
          <div className="relative z-10 text-right">
            <h2 className="text-md font-semibold">Pending orders</h2>
            <p className="text-4xl font-bold">09</p>
          </div>
        </div>

        {/* New Orders */}
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

      {/* CARD COUNT */}
      {/* <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4"> */}

      {/* Orders */}
      {/* <div id="count-orders" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="orders-icon" className="bg-hijau rounded-full p-4">
            <FaShoppingCart className="text-white" />
          </div>
          <div id="orders-info" className="flex flex-col">
            <span id="orders-count" className="text-2xl font-bold">75</span>
            <span id="orders-text" className="text-gray-400">Total Orders</span>
          </div>
        </div> */}

      {/* Delivered */}
      {/* <div id="count-delivered" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="delivered-icon" className="bg-hijau rounded-full p-4">
            <FaTruck className="text-white" />
          </div>
          <div id="delivered-info" className="flex flex-col">
            <span id="delivered-count" className="text-2xl font-bold">175</span>
            <span id="delivered-text" className="text-gray-400">Total Delivered</span>
          </div>
        </div> */}

      {/* Canceled */}
      {/* <div id="count-canceled" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="canceled-icon" className="bg-hijau rounded-full p-4">
            <FaBan className="text-white" />
          </div>
          <div id="canceled-info" className="flex flex-col">
            <span id="canceled-count" className="text-2xl font-bold">40</span>
            <span id="canceled-text" className="text-gray-400">Total Canceled</span>
          </div>
        </div>
 */}
      {/* Revenue */}
      {/* <div id="count-revenue" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
          <div id="revenue-icon" className="bg-hijau rounded-full p-4">
            <FaDollarSign className="text-white" />
          </div>
          <div id="revenue-info" className="flex flex-col">
            <span id="revenue-amount" className="text-2xl font-bold">Rp.128</span>
            <span id="revenue-text" className="text-gray-400">Total Revenue</span>
          </div>
        </div> */}
      {/* </div> */}

      {/* CHARTS */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 px-5 pb-5">
        {/* Bar Chart 1 */}
        <div className="bg-[#FFF1D5] rounded-xl p-5 shadow-md">
          <Chart
            options={{
              chart: { type: "bar", height: 350 },
              title: { text: "Bar Chart 1", style: { color: "#fff" } },
              xaxis: {
                categories: [
                  "2005",
                  "2006",
                  "2007",
                  "2008",
                  "2009",
                  "2010",
                  "2011",
                  "2012",
                  "2013",
                  "2014",
                  "2015",
                ],
                labels: { style: { colors: "#fff" } },
              },
              yaxis: { labels: { style: { colors: "#fff" } } },
              colors: ["#f97316"],
              theme: { mode: "dark" },
            }}
            series={[
              {
                name: "Data",
                data: [80, 40, 60, 20, 45, 30, 80, 90, 85, 90, 30],
              },
            ]}
            type="bar"
            height={300}
          />
        </div>

        {/* Bar Chart 2 */}
        <div className="bg-[#FFF1D5] rounded-xl p-5 shadow-md">
          <Chart
            options={{
              chart: { type: "bar", height: 350 },
              title: { text: "Bar Chart 2", style: { color: "#fff" } },
              xaxis: {
                categories: ["06", "07", "08", "09", "10"],
                labels: { style: { colors: "#fff" } },
              },
              yaxis: { labels: { style: { colors: "#fff" } } },
              colors: ["#f97316", "#60a5fa"],
              theme: { mode: "dark" },
              legend: { labels: { colors: "#fff" } },
            }}
            series={[
              { name: "Income", data: [400, 500, 800, 200, 650] },
              { name: "Expenses", data: [150, 800, 100, 50, 250] },
            ]}
            type="bar"
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
