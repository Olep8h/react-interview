import { useMemo, useState } from "react";
import UserInformation from "./UserInformation";

export const AddNewUser = () => {
    const [age, setAge] = useState("");
    const [newName, setName] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleSubmit = () => {
        if (age < 18) {
            alert("You are not old enough to be our employee");
        } else {
            window.submitForm(newName);
        }
    };

    const userData = { age: Number(age) };

    return (
        <div style={{ background: "#2ab92a", padding: 20 }}>
            <input type="text" onChange={handleNameChange} placeholder="Type your name" />
            <input
                type="number"
                onChange={handleAgeChange}
                placeholder="Type your age"
                value={age}
            />
            <button onClick={handleSubmit}>Submit form</button>
            <UserInformation data={userData} />
        </div>
    );
};

export default AddNewUser;
