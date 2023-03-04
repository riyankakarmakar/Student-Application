import Appbar from './components/Appbar';
import Student from './components/Student';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentData from './components/StudentData';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Student/>}/>
        <Route path="/studentDetails" element={<StudentData/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
