import React from 'react'
////import PropTypes from 'prop-types'
import loading from '/Users/aaravsworld/Desktop/REACT/newsapp-fnbased/src/loading.gif' 
const Spinner = () => {
    return (
      <div className='text-center my-3'>
        <img src={loading} alt='Loading'></img>
      </div>
    )
}

export default Spinner
