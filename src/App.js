import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Login from "./components/Login";

function App() {
  return (
    <div className="flex p-2 m-10 ml-80 mr-80 mt-36 justify-between border-2 bg-white h-[800px]">
      <ImageSlider />
      <Login />
    </div>
  );
}

export default App;
