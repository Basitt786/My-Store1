import { useLoaderData } from "react-router-dom"
import WoCard from "../components/Ui/WoCard"


export function Women() {
 const data = useLoaderData()

 if (!data) {
  return <h1>Loading...</h1>
 }
  return (
    <>
    <div className="bubble-underline">
    <h1>Women</h1>
    </div>
    
      <ul className="oneline-fourcard">
        {Array.isArray(data) &&
          data.map((curenele) => {
            return <WoCard key={curenele.id} curenele={curenele}/>
          })
        }
      </ul>
    </>
  )
}

