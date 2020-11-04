import { combineReducers } from 'redux';
import auth_reducers from './auth_reducer'
import app_reducers from './app_reducer'

export default  combineReducers(
    {
        auth:auth_reducers,
        app:app_reducers
    }
)