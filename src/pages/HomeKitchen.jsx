// import React from 'react'

import { useLoaderData } from "react-router-dom"
import { HomeApplianc } from "../components/Ui/HomeApplianc"
import "../components/Ui/Card.css"


export function HomeKitchen() {
  const data = useLoaderData()
  console.log("Loader Data:", data);

  if(!data) {
    return <h1>Loading...</h1>
  }


  return (
    <>
    <div className="bubble-underline">
        <h1>Home&Kitchen</h1>
    </div>

      <ul className='oneline-fourcard'>
        {
          data.products.map((curentelem) => {
            return <HomeApplianc key={curentelem.id} curentelem={curentelem}/>
          })
        }
      </ul>
    </>
  )
}
