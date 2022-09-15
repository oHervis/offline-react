import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { TodoComponent } from './modules/Todo/components/Todo.component';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <img src={reactLogo} />
      </div>
      <TodoComponent></TodoComponent>
    </div>
  );
}

export default App;
