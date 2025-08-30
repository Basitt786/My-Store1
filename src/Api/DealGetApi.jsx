
export const DealGetApi = async() => {
    try {
     const  res = await fetch("https://api.escuelajs.co/api/v1/products");
     const data = await res.json()
    //  console.log(data);
     return data || []
     
    } catch (error) {
        console.log(error);
        return []
    }
}