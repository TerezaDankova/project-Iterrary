import { Button, Card } from 'react-bootstrap';
import "./HotelsCard.css"

const HotelsCard = () => {

  return (
   <Card className='card-hotel shadow'>
         <Card.Img className="card-hotel-image" variant='top' src="https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
         <Card.Title className='card-hotel-title'> Title
         </Card.Title>
         <Button className="btn-hotel" variant="light" 
         > SHOW MORE </Button>
   </Card>
  )
}

export default HotelsCard