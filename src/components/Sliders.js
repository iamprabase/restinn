import Carousel from 'react-bootstrap/Carousel';
  
const Sliders = ({sliders}) => {
  return (
    <>
      {
        sliders ? 
        (
          <Carousel>
            {sliders.map(slider => {
              return (
                <Carousel.Item interval={5000} key={slider.id}>
                <img
                  className="d-block w-100"
                  src={`${slider.image}`}
                  alt={`${slider.name}`}
                />
                <Carousel.Caption>
                  <h3>{`${slider.name}`}</h3>
                </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>
        ) : (<></>)
      }
    </>
  );
}

export default Sliders;