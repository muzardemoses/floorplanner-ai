import city from "./Images/city.jpg";
import "./App.css";

function App() {
  return (
    <div className=" text-center">
      <div>
        <b>
          <h1 className=" text-teal-500">floorplanner.ai</h1>
        </b>
        <h2>
          Transforming Spaces, Powered by AI: Discover Limitless Possibilities
          for Your Dream Build.
        </h2>
        <img 
        src={city} 
        alt="city"
        />
      </div>
    </div>
  );
}

export default App;
