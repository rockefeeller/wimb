import logo from './logo.svg';
import './App.css';
import StopSearch from './components/stop-search/stop-search';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container>
        <StopSearch/>
      </Container>
    </div>
  );
}

export default App;
