import { useLoaderData } from "react-router-dom"
import { ElectroCard }from "../components/Ui/ElectroCard";


export function Electronics() {
  const data = useLoaderData();

  if(!data|| data.length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <>
    <div className="bubble-underline">
        <h1>Electronics</h1>
    </div>

     <ul className="oneline-fourcard">
        {Array.isArray(data) &&
          data.map((curent) => {
            return <ElectroCard key={curent.id} curent={curent}/>
          })
        }
     </ul>
    </>
  )
}
