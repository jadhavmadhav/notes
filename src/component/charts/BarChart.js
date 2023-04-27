import React, { useEffect, useMemo, useState } from 'react';
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
    const [allData, setAllData] = useState([])
    const [barData, setBarData] = useState()
    const [stickColor, setStickColor] = useState("red")

    useMemo(() => {
        setBarData(allData?.expense)
    }, [allData])

    const GetBarData = async () => {
        const request = await getBarChart()
        const response = await request.data

        if (response.status === 200) {
            setAllData(response.result)
        }
    }

    useEffect(() => {
        GetBarData()
    }, [])

    const handleButton = (e) => {
        if (e.target.value === "income") {
            setBarData(allData?.income)
            setStickColor("green")
        } else {
            setBarData(allData?.expense)
            setStickColor("red")

        }

    }


    return (
        <div>
            <div className='d-flex justify-content-between ' onChange={handleButton}>
                <span>{allData?.startDate + " - " + allData?.lastDate} </span>
                <div className='d-flex'>
                    <div>
                        <input type='radio' id='ex' name='expenseType' value='expense' defaultChecked />
                        <label htmlFor='ex' className='ms-1'>Expense</label>
                    </div>
                    <div className='ms-2'>
                        <input type='radio' id='in' name='expenseType' value='income' />
                        <label htmlFor='in' className='ms-1' >Income</label>
                    </div>
                </div>
            </div>
            <BarChart
                width={350}
                height={300}
                data={barData}
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
                <Bar dataKey="total" fill={stickColor} minPointSize={5} barSize={25}>
                    <LabelList dataKey="total" content={renderCustomizedLabel} />
                </Bar>
            </BarChart>
        </div>

    );
}

export default HomeBarChart;
