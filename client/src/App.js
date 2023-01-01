import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header-heading">CV Generator</h1>
      </header>
      <section className="body">
        <h2 className="body-heading">Tired of cluttered CVs that fail to stand out?</h2>
        <h3 className="body-subheading">This app simplifies your job search by condensing your experience into a few easy-to-read bullet points!</h3>
        <Form/>
      </section>
    </div>
  );
}

export default App;
