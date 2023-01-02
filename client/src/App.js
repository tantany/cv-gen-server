import Form from './components/Form';
import Header from './components/Header';
import photo from './images/bg.jpg';

function App() {
  return (
    <div className="app">
      <header className="header">
      </header>
      <section className="section">
        <div className="wrapper">
          <Header />
          <Form />
        </div>
        <img className="image" src={photo} alt="happy" />
      </section>
    </div>
  );
}

export default App;
