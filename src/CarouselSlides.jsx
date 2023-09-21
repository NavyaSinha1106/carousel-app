import './index.css'
const CarouselSlides = ({ images, currentPos }) => {
    let Images = images.map((img, index) => (
        <div className='carousel-slide' style={{ transform: `translateX(${currentPos}px)`, transition: '1s ease-in' }}>
            <div className="carousel-img">
                <img key={index} src={img} />
            </div>
        </div>
    ))

    return <>
        {Images}
    </>

}

export default CarouselSlides;