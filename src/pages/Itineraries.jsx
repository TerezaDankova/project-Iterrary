import React from 'react'
import { Container } from 'react-bootstrap'
import ExplanationText from '../components/ItinerariesPage/ExplanationText.jsx'

import IntroductionItineraries from '../components/ItinerariesPage/IntroductionText.jsx'
import ItinerariesSlider from '../components/ItinerariesPage/ItinerariesSlider'

function Itineraries() {
  return (
    <div className='itineraries'>
       <IntroductionItineraries />
       <ItinerariesSlider />
      <Container className='mt-5'> 
            <ExplanationText />
      </Container> 
    </div>

  )
}

export default Itineraries