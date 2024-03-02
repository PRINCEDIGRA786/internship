import SignUp from "./components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Postpage from "./components/Postpage";
import { useState } from "react";
import PortState from "./contextapi/PortState";
import Login from "./components/Login";
// import apiKey from './.env'
function App() {
  const pageSize = 8;

  const [progress, setProgress] = useState(0)
  const apiKey = "3bb996c377024a25827e707c0184bfdd";
  return (
    <>
      {/* <div> */}
      <PortState>

        <Router>
          {/* <NavBar /> */}
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/posts" element={<Postpage setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
            <Route path="/login" element={<Login />} />
          </Routes>


        </Router>
        {/* </div> */}
      </PortState>
    </>

  );
}

export default App;
