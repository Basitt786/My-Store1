import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home } from "./pages/Home";
import { Women } from "./pages/Women";
import { Men } from "./pages/Men";
import { Electronics } from "./pages/Electronics";
import { HomeKitchen } from "./pages/HomeKitchen";
import { Deals } from "./pages/Deals";
import { Contact } from "./pages/Contact";
import { ErrorPages } from "./pages/ErrorPages";
import { Applayout } from "./components/layout/Applayout";
import { GetApiData } from "./Api/GetApiData";
import { WomenGetApi } from "./Api/WomenGetApi";
import { ElectroApi } from "./Api/ElectroApi";
import { HomeGetApi } from "./Api/HomeGetApi";
import { DealGetApi } from "./Api/DealGetApi";
import { ContactGetApi } from "./Api/ContactGetApi";
import { HomGetapi } from "./Api/HomGetApi";
import { KitchenDetails } from "./components/Ui/KitchenDetails";
import { GetHomeApplianc } from "./Api/GetHomeApplianc";
import { Electrodetail } from "./Api/Electrodeatail";
import { Itemsdetail } from "./components/Ui/Itemsdetail";
import "./App.css";
import "./Appss.css"
import { CardDetail } from "./components/Ui/CardDetail";
import { MenDetail } from "./Api/MenDetail";
import { Womendetail } from "./components/Ui/Womendetail";
import { WomenApi } from "./Api/WomenApi";
import { DealCardDetail } from "./components/Ui/DealCardDetail";
import { dealCardApi } from "./Api/DealCardApi";
import CartPage from "./components/Ui/CartPage";
import LoginPage, { fulldata } from "./components/Ui/LoginPage";
import ContactForm, { contactdata } from "./components/Ui/ContactForm";




  const Result = createBrowserRouter([

    {
      path: "/",
      element: <Applayout />,
      errorElement: <ErrorPages />,
      children:[
      {
        path: "/",
        element: <Home />,
        loader: HomGetapi,
      },

      {
        path:"cartpage",
        element: <CartPage />,
      },

      {
        path:"loginpage",
        element: <LoginPage />,
        action: fulldata,
      },

      {
        path: "women",
        element: <Women />,
        loader: WomenGetApi,
      },

      {
        path: "men",
        element: <Men />,
        loader: GetApiData,
        
      },

        {
        path: "women/:womenid",
        element: <Womendetail />,
        loader: WomenApi,
      },

          {
        path: "men/:menid",
        element: <CardDetail/>,
        loader: MenDetail,
        
      },

      {
      path: "deals",
      element: <Deals />,
      loader: DealGetApi,
      },

       {
      path: "deals/:dealsid",
      element: <DealCardDetail/>,
      loader: dealCardApi,
      },

      {
        path: "electronics",
        element: <Electronics />,
        loader: ElectroApi,
      },

      {
        path: "homekitchen",
        element: <HomeKitchen />,
        loader: HomeGetApi,
      },

        {
        path: "electronics/:electronicsid",
        element: <Itemsdetail />,
        loader: Electrodetail
      },

      {
        path: "homekitchen/:homekitchenid",
        element: <KitchenDetails />,
        loader: GetHomeApplianc,
      },

      {
        path: "contactus",
        element: <ContactForm />,
        action: contactdata,
      },
      ]
    }


    
  ])


const App = () => {
  return <RouterProvider  router={Result} />
 
}

export default App;