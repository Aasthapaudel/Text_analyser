import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
    return (
         <>
 {/* <Navbar title="Aastha Website" About="Website about"/> */}
 <Navbar title="Aastha Website"/>
<div className ="container my-3">
 <Textform heading ="Enter the text to analyse below"/> 
<About/>
</div>
        
</>

    );
    }

    export default App;