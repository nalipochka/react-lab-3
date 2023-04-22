import React, {useRef} from "react"

export default function MyInformation(){
    let name = useRef("Ilya");
    let surname = useRef("Mazurok")
    let age = useRef("19");

    const handleSubmit = event=>{
        event.preventDefault();
        let userName = name.current.value;
        let userSurname = surname.current.value;
        let userAge = age.current.value;
        alert(`${userName} ${userSurname}, ${userAge} years old`);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" ref={name} className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="surname" className="form-label">Surname</label>
                <input type="text" name="surname"  ref={surname} className="form-control"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="text" name="age"  ref={age} className="form-control"></input>
            </div>
            </label>
            <input type="submit" value="Add" className="btn btn-secondary" ></input>
        </form>
        
        </>
    )
}

