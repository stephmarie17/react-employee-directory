import React from 'react';
import Card from './Card';

const CardList = ({ employees }) => {
    return (
        <div>
            {
            employees.map((user, i) => {
                return (
                    <Card 
                    key={i} 
                    id={employees[i].id} 
                    photo={employees[i].photo}
                    name={employees[i].name} 
                    position={employees[i].position}
                    email={employees[i].email}
                    />
                );  
            })
            }
        </div>
    );
}

export default CardList;