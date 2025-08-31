
export const ContactGetApi = async() => {
    try {
        const respon = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await respon.json();
        // console.log(data);
        return data || []
        
    } catch (error) {
        console.log(error);
        return []
        
    }
}