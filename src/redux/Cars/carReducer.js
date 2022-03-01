import { DELETE_CARS } from './carTypes'
import { ADD_CARS } from './carTypes'

const initialState = {
    noOfCars: 10
}

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_CARS: return{
            ...state,
            noOfCars: state.noOfCars - 1
        }
        case ADD_CARS: return{
            ...state,
            noOfCars: state.noOfCars + 1
        }
        default: return state
    }
}

export default carReducer