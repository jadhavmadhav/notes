import React, { useState } from 'react';
import '../styles/Analysis.css'
import calendarImg from '../assets/calendar.png'
import moment from 'moment';
import FilterListing from '../component/listing/FilterListing';



const Analysis = () => {
    const [daily, setDaily] = useState(true)
    const [weekly, setWeekly] = useState(false)
    const [monthly, setMonthly] = useState(false)
    const [yearly, setYearly] = useState(false)
    const [all, setAll] = useState(false)

    const [date, setDate] = useState(Number(moment(currDate).format("DD")))
    const [month, setMonth] = useState(Number(moment(currDate).format("MM")))
    const [year, setYear] = useState(Number(moment(currDate).format("YYYY")))

    console.log("Analysis page")


    const currDate = new Date()

    // const date = moment(currDate).format("DD")
    // const month = moment(currDate).format("MM")
    // const Year = moment(currDate).format("YYYY")

    var cdate = new Date();
    cdate.setMonth(month - 1)
    cdate.setYear(year)
    var firstDay = moment(new Date(cdate.getFullYear(), cdate.getMonth(), 1)).format('DD');
    var lastDay = moment(new Date(cdate.getFullYear(), cdate.getMonth() + 1, 0)).format('DD');
    console.log(firstDay, lastDay)

    const handlMoveDate = () => {
        if (date <= lastDay - 1 && month <= 12) {
            setDate(date + 1)
        } else if (date >= lastDay - 1 && month <= 12) {
            setMonth(month + 1)
            setDate(1)
        } else {
            setYear(year + 1)
            setMonth(1)
            setDate(1)
        }
    }

    const handlPreviouseDate = () => {
        if (date > 1 && month > 1) {
            setDate(date - 1)
        } else if (date <= 1) {
            setDate(lastDay)
            let date = new Date() 
            setMonth(month - 1)

        } else {
            setYear(year - 1)
            setMonth(13)
            setDate(32)
        }

    }

    const handleDailyBtn = () => {
        setDaily(true)
        setWeekly(false)
        setMonthly(false)
        setYearly(false)
        setAll(false)

    }

    const handleWeeklyBtn = () => {
        setDaily(false)
        setWeekly(true)
        setMonthly(false)
        setYearly(false)
        setAll(false)
    }

    const handleMonthlyBtn = () => {
        setDaily(false)
        setWeekly(false)
        setMonthly(true)
        setYearly(false)
        setAll(false)
    }

    const handleYearlyBtn = () => {
        setDaily(false)
        setWeekly(false)
        setMonthly(false)
        setYearly(true)
        setAll(false)
    }

    const handleAllBtn = () => {
        setDaily(false)
        setWeekly(false)
        setMonthly(false)
        setYearly(false)
        setAll(true)
    }
    const ActiveBtn = {
        borderBottom: '3px solid green',
        color: 'black'
    }

    const Diactive = {
        borderBottom: 'none'
    }
    return (
        <div className='analysis-container'>
            <div className='a-filter-bottons'>
                <div style={daily ? ActiveBtn : Diactive} className='afb-btn' onClick={handleDailyBtn}>Daily</div>
                <div style={weekly ? ActiveBtn : Diactive} className='afb-btn' onClick={handleWeeklyBtn}>Weekly</div>
                <div style={monthly ? ActiveBtn : Diactive} className='afb-btn' onClick={handleMonthlyBtn}>Monthly</div>
                <div style={yearly ? ActiveBtn : Diactive} className='afb-btn' onClick={handleYearlyBtn}>Yearly</div>
                <div style={all ? ActiveBtn : Diactive} className='afb-btn' onClick={handleAllBtn}>All</div>
            </div>

            <div className='a-filter-section'>
                <span onClick={handlPreviouseDate}>&larr;</span>
                <div className='afs-dateNtype'>
                    <h5> Fri, {year}-{month}-{date} <img className='cld-image' src={calendarImg} /></h5>
                    <h5 style={{ color: 'rgb(236, 4, 4)' }}>Expense : 1250.00</h5>
                </div>
                <span onClick={handlMoveDate}> &rarr;</span>
            </div>

            <div className='a-radio-buttons'>
                <div className='ar-btn'>
                    <input type='radio' id='atv' name='type' checked value='activity' />
                    <label htmlFor='atv'>Activity</label>
                </div>
                <div className='ar-btn'>
                    <input type='radio' id='ctg' name='type' value='catagort' />
                    <label htmlFor='ctg'>Catagory View</label>
                </div>
            </div>

            <FilterListing />
        </div>
    );
}

export default Analysis;
