import React from 'react'
import Cards from './Cards'
import SideBar from './SideBar'

const Dashboard = () => {
  return (
    <div className='dashboard'>
    <div className='sidebar'>
      <SideBar/>
    </div>
    <div className='cards_group'>
      <Cards/>
    </div>
    </div>
  )
}

export default Dashboard