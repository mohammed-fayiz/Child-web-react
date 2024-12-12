import 'bootstrap/dist/css/bootstrap.min.css';
import WebNavbar from './WebComponents/Navbar'
import { Route, Routes } from 'react-router-dom'
import MyWebHome from './WebComponents/HomePage'
import WebFooter from './WebComponents/footer';

function App() {

  return (
    <>
      <WebNavbar/>
      <Routes>
        <Route path='/' element={<MyWebHome/>}/>
      </Routes>
      <WebFooter/>
    </>
  )
}

export default App
