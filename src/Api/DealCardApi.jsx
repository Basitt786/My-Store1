
export const dealCardApi = async({params}) => {
    console.log(params);
    
 try {
     const  res = await fetch(`https://api.escuelajs.co/api/v1/products/${params.dealsid}`);
     const data = await res.json()
    //  console.log(data);
     return data ;
     
    } catch (error) {
        console.log(error);
     
}
}