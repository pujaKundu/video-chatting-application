import "./App.css";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="App">
      <h1 className="font-semibold text-4xl text-blue-900">Video Chat App</h1>
      <VideoPlayer />

      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
