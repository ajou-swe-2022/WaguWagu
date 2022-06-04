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
        {
          title: "Enabled",
          value: countEnables().enabled - props.occupiedCount,
          color: "green",
        },
        { title: "Disabled", value: countEnables().disabled, color: "#c4c4c4" },
        { title: "Occupied", value: props.occupiedCount, color: "red" },
      ]}
      label={({ dataEntry }) => {
        if (dataEntry.title === "Enabled")
          return `활성 / ${dataEntry.value} 석`;
        else if (dataEntry.title === "Disabled")
          return `비활성 / ${dataEntry.value} 석`;
        else return `점유 / ${dataEntry.value} 석`;
      }}
      labelPosition={60}
      labelStyle={{ fontSize: "4.5", fontWeight: "600", margin: "20px" }}
      radius={50}
      style={{ opacity: "0.9", marginBottom: "150px" }}
      lineWidth={20}
      paddingAngle={10}
    />
  );
};

export default Chart;
