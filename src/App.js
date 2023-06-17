import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePages from './pages/HomePages';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<HomePages/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
</Routes>
</BrowserRouter>

</>
  );
}

export default App;
