"use client";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
} from "chart.js";
import styles from './LineChart.module.scss'
import {Line} from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

interface LineChartProps {
    data: any
}

const LineChart = ({data}: LineChartProps) => {
    return (
        <div className={styles.chart}>
            {data && <Line
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: 'Custom Chart Title'
                        }
                    }
                }}
                data={{
                    labels: data.x,
                    datasets: [
                        {
                            data: data.y,
                            backgroundColor: "orange",
                        },
                    ],
                }}
            />}
        </div>
    );
};
export default LineChart;