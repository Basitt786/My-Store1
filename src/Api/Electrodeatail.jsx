
export const Electrodetail = async({params}) => {
    console.log("params",params);
    

    try {
        const res = await fetch(`https://dummyjson.com/products/${params.electronicsid}`)
      
        const data = await res.json()
        // console.log( data);
        
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}