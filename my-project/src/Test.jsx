import { useState } from "react";

const Test = () => {
    const [name, setName] = useState("Unknown");

    const changeName = () => {
        setName("Takamura");
    }

    return ( 
        <div>
            <p>
                {name}
            </p>
            <button onClick={changeName} className="p-2 bg-my-pink text-white rounded-lg">
                Change Name
            </button>
        </div>
     );
}
 
export default Test;