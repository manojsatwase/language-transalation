import { createBrowserRouter,Outlet } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import "./App.css";
import HomePage from './components/HomePage/HomePage';
import { Dashboard } from "./components/Dashboard/Dashboard";

const AppLayout = () => {
  return (
   <>
     <Header/>
     <main>
     <Outlet />
     </main>
     <Footer/>
    </>
  )
}


export const AppRouter = createBrowserRouter([{
  path: "/",
  element:<AppLayout />,
  children:[
   {
    path:"/",
    element:<HomePage/>
   },{
    path:"/dashboard",
    element:<Dashboard/>
   }
  ]
},
])
