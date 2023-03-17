import React from 'react'
import Navbar from '../../components/Navbar'
import MainVirtual from '../../components/MainVirtual'
import BlogCard from '../../components/BlogCard'
import Footer from '../../components/Footer'

const HomePage = () => {
  return (
    <>
        <Navbar />
        <MainVirtual />
        <BlogCard />
        <Footer />
    </>
  )
}

export default HomePage