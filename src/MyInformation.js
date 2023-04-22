import React, {useState} from "react"

export default function MyInformation(){
    const [name, setName] = useState("Ilya");
    const [surname, setSurname] = useState("Mazurok");
    const [age, setAge] = useState("19");
    const handleSubmit = event=>{
        event.preventDefault();
        alert(`${name} ${surname}, ${age} years old`);
    }
    const handleChangeName = event=>{
        setName(event.target.value);
    }
    const handleChangeSurname = event=>{
        setSurname(event.target.value);
    }
    const handleChangeAge = event=>{
        setAge(event.target.value);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" value={name} onChange={handleChangeName} className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="surname" className="form-label">Surname</label>
                <input type="text" name="surname" value={surname} onChange={handleChangeSurname} className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="text" name="age" value={age} onChange={handleChangeAge} className="form-control"></input>
            </div>
            </label>
            <input type="submit" value="Add" className="btn btn-secondary" ></input>
        </form>
        
        </>
    )
}

