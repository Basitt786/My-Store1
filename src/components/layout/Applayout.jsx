import { Outlet, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Loading } from "./Loading"

export const Applayout = () => {
    const loader = useNavigation()
    // console.log(loader);

    if (loader.state === "loading") return <Loading />
         
    return(
    <>    
        <Header />
        <Outlet />
        <Footer />
    </>
    )
}