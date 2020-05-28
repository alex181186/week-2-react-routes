import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import Head from './head'

const DashboardProfile = () => {
  const { user } = useParams()
  return (
    <div>
      <div id="title">
        Profile
      </div>
      <div id="username">
        This is component {user}
      </div>
      <Link to="/dashboard">Go To Root</Link>
      <Link to="/dashboard/main">Go To Main</Link>
    </div>
  )
}

export default React.memo(DashboardProfile)