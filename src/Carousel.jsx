import './index.css';
import CarouselSlides from './CarouselSlides';
import { useState } from "react";
const Carousel = () => {

    const images = ['https://img.freepik.com/premium-photo/collection-mountain-landscape-with-house-house-foreground_884500-2572.jpg', 'https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-blue-sky_884500-1493.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ZYFyv2qUAqVforVYXU6scEDYy1vUTxMgelH1uXIELXK4ijKWWuQgvSeWt_xoWNER53U&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_sM1CIXlzOpi4uzhJJFEDIFCxPj14w7KL0-CyLhrg8IQT9IrbEeicIA8e_OxIpwDNhk&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqn42qP6Zx6A1wckOSMGCN2E-Q2aXAY3pYCHYdLoE19_EULiyH3ho6upaU01jDXq8tlHI&usqp=CAU', 'https://img.freepik.com/premium-photo/2d-savvana-daylight-landscape-background-vector-blue-sky-flat-vector-generated-ai_889431-809.jpg']
    const [currentPos, setCurrentPos] = useState(0)
    const handlePrevClick = () => {
        if (currentPos === 0) {
            setCurrentPos(0)
        }
        else {
            setCurrentPos(prevIndex => prevIndex + 500)
        }
    }
    const handleNextClick = () => {
        if (currentPos === -1000) {
            setCurrentPos(0)
        }
        else {
            setCurrentPos(prevIndex => prevIndex - 500)
        }
    }

    const handleDotClick = (index) => {
        if (index === 1) {
            setCurrentPos(0)
        }
        else if (index === 2) {
            setCurrentPos(prevIndex => prevIndex - 500)
        }
        else if (index === 3) {
            if (currentPos === -500) {
                setCurrentPos(prevIndex => prevIndex - 500)
            }
            else if (currentPos === 0) {
                setCurrentPos(prevIndex => prevIndex - 1000)
            }
            else {
                setCurrentPos(0)
            }
        }
    }

    return <>
        <h1>Wallpaper Carousel</h1>
        <div className="carousel-div">
            <CarouselSlides images={images} currentPos={currentPos}></CarouselSlides>
        </div>
        <div className='carousel-dots'>
            <button onClick={() => handleDotClick(1)}></button>
            <button onClick={() => handleDotClick(2)}></button>
            <button onClick={() => handleDotClick(3)}></button>
        </div>
        <div className='carousel-button'>
            <button onClick={handlePrevClick}>&#11164;</button>
            <button onClick={handleNextClick}>&#11166;</button>
        </div>
    </>

}

export default Carousel;