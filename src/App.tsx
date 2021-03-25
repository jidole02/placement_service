import "./App.css";
import Header from "./components/header";
import Map from "./components/map";
import GlobalStyle from "./public/globalStyle";
import { SampleProvider } from "./context/context";

declare global {
  interface Window {
    kakao: any;
  }
}

function App() {
  return (
    <SampleProvider>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Map></Map>
    </SampleProvider>
  );
}

export default App;
