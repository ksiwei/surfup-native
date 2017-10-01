import { createActions, createReducer } from 'reduxsauce'

export const INITIAL_STATE = {
    locations: require('../Fixtures/spots.json')
}

//TODO: add createActions

export const reducer = createReducer(INITIAL_STATE, {

})