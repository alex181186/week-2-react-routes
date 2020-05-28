import React from 'react'
import { Link } from 'react-router-dom'
// import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <div id="title">
        Dashboard
      </div>
      <Link to="/dashboard/profile/b1fccc74-1b3b-4035-9644-2494f4f742b7">Go To Profile</Link>
      <Link to="/dashboard/main">Go To Main</Link>
    </div>
  )
}

export default React.memo(Dashboard)