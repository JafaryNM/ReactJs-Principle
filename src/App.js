
import './App.css';
import Test from './Components/Test';
import Hello from './Components/Hello';
import Message from './Components/Message';

function App() {
  return (
    <div className="App">

      <Message></Message>

   

      <Test name= "Regina"></Test>
      <Test name="Lucy"></Test>
      <Test name="Juliana"></Test>
     
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
