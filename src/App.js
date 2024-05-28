
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Myservices from './components/Myservices';
import Myworks from './components/Myworks';






function App() {
  return (
    <div className="App ">
      <Header/>
      
      <main>
        <About/>
       <Myservices/>
       <Myworks/>
         
        
      </main>

        
        
      
     
    </div>
  );
}

export default App;
