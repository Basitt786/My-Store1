import { useLoaderData } from "react-router-dom"
import ContactCard from "../components/Ui/ContactCard"
import "../components/Ui/Contact.css"

export function Contact() {
  const data = useLoaderData()

  if (!data) {
    return <h1>Loading...</h1>
  }
  return (
    <>
    <div className="bubble-underline">
        <h1 >Contact Us</h1>
    </div>
      <ul className="oneline-fourcard">
        {Array.isArray(data) &&
          data.map((curentele, index) => {
            return <ContactCard key={curentele.id} curentele={curentele} index={index}/>
          })
        }
      </ul>
    </>
  )
}