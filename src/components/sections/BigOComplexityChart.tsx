import Section from "../Section";
import Chart from "../../assets/SVG/Chart.svg";

export default function BigOComplexityChart() {
  const complexityLegends = [
    { name: "Horrible", color: "bg-red" },
    { name: "Bad", color: "bg-orange" },
    { name: "Fair", color: "bg-yellow" },
    { name: "Good", color: "bg-green-400" },
    { name: "Excellent", color: "bg-green-500" },
  ];
  return (
    <>
      <Section title="Big O Complexity Chart">
        <div className="bg-white-200 p-3">
          <div className="flex flex-wrap justify-center gap-3 pb-3 text-center">
            {complexityLegends.map((legend, index) => (
              <div key={index} className={`${legend.color} rounded px-3 py-1 text-sm`}>
                {legend.name}
              </div>
            ))}
          </div>

          <img src={Chart} alt="" />
        </div>
      </Section>
    </>
  );
}
