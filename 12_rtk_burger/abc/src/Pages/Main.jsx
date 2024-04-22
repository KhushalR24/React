import React from 'react'
import Layout from '../Components/Layout'
import '../Styles/Home.css'
import HeroPage from './HeroPage'
import AboutPage from './AboutPage'
import MenuPage from './MenuPage'
import ShopPage from './ShopPage'
import BlogReview from './BlogReview'
import ContactUs from './ContactUs'
import PromotionPage from './PromotionPage'



function Home() {
  return (
    <div>
      <Layout>
      <HeroPage/>
      <AboutPage/>
      <MenuPage/>
      <ShopPage/>
      <PromotionPage/>
      <BlogReview/>
      <ContactUs/>
      </Layout>
    </div>
  )
}

export default Home
