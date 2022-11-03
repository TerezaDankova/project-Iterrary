import { Row, Col, Container, Modal } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const FourModal4 = (props) => {

   const handleFour4Close = () => props.setFour4Show(false);

   return (
      <>
       <Modal size='xl' show={props.four4Show} onHide={handleFour4Close}>
        <Modal.Header closeButton>
        <span className="flex-grow-1 d-flex justify-content-center" style={{fontSize: '30px', fontWeight: 'bold', letterSpacing: '5px'}}>DAY FOUR</span>
        </Modal.Header>
        <Modal.Body>
           <Container className='ml-3 pr-5'>
         
           <div className='mt-3' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>ACCADEMIA GALLERY</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           Start your day at the Accademia Gallery. At this gallery you get to see the statue of David, one of the most famous works of art in the world. This is another place where lines can be legendary so we recommend reserving your ticket in advance or joining a skip-the-line tour.
           <div className=''> 
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Hours:</span> 9:00 am - 6:45 pm; closed Mondays</div>
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Cost:</span> €12 + €4 online reservation fee; included on the Firenze Card</div>
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Website:</span>  www.accademiagallery.it </div>
           </div>
           <Image className='mt-3' src={'https://images.pexels.com/photos/3652853/pexels-photo-3652853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
          
           <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>SAN LORENZO MARKET & MERCATO CENTRALE</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           From Accademia Gallery, walk to San Lorenzo Market (8 minute walk). This outdoor market is a great place to shop for pottery, leather goods, and souvenirs. Then go inside of Mercato Centrale. This is a great place to gather food for a picnic lunch.
           The Central Market is a two-level food market, making up the second half of the San Lorenzo Market. The Mercato Centrale is in a beautiful building designed by Giuseppe Mengoni, the same architect who designed the Galleria Vittoria Emanuele II, and built from 1870-74 when Florence was still capital of Italy. 
           <Row>
             <Col>
               <Image className='mt-3' src={'https://images.pexels.com/photos/13616781/pexels-photo-13616781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
             <Col>
               <Image className='mt-3' src={'https://images.pexels.com/photos/12406725/pexels-photo-12406725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
             </Col>
           </Row>

           <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>PALAZZO VECCHIO</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           Palazzo Vecchio is located in Piazza della Signoria. In this square you can visit the Loggia dei Lanzi, an open-air sculpture gallery of Renaissance art.
           Stroll through the historic heart of Florence to Palazzo Vecchio (1 km, about 15 minutes).
           The Palazzo Vecchio is the town hall of Florence. Go inside to tour the museum, take a tour of the Roman Ruins, or, you can do our favorite activity, climb the tower.
           This is one of my favorite views of Florence. From the top of the tower, enjoy panoramic views over the city. This is one of the best spots to get a great photo of the Duomo.
           <div className=''> 
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Hours:</span> April 1 to September 30: 9 am - 7 pm; October 1 to March 31: 9 am - 7 pm; on Thursdays closing time is 2 pm; last admission is one hour before closing</div>
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Cost:</span> Museum €12.50, Tower €12.50, combined €17.50; included on the Firenze Card</div>
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Website:</span>  www.accademiagallery.it </div>
           </div>
            <Image className='mt-3' src={'https://images.pexels.com/photos/11365684/pexels-photo-11365684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>
      
           <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>THE UFFIZI MUSEUM</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           This world famous art museum contains works of art by Renaissance artists Leonardo da Vinci, Botticelli, Michelangelo, and many more.
           <div className=''> 
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Hours:</span> 8:15 am - 6:30 pm; closed Monday</div>
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Cost:</span> €20 March 1 to October 31; €12 November 1 to February 28; included on the Firenze Card</div>
           </div>
           <Row>
              <Col sm={6}>
                <Image className='mt-3' src={'https://www.madeoftuscany.it/image/uffizi/elena-popova-zm2ecmpbr-y-unsplash.jpg'} fluid/>
              </Col>
              <Col sm={6}>
                 <Image className='mt-3' src={'https://static01.nyt.com/images/2018/06/10/arts/10uffizi7/10uffizi7-superJumbo.jpg'} fluid/>
              </Col>
           </Row>

           <div className='mt-5' style={{fontSize: '20px', fontWeight: 'bold', letterSpacing: '5px'}}>BOBOLI GARDENS</div>
           <hr  style={{
               color: '#000000',
               height: .5,
               borderColor : '#000000',
               marginTop: '-2px'
            }}/>
           If you are still doing well on time, stroll across Ponte Vecchio to Boboli Gardens. Once here, you can tour Pitti Palace, see more sculptures, and get another wonderful view of Florence.
           <div className=''> 
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Hours:</span> Boboli Gardens opens at 8:15 am; closing time varies depending upon the season; Pitti Palace is open Tuesday through Sunday from 8:15 pm to 6:30 pm</div>
              <div><span className='mr-1' style={{fontWeight: 'bold'}}>Cost:</span> €6 for Boboli Gardens; €10 for Pitti Palace; included on the Firenze Card</div>
           </div>

           <Image className='mt-3 mb-3' src={'https://images.pexels.com/photos/4946835/pexels-photo-4946835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} fluid/>


         

           </Container>
        </Modal.Body>
       </Modal>
      </>
   )
}
export default FourModal4