import { MainRoutes } from './routes/MainRoutes';
import {Header} from './components/Header'
import {Footer} from './components/Footer'

function App() {

  return (
    <div className="p-4">
      <Header />
    
        <MainRoutes />
      
      <Footer/>
    </div>
  );
}

export default App
