import './App.css';
import Greeting from './components/Greeting';

const App = () => {
  const siteName = 'WSK4';

  return (
    <>
      <h1>{siteName}</h1>
      <p>Tämä on p-elementti</p>
      <Greeting name="Niko" />
    </>
  );
};
export default App;
