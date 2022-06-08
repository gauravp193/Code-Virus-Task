import React from 'react'
import './styles/Section.scss'
import man2 from './assets/Cat.jpg'

const Section = () => {
    return (
        <div className='section'>


            <div className="section__container">


                <div className="section__img">
                    <img src={man2} alt="" />
                </div>


                <div className="section__content">
                    <h1>Who is Gaurav</h1>
                    <p>2nd year student </p>
                    <p>Professional UI & UX Designer-Joking</p>
                    <p>Technical cord in College Event</p>
                    <p>React js Developer- Joking</p>
                </div>



            </div>


        </div>
    )
}

export default Section
