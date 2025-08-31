export const WomenGetApi = async() => {


        try {
            const response = await fetch("https://api.escuelajs.co/api/v1/products?category.name=Shoes");
            const data = await response.json();
            // console.log(data);
            

            return data

            }catch (error) {
                console.log(error);
                return [];
            }
    
}