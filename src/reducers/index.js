import { combineReducers } from 'redux';
import HeaderReducer from './reducer-header'
import ProjectsReducer from './reducer-projects'
import ProjectsReducer2 from './reducer-projects2'
import ProjectsReducer3 from './reducer-projects3'
import ProjectsReducer4 from './reducer-projects4'
import ProjectsReducer5 from './reducer-projects5'
import ProjectsReducer6 from './reducer-projects6'
import ProjectsReducer7 from './reducer-projects7'
import ProjectsReducer8 from './reducer-projects8'


const rootReducer = combineReducers({
  headerTitle: HeaderReducer,
  projects: ProjectsReducer,
  projects2: ProjectsReducer2,
  projects3: ProjectsReducer3,
  projects4: ProjectsReducer4,
  projects5: ProjectsReducer5,
  projects6: ProjectsReducer6,
  projects7: ProjectsReducer7,
  projects8: ProjectsReducer8
});

export default rootReducer;
