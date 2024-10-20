import React from 'react'
import Navbar from '../Components/Navbar'
import UserTable from '../Components/Table'
import WeatherApp from '../Components/WeatherInput'
// import Chart from '../Components/Chart'

const Dashboard = () => {
  return (
    <>
    <Navbar />
    <UserTable />
    <WeatherApp />
    {/* <Chart /> */}
    </>
  )
}

export default Dashboard