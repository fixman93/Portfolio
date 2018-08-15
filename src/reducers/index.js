import { combineReducers } from 'redux';
import HeaderReducer from './reducer-header'
import ProjectsReducer from './reducer-projects'
import ProjectsReducer2 from './reducer-projects2'
import ProjectsReducer3 from './reducer-projects3'


const rootReducer = combineReducers({
  headerTitle: HeaderReducer,
  projects: ProjectsReducer,
  projects2: ProjectsReducer2,
  projects3: ProjectsReducer3
});

export default rootReducer;
