
export const HomGetapi = async() => {
    try {
        const res = await fetch("https://dummyjson.com/products?limit=12");
        const data = await res.json();
        console.log(data);
        return data.products
    } catch (error) {
        console.log(error);
        return []
        
    }
}