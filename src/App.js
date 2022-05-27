import './App.css';
import Display from './components/Display';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="app">
      <div className="space">
        <div className="content">
          <SearchBar/>
          <Display/>
        </div>
      </div>
    </div>
  );
}

export default App;
