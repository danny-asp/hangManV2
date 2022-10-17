import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContextProvider from "./store/ContextProvider";

import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Body />
      </ContextProvider>
    </div>
  );
}

export default App;
