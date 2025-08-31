

export  const MenDetail =  async({params}) => {
    console.log(`params`,params);
    
    
    try {
    const response = await fetch(`https://fakestoreapi.com/products/${params.menid}`);
    const data = await response.json();
   //  console.log(data);
    return data 
 } catch (error) {
    console.log(error);
    return []
 }
    
  
}