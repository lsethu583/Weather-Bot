import React from 'react'
import Navbar from '../Components/Navbar'
import UserTable from '../Components/Table'
import WeatherApp from '../Components/WeatherInput'


const Dashboard = () => {
  return (
    <>
    <Navbar />
    <UserTable />
    <WeatherApp />
    </>
  )
}

export default Dashboard