import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((point) => {
    return point.value;
  }); // transform the data point object to an array of numbers

  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
            key={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
