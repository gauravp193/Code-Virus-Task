import React from 'react'
import react from './assets/react.jpg'
import ui from './assets/ui.jpg'
import wd from './assets/wd.jpg'
import './styles/Works.scss'

const Works = () => {
    return (
        <div className='works'>
            <div className="work__section">


                <div className="cards">
                    <img src={react} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                    <img src={ui} alt="" />
                    <button>See Work</button>
                </div>

                <div className="cards">
                   <img src={wd} alt="" />
                    <button>See Work</button>
                </div>


            </div>
        </div>
    )
}

export default Works
