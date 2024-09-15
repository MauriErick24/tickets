import react from 'react'

import '../styles/styles.css';
import Image1 from '../assets/images/travel1.jpeg'
const Home = () => {
    return(
        <div className='container'>
            <div className='cover'>
               <div className='cover-text'>
                <h1>DISFRUTA VIAJAR</h1>
               </div>
               <button>Ver destinos</button>
            </div>
            <div className='body'>
                <h2>Descubre los destinos</h2>
                <h2>Selecciona el mejor precio</h2>
            </div>
            <div className='footer'>
            &copy; 2024
            </div>
        </div>
    );
}
export default Home;