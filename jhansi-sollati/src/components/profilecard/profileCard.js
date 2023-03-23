import React from "react";
import ReactDOM from "react";




const ProfileCard= (props)=> {

return (
    <>
    <div className="profilecard">
    <h1> {props.name}</h1>
    <h2> {props.desc}</h2>
    <h4> {props.notes}</h4>
    </div>
    </>
       )





}
export default ProfileCard;