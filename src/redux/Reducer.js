import { combineReducers } from 'redux'
import  {reducer as reducePlayer} from './table/reducer'
import  {reducer as reduceFilter} from './filter/Reducer'

export default combineReducers({
  player: reducePlayer,
  filters: reduceFilter
})