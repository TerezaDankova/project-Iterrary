import { Spinner } from 'react-bootstrap'

const Loader = ()=>{
    return(
      <div className='spinnerContainer'>
   
          <Spinner animation="border" style={{width: "800px", height: "800px", 
          marginLeft: "200px"}} variant="secondary" />
 
      </div>
      
    )
    }
    export default Loader