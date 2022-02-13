import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
  let navbarstyle={
    

  }
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark " style={navbarstyle}>
  <div className="container-fluid text-center">
    <a className="navbar-brand " >{props.title}</a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
    </div>
  </div>
</nav>
  )
}

Header.defaultProps={
  title: "Your Title here"
}


Header.propTypes={
  title : PropTypes.string,
  
}
