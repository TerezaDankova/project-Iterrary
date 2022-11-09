import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./ItinerariesSliderCard.css"

const ItinerariesSliderCard = (props) => {
   const navigate = useNavigate();
   const goToItinerary1Page = () => {
      navigate("/itinerary1")
   }
   let {imgSrc, title, text} = props.data

  return (

   <Card className='card'>
         <Card.Img className="card-image" variant='top' src={imgSrc} />
           
               <Card.Title className='card-title'>
                  {title}
               </Card.Title>
      
         <div className='card-text'>{text}</div>
         <Button className="btn" variant="light" 
         onClick={goToItinerary1Page}
         > SHOW MORE </Button>
   </Card>

  )
}

export default ItinerariesSliderCard