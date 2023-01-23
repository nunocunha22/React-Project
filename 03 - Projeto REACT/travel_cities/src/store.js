import {createStore} from 'redux'
import { reducer } from './reducer'

const initialState = {
    cities: [],
}

export const store = createStore(reducer, initialState);