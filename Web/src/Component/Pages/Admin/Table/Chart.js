import { PieChart } from "react-minimal-pie-chart";

const Chart = (props) => {
  const countEnables = () => {
    let enabled = 0;
    let disabled = 0;
    if (props.data) {
      props.data.forEach((el) => {
        if (el.enabled) enabled += 1;
        else disabled += 1;
      });
    }
    return { enabled: enabled, disabled: disabled };
  };

  return (
    <PieChart
      data={[
        { title: "Enabled", value: countEnables().enabled, color: "green" },
        { title: "Disabled", value: countEnables().disabled, color: "red" },
      ]}
      animate={true}
      animationDuration={200}
      animationEasing={"ease-out"}
      label={({ dataEntry }) =>
        `${
          dataEntry.title === "Enabled"
            ? `활성 / ${dataEntry.percentage.toFixed(1)}%`
            : `비활성 / ${dataEntry.percentage.toFixed(1)}%`
        }`
      }
      labelStyle={{ fontSize: "5px", fontWeight: "600" }}
      radius={50}
      style={{ opacity: "0.9", marginBottom: "150px" }}
      lineWidth={20}
    />
  );
};

export default Chart;
