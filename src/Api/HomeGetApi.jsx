export const HomeGetApi = async() => {
    try {
      const response = await fetch('https://dummyjson.com/products?limit=100');
      


        const data = await response.json()
      //  console.log(data);
       return  data ;
       
    } catch (error) {
        console.log(error);
        return []
    }
}