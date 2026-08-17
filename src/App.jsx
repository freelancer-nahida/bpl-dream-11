

import "./App.css";
import Banner from "./component/homepage/banner/Banner";
import Navbar from "./component/Navbar";
import Players from "./component/homepage/players/players";
import { Suspense, useState } from "react";
  import { ToastContainer, toast } from 'react-toastify';


// Component-এর বাইরে Promise কল করুন
const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return await res.json();
};

const playerPromise = fetchPlayer();

function App() {
  const [coin, setCoin] = useState(50000);
  
    

  return (
    <>
      <h1 className="text-center text-6xl">alhamdulillah cource ses</h1>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Players
          playerPromise={playerPromise}
          setCoin={setCoin}
          coin={coin}
        ></Players>
      </Suspense>

       <ToastContainer />
    </>
  );
}

export default App;
