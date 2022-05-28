
import './App.css';
import Test from './Components/Test';
import Hello from './Components/Hello';

function App() {
  return (
    <div className="App">
     
     <Hello name=" Jafary" heroName="Engineer">
       <p>
         This is children paragraph
       </p>
     </Hello>
     <Hello name=" Lucy"  heroName="Developer">
       
       <button> Action</button>
         
     </Hello>
     <Hello name= " Faith " heroName="Front-end Developer"></Hello>

      
    
    </div>
  );
}

export default App;
