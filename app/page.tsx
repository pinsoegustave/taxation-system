import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hello from '@/components/Hello'
import Service from '@/components/Service'
import Work from '@/components/Work'
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
    <Hello />
    <About />
    <Service />
    <Work />
    <Footer />
    </>
  )
}

export default page