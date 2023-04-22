import React, { useEffect } from 'react';
import moment from 'moment'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LabelList
} from "recharts";
import { getBarChart } from '../../services/home';

const data = [
    {
        name: "04/01",
        uv: 4000,
        amt: 2400
    },
    {
        name: "04/02",
        uv: 3000,
        amt: 2210
    },
    {
        name: "04/03",
        uv: 2000,
        amt: 2290
    },
    {
        name: "04/04",
        uv: 2780,
        amt: 2000
    },
    {
        name: "04/5",
        uv: 18,
        amt: 2181
    },
    {
        name: "04/06",
        uv: 2390,
        amt: 2500
    },
    {
        name: "04/07",
        uv: 3490,
        amt: 2100
    }
];


const renderCustomizedLabel = (props) => {
    const { x, y, width, value } = props;
    const radius = 10;

    return (
        <g>
            <circle cx={x + width / 2} cy={y - radius} fill="#8884d8" />
            <text
                x={x + width / 2}
                y={y - radius}
                //   fill="#fff"
                textAnchor="middle"
                dominantBaseline="middle"

            >
                {/* {value.split(" ")[1]} */}
                {value}
            </text>
        </g>
    );
};

const HomeBarChart = () => {
    const [income, setIncome] = React.useState([])
    const [expense, setExpense] = React.useState([])

    console.log(income)

    const GetBarData = async () => {
        const request = await getBarChart()
        const response = await request.data

        if (response.status === 200) {
            setIncome(response.result?.income)
            setExpense(response.result?.expense)
        }
    }

    useEffect(() => {
        GetBarData()
    }, [])



    return (
        <BarChart
            width={350}
            height={300}
            data={income}
            margin={{
                top: 20,
                // right: 30,
                left: 0,
                bottom: 5,

            }}
        >

            <CartesianGrid strokeDasharray="0 3" />
            <XAxis dataKey={moment(data.createdDate).format("DD/MM")} />
            <YAxis hide />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="red" minPointSize={5} barSize={25}>
                <LabelList dataKey="total" content={renderCustomizedLabel} />
            </Bar>
        </BarChart>
    );
}

export default HomeBarChart;
