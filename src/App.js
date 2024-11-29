import "./App.css";
import UserComponenet from "./components/UserComponent";
import UserDetails from "./components/UserComponent";

function App() {
  const userId = 1;
  return (
    <div className="App">
      <UserDetails id={userId} />
    </div>
  );
}

export default App;
