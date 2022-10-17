import { Button, Card } from 'react-bootstrap';
import "./HotelsCard.css"
import { useNavigate } from 'react-router-dom';

const HotelsCard = () => {

   const navigate = useNavigate();
   const goToAccPage = () => {
      navigate("/accommodationPage")
   }

  return (
   <Card className='card-hotel shadow'>
         <Card.Img className="card-hotel-image" variant='top' src="https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
         <Card.Title className='card-hotel-title'> Title
         </Card.Title>
         <Button className="btn-hotel" variant="light" 
          onClick={goToAccPage}
         > SHOW MORE </Button>
   </Card>
  )
}

export default HotelsCard