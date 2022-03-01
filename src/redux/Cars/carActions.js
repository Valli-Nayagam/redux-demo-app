import { DELETE_CARS } from './carTypes'
import { ADD_CARS } from './carTypes'

export const deleteCars = () => {
    return {
        type: DELETE_CARS
    }
}
export const addCars = () => {
    return {
        type: ADD_CARS
    }
}