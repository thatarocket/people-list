import './Home.css';
import React, { useState } from "react";
import People from '../../components/People/People';

function Home() {
    const[people,setPeople] = useState([]);
    const[name,setName] = useState("");
    const[age,setAge] = useState(0);
    
    function addPerson() {
        const newPerson = {
            name,
            age,
        };
        setPeople(prevState => [...prevState, newPerson]);
    }
    
    return (
        <div>
            <div className="home">
                <input type="text" placeholder="nome" onChange={event => setName(event.target.value)}></input>
                <input type="text" placeholder="idade" onChange={event => setAge(event.target.value)}></input>
                <button onClick={addPerson}>Adicionar</button>  
                
                <table className='peopleClass'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                people.map((person, index) => (
                                    <People 
                                        key={index}
                                        name={person.name}
                                        age={person.age}
                                    />
                                ))
                            }
                    </tbody>
                </table>
                       
            </div>
        </div>
    );

}
            
export default Home;
            