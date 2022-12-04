import './App.scss';
import Header from './components/header';
import Homepage from './components/homepage/homepage';

function App() {
  return (
    <div className="app">
      <Header />
      <section>
        <Homepage />
      </section>
    </div>
  );
}

export default App;
