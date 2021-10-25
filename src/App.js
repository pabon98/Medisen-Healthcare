import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import Doctors from './Components/Doctors/Doctors';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
           <Home></Home>
          </Route>
          <PrivateRoute path="/services">
          <Services></Services>
          </PrivateRoute>
          <PrivateRoute path="/details/:detailsid">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <PrivateRoute path="/doctors">
           <Doctors></Doctors>
          </PrivateRoute>
          <PrivateRoute path="/contact">
          <Contact></Contact>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
