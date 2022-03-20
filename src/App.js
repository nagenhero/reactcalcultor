import logo from './logo.svg';
import './App.css';
import { Title } from './COMPONENTS/Title';
import { Display } from './COMPONENTS/Display';
import { Buttons } from './COMPONENTS/Buttons';

function App() {
  return (
    <div className="wrapper">
    <Title/>


<div className="mainParent">
    {/* <!-- display area --> */}
    <Display/>
    {/* <!-- buttons area --> */}
    <Buttons/>
</div>
</div>
  );
}

export default App;
