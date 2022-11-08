import React from 'react'
import { Container } from 'react-bootstrap'
import ExplanationText from '../components/ItinerariesPage/ExplanationText.jsx'

import IntroductionItineraries from '../components/ItinerariesPage/IntroductionText.jsx'
import ItinerariesSlider from '../components/ItinerariesPage/ItinerariesSlider'

function Itineraries() {
  return (
    <div className='itineraries'>
       <IntroductionItineraries />
       <Container> 
            <ExplanationText />
      </Container> 
      <ItinerariesSlider />

    </div>

  )
}

export default Itineraries