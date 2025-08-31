import { useLoaderData } from "react-router-dom"
import DealCard from "../components/Ui/DealCard"

export function Deals() {
 const data = useLoaderData()

 if (!data) {
  return <h1>Loading...</h1>
 }
  return (
    <>
    <div className="bubble-underline">
        <h1>Deals</h1>
    </div>
      <ul className="oneline-fourcard">
          {Array.isArray(data) &&
            data.map((curent) => {
              return <DealCard  key={curent.id} curent={curent}/>
            })
          }
      </ul>
    </>
  )
}