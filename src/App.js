import Navbar from './NavBar';
import Home from './Home';
import AboutUs from './AboutUs';
import Demos from './Demos';
import BuyLabKit from './BuyLabKit';
import ConfirmationPage from './ConfirmationPage';
import Experiments from './Experiments';
import Reviews from './Reviews';
import ReviewsConfirmationPage from './ReviewsConfirmationPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {

  //const title = "Welcome to the new blog";
  //const likes = 50;
  //const person = {name: 'yoshi', age: 30};
  //const link = "http://www.google.com";

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path='Bravo-Experiments' element={<Home/>} />
            <Route path = "/" element={ <Home />}></Route>
            <Route path = "/AboutUs.js" element={ <AboutUs />}></Route>
            <Route path = "/Demos.js" element={ <Demos />}></Route>
            <Route path = "/Experiments.js" element={ <Experiments />}></Route>
            <Route path = "/BuyLabKit.js" element={ <BuyLabKit />}></Route>
            <Route path = "/Reviews.js" element={ <Reviews />}></Route>
            <Route path = "/ReviewsConfirmationPage.js" element={ < ReviewsConfirmationPage/>}></Route>
            <Route path = "/ConfirmationPage.js" element={ <ConfirmationPage />}></Route>
          </Routes>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
