import React from 'react'
import { connect } from 'react-redux'
import { addCars, deleteCars } from '../redux'

function mainpage(props) {
  return (
    <div className="container h-100">
      {/* <h3>React-Redux</h3> */}
      <div className="card h-100 m-2">
        <div className="card-header">Car Info</div>
        <div className="card-body h-100 align-items-center">
          <div>Number of Cars: {props.noOfCars}</div>
        </div>
        <div className="card-footer">
      <button onClick={props.addCars} className="btn btn-outline-primary m-2">Add Cars</button>
      <button onClick={props.deleteCars} className="btn btn-outline-primary">Delete Cars</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    noOfCars: state.noOfCars
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCars: () => dispatch(deleteCars()),
    addCars: () => dispatch(addCars())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(mainpage);