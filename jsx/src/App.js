import logo from "./logo.svg";
import "./App.css";
import imageInSrc from "./imageInSrc.jpg";
import myVideo from "./hauserTheGodFather.mp4";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Meher Slimani</h1>

        <br />

        <img src={imageInSrc} />

        <br />

        <img src="/imageInPublic.jpg" />
      </div>

      <video src={myVideo} width="320" height="240" controls />
    </div>
  );
}

export default App;
