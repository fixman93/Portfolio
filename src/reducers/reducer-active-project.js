import { PROJECT_SELECTED } from '../actions/index'

export default (state = null, action) => {
  switch(action.type) {
    case PROJECT_SELECTED:
    return action.payload
  }
  return state
}
