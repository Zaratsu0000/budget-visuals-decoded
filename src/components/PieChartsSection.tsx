import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const PieChartsSection = () => {
  const revenueData = [
    { name: "Income Tax", value: 8.5, color: "#FF9933" },
    { name: "Corporate Tax", value: 7.2, color: "#138808" },
    { name: "GST", value: 5.8, color: "#384B70" },
    { name: "Customs Duty", value: 2.1, color: "#FF6B35" },
    { name: "Excise Duty", value: 1.8, color: "#4ECDC4" },
    { name: "Borrowings", value: 0.6, color: "#45B7D1" },
  ];

  const expenditureData = [
    { name: "Defence", value: 6.2, color: "#FF9933" },
    { name: "Infrastructure", value: 4.8, color: "#138808" },
    { name: "Education", value: 3.2, color: "#384B70" },
    { name: "Health", value: 2.1, color: "#FF6B35" },
    { name: "Agriculture", value: 1.8, color: "#4ECDC4" },
    { name: "Social Security", value: 1.0, color: "#45B7D1" },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border">
          <p className="font-semibold">{payload[0].name}</p>
          <p className="text-sm text-muted-foreground">
            ₹{payload[0].value} Lakh Crores
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="revenue" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Budget Breakdown</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive analysis of revenue sources and expenditure allocation for the Union Budget 2025
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Revenue Sources */}
          <div className="bg-card rounded-xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">
              Revenue Sources
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {revenueData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 space-y-3">
              {revenueData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold">₹{item.value}L Cr</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expenditure Breakdown */}
          <div className="bg-card rounded-xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">
              Expenditure Allocation
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenditureData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {expenditureData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 space-y-3">
              {expenditureData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold">₹{item.value}L Cr</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PieChartsSection;