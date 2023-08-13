import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignIn from './components/SignIn';
import UserPage from './components/UserPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route exact path='/' element={< Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/userpage" element={<UserPage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
