export const ElectroApi = async() => {
    try {
        const res = await fetch("https://dummyjson.com/products/search?q=phone")
      
        const data = await res.json()
        // console.log( data);
        
        return data.products || [];
    } catch (error) {
        console.log(error);
        return [];
    }
}