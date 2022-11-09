import { Card, Container, Row,Col } from "react-bootstrap"
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as SiIcons from 'react-icons/si'
import * as BsIcons from 'react-icons/bs'

const Footer = () => {
   return(
   <Card className='mt-5' style={{backgroundColor: "#23272b"}}>
    <Container className="">
       <Row className="mt-3 text-center" style={{marginLeft: '400px', marginRight: '400px'}} >
          <Col sm={2}>
             <FaIcons.FaFacebookF color="white" size={25}/>   
          </Col>
          <Col sm={2}>    
             <AiIcons.AiOutlineTwitter color="white" size={25}/>   
          </Col>
          <Col sm={2}>        
             <SiIcons.SiInstagram color="white" size={20}/>  
          </Col>
          <Col sm={2}>        
             <SiIcons.SiGmail color="white" size={20}/>  
          </Col>
          <Col sm={2}>        
             <BsIcons.BsGoogle color="white" size={20}/>  
          </Col>
       </Row>
       <Row className='mb-3' >
          <Col className="mt-3 mr-5">
          <div 
          style={{fontSize: '13px', color: 'white', letterSpacing: '2px', textAlign: 'center'}}>
           © 2022 Copyright: ITTERARY
          </div>
         </Col>
       </Row>
    </Container>
       
    </Card>
   ) 
}

export default Footer