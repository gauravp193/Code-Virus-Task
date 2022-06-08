import { Facebook, Instagram, LinkedIn, } from '@material-ui/icons'
import './styles/Main.scss'
import man from './assets/Dog2.jpg'

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                            <p>Hey There !</p>
                            <h1>I am GAURAV PATIL</h1>
                            <p>Creative Art Designer & Developer</p>

                            <div className="icons">
                               
                                <Instagram className='icon'/>
                                <Facebook className='icon'/>
                                <LinkedIn className='icon'/>
                            
                            </div>


                    <div className="buttons">
                        <button>See My Work</button>
                        
                    </div>

                    </div>


                </div>


                <div className="main__img">
                    <img src={man} alt="" />
                </div>


            </div>



        </div>
    )
}


export default Main
