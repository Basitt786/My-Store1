
export const WomenApi = async({params}) => {
    console.log(params);

      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${params.womenid}`);

        const data = await response.json();

        return data

        }catch (error) {
            console.log(error);
            return [];
        }
    
}