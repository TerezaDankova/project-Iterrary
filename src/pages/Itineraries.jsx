import React from 'react'
import ExplanationText from '../components/ItinerariesPage/ExplanationText.jsx'

import IntroductionItineraries from '../components/ItinerariesPage/IntroductionText.jsx'
import ItinerariesSlider from '../components/ItinerariesPage/ItinerariesSlider'

function Itineraries() {
  return (
    <div className='itineraries'>
       <IntroductionItineraries />
       <ItinerariesSlider />
       <ExplanationText />
    </div>

  )
}

export default Itineraries