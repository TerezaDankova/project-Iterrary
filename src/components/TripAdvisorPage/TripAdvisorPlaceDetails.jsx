
import React from "react"
import { Card, Col, Row, Image} from "react-bootstrap"
import { AiFillStar } from 'react-icons/ai'

const TripAdvisorPlaceDetails = ( props ) => {
   return (

    <Card style={{ width: '22rem', height: '23rem' }}>
      <Card.Img style={{ width: '22rem', height: '12rem' }} variant="top" src={props.place.photo ? props.place.photo.images.large.url : 'https://cdnkdc.azureedge.net/cdprod/Media/images/blog/13-2019-trends' } />
      <Card.Body>
        <div>
           <p style={{fontWeight: 'bold'}}>{props.place.name}</p> 
        </div>
        <div >
          <Row style={{display: 'flex'}} justifyContent="space-between">
            <Col sm={9}>
            < AiFillStar/>
            </Col>
            <Col sm={3}>
            <div style={{fontSize: '12px'}}>{props.place.num_reviews} review{props.place.num_reviews > 1 && 's'}</div>
            </Col>
           </Row>
        </div>
        <div>
          <Row style={{display: 'flex'}} justifyContent="space-between">
            <Col sm={8}>
            <div style={{fontSize: '12px'}}>Price</div>
            </Col>
            <Col sm={3}>
            <div style={{fontSize: '12px'}}>{props.place.price_level}</div>
            </Col>
           </Row>
        </div>
        <div>
          <Row>
            <Col sm={5}>
            <div style={{fontSize: '12px'}}>Ranking</div>
            </Col>
            <Col sm={7}>
            <div style={{fontSize: '12px'}}>{props.place.ranking}</div>
            </Col>
           </Row>
        </div>
        {props.place?.awards?.map((award)=> (
        <div>
          <Row>
            <Col sm={4}>
              <Image src={award.images.small}/>
            </Col>
            <Col sm={8}>
            <div style={{fontSize: '12px'}}>{award.display_name}</div>
            </Col>
           </Row>
        </div>
        ))}


       
      </Card.Body>
    </Card>

   )
}
export default TripAdvisorPlaceDetails