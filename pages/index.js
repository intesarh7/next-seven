import React from 'react'
import Header from '../components/components/Header/Header'
import HeroSlider from '../components/components/HeroSlider/HeroSlider'
import IconBox from '../components/components/IconBox/IconBox'
import CourseFilter from '../components/components/CourseFilter/CourseFilter'
import LatestNews from '../components/components/LatestNews/LatestNews'
import HomeBlog from '../components/components/HomeBlog/HomeBlog'
import TestimonialSlider from '../components/components/TestimonialSlider/TestimonialSlider'
import NewsletterForm from '../components/components/NewsletterForm/NewsletterForm'
import Footer from '../components/components/Footer/Footer'



export default function Layout ({children}) {
    return (
        <>
            <Header></Header>
            {children}
            <HeroSlider></HeroSlider>
            <IconBox></IconBox>
            <CourseFilter></CourseFilter>
            <LatestNews></LatestNews>
            <HomeBlog></HomeBlog>
            <TestimonialSlider></TestimonialSlider>
            <NewsletterForm></NewsletterForm>
            <Footer></Footer>                   
        </>
    )
}
