import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';


function App() {
  return (
    <div className="App">
      <h1 style={{ width: 200, color: "blue", margin: "auto" }}> To Do Application </h1><br /><br />
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;