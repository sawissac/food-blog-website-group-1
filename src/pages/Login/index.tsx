import React from 'react'
import Navbar from '../../components/Navbar'
import Login from '../../components/User'

const UserPage: React.FC<{}> = () => {
  return (
    <React.Fragment>
        <Navbar />
        <Login />
    </React.Fragment>
  )
}

export default UserPage