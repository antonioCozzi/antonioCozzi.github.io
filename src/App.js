import './App.scss';
import Header from './components/header';
import Homepage from './components/homepage/homepage';

function App() {
  return (
    <div className="app">
      <div id='header'>
        <Header />
      </div>
      <section>
        <Homepage />
      </section>
      <section>
        <Homepage />
      </section>
    </div>
  );
}

export default App;
