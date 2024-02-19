import React from 'react'

const person={
    name:'Jacob',
    age:34,
    address:{
        line1:"Shaahu Road",
        line2:"Agashua Stree",
        city:"Gboko"
    },
    profiles:["twitter","linkedin","facebook"],
    executePrint:()=>{
person.profiles.forEach( profile=>console.log(profile))
    }
}


const LearningJavaScript = () => {
  return (
    <div>
    <div>{person.name}</div>
    <div>{person.address.line1}</div>
    <div>{person.executePrint()}</div> 
    </div>
  )
}

export default LearningJavaScript