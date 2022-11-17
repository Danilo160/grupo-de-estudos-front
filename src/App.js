import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Register } from "./components/pages/Register";
import { Login } from "./components/pages/Login";
import { Pagina404 } from "./components/pages/Pagina404";
import { Profile } from "./components/pages/Profile";
import { MyGroups} from "./components/pages/MyGroups";
import { SearchGroups } from "./components/pages/SearchGroups";
import PrivateRoute from "./components/PrivateRoute";


function App() {

  return (
    <>
      <Router>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route element={<PrivateRoute/>}>
                <Route path="/profile" element={<Profile/>} />
                <Route path="/my_groups" element={<MyGroups/>} />
                <Route path="/search_groups" element={<SearchGroups/>} />
            </Route>
            
            
            <Route path="*" element={<Pagina404/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
