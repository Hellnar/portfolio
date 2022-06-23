import { GlobalStyles } from './components/styled/Global';
import Header from './components/Header';
import Slide from './components/Slide';
import Skills from './components/Skills';
import Technologies from './components/Technologies';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <GlobalStyles />
        <Header />
        <Slide />
        <Skills />
        <Technologies />
        <Articles />
        <Footer />
    </div>
  );
}

export default App;
