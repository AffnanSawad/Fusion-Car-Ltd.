import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import ContactUs from "../AllPages/ContactUs/ContactUs";
import Showoom from "../AllPages/ShowRoom/Showoom";
import AboutUs from "../AllPages/AboutUs/AboutUs";
import SellCar from "../AllPages/SellCar/SellCar";
// import Home from "../AllPages/Home/Home/Home";



 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main>  </Main>,

      children: [

    {
        path : '/',
        element : <Home></Home>
    },
    {
      path: '/contact',
      element: <ContactUs></ContactUs>
    },
    {
      path: '/showroom',
      element : <Showoom></Showoom>
    },
    {
      path: '/aboutus',
      element : <AboutUs></AboutUs>
    },
    {
      path: '/sellcar',
      element : <SellCar></SellCar>
    }


      ]
    },
  ]);