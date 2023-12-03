import { useLoaderData } from "react-router-dom";
import { GlobalContext } from "../../layout/MainLayout";
import { useContext } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const { donated } = useContext(GlobalContext);

  const items = useLoaderData();
  // const totalAmount = items.reduce(
  //   (total, project) => total + project.donationAmount,
  //   0
  // );
  // const totalDonated = donated.reduce(
  //   (total, project) => total + project.donationAmount,
  //   0
  // );
  // console.log(totalAmount, totalDonated, (totalDonated / totalAmount) * 100);
  const data = [
    {
      name: "Total Donation",
      value: 100 - (donated.length / items.length) * 100,
    },
    { name: "TOtal Donated ", value: (donated.length / items.length) * 100 },
  ];
  return (
    <div className="h-[280px] md:h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex font-semibold md:flex-row flex-col justify-center items-center text-center gap-6 mt-24 md:mt-0 md:gap-14">
        <div className="flex-1 flex gap-4 justify-end items-center ">
          <p>Your Donation</p>
          <div className="bg-[#00C49F] h-3 w-24 rounded"></div>
        </div>
        <div className="flex-1 flex gap-4 justify-start items-center ">
          <p>Total Donation</p>
          <div className="bg-[#FF444A] h-3 w-24 rounded"></div>
        </div>
      </div>
    </div>
  );
};
const COLORS = ["#FF444A", "#00C49F"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default Statistics;
