
import './css/App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Awards from './pages/Awards';
import Filter from './pages/Filter';

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossOrigin="anonymous"
        />
      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/awards' element={<Awards/>}></Route>
          <Route exact path='/filter' element={<Filter/>}></Route>
      </Routes>
    </>
  );
}

export default App;
