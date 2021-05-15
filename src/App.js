import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';


function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  );
}

export default App;
