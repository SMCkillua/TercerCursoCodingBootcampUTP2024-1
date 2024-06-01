import {BrowserRouter, Routes, Route} from 'react-router-dom'
import IndexApp from './components/Index.jsx'



function App() {
  return (
    <div className="contenedor">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexApp></IndexApp>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
