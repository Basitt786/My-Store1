import { useLoaderData } from "react-router-dom"
import Card from "../components/Ui/Card";
import "../components/Ui/Card.css"
export function Men() {
  const datta = useLoaderData();
  // console.log(datta);
  if (!datta) {
   return <h1>Loading...</h1>
    
  }
  
  return (
    <>
    <div className="bubble-underline">
        <h1 style={{fontSize:"32px"}}>Men's</h1>
    </div>

      <ul className="oneline-fourcard">
        {Array.isArray(datta) &&
          datta.map((curn) => {
            return <Card key={curn.id} curn={curn} />;
            
          })
        }
      </ul>
    </>
  )
}