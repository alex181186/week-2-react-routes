import React from 'react'
import { Link } from 'react-router-dom'
// import Head from './head'

const DashbordMain = () => {
  return (
    <div>
      <div id="title">
        Main
      </div>
      <Link to="/dashboard/profile/b1fccc74-1b3b-4035-9644-2494f4f742b7">Go To Profile</Link>
      <Link to="/dashboard">Go To Root</Link>
    </div>
  )
}

export default React.memo(DashbordMain)