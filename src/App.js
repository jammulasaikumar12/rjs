import { Container, Stack } from "@mui/material";
import "./App.css";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";
//import Headerbar from "./Headerbar";
//import SignUp from "./SignUp";
import Box from '@mui/material/Box';
import { Navbar } from "./components/Navbar";






function App(){
return(
 <Box> 
  <Navbar/>
  <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
   
   <Sidebar/>
    <Feed/>
    <Rightbar/>
  </Stack>
  </Box>
  
);
}
export default App;
/*kiuhuygygiky
import { Route ,Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';`
function App() {
  return (
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
    </Routes>
  );
}

export default App;*/
