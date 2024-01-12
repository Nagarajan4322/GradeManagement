import logo from './logo.svg';
import './App.css';
import Addsession from './AddSession';
//import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Homepage from './Homepage';
import DisplayUserData from './DisplayUserDetails';
import TableReviews from './TableReviews';
import { StatsRing } from './StatsRing';
import TablieReviews from './TableReviews';
import './TableReviews.css';
import HeaderSimple from './HeaderSimple';
import StudentCard from './StudentCard';
import CardComponent from './CardComponent';
import FacultyLogin from './FacultyLogin';
import FetchCourse from './FetchCourse';
import FacultyCard from './FacultyCard';





function App() {
  return (
    <div className="App">
   
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Addsession></Addsession>}>  </Route>
          <Route path="path" element={<Homepage></Homepage>}></Route>
          <Route path="display" element={<DisplayUserData/>}></Route>
        </Routes>
      </BrowserRouter> */}
{/* <StudentCard/> */}
{/* <CardComponent/> */}
{/* <FacultyLogin/> */}
{/* <FetchCourse/> */}
{/* <FetchCourse/> */}

<FacultyCard/>
    </div>
  );
}

export default App;
