
export const GetHomeApplianc = async({params}) => {
    console.log("param", params);
    
    try {
      const response = await fetch(`https://dummyjson.com/products/${params.homekitchenid}`);
      


        const data = await response.json()
      //  console.log(data);
       return  data ;
       
    } catch (error) {
        console.log(error);
        return []
    }
}