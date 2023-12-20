import React from 'react'

function User({userName, age, gender, imageLink}) {
  return (
    <div className='cards'>
        <img src={imageLink} alt={userName} />
        <h3>{userName}</h3>
            <p>age: {age}</p>
            <p>gender: {gender}</p>
    </div>
  )
}

export default User