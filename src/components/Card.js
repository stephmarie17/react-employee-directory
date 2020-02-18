import React from 'react';

const styles = {
    cardStyle: {
        width: '18rem'
    }
};

const Card = ({ name, photo, position, email, id }) => {
    return (
        <div className='cards'>
        <div className='card' style={styles.cardStyle}>
            <img alt='employee' src={photo} className='card-img-top'/>
            <div className='card-body'>
                <h2>{name}</h2>
                <p>{position}</p>
                <p>{email}</p>
            </div>
        </div>
        </div>
    );
}

export default Card;