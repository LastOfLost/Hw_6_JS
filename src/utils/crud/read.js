
import { BASE_URL } from "./constant";

export default function read(){ 

feach(`${BASE_URL}/notebook`)
    .then((res) => res.json())
    .then((data) => {
        console.log(`✅ Data received`);
        return data;
    })
    .catch((error) => console.log(`❌ ${error}`));

};