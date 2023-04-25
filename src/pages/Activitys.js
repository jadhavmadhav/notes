import React, { memo, useEffect, useState } from 'react';
import Listing from '../component/listing/Listing';
import { useLocation, useParams } from 'react-router-dom';
import { getExpenseAnalyse } from '../services/home';

const Activitys = () => {
    const [activity, setActivity] = useState([])
    console.log("Activitys page")

    const data = useLocation()
    const fromDate = data?.state?.sdate
    const toDate = data?.state?.ldate
    const all = data?.state?.all

    const getAnalysesExpenses = async () => {
        try {
            const request = await getExpenseAnalyse(fromDate && fromDate, toDate && toDate, all && all)
            const response = await request.data
            setActivity(response.result)
        } catch (error) {

        }
    }
    useEffect(() => {
        getAnalysesExpenses()
    }, [])
    return (
        <div>
            <Listing Data={activity} />
        </div>
    );
}

export default memo(Activitys);
