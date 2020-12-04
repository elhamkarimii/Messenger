import React from "react";
import styled from "styled-components"
import DATA from "./data.json"

const SelfMessege = styled.div`
    min-height: 27px;
    width: 210px;
    background-color: #32bea6;
    border-radius: 7px;
    border : 1px solid #ccc;
    padding: 5px;
    margin-right: 20px;
    margin-left: auto;
    margin-top: 10px;
    line-height: 1.5;
`
const UserMessege = styled.div`
    min-height: 27px;
    width: 210px;
    background-color: #fff;
    border-radius: 7px;
    border : 1px solid #ccc;
    float: left;
    padding: 5px;
    margin-left: 20px;
    margin-top: 10px;
    line-height: 1.5;
`

const Messeges = styled.div`
   min-height: 27px;
    width: 210px;
    background-color: ${props=>props.self?' #32bea6':'#fff'};
    border-radius: 7px;
    border : 1px solid #ccc;
    /* float: left; */
    padding: 5px;
    ${props=>props.self?'margin-right:auto':'margin-left:auto'}
    margin-top: 10px;
    line-height: 1.5;
`
export function MessegeBar({ messeges}) {
    return (
        <>
      { messeges.map(messege=> <Messeges  self={messege.self}>{messege.messegeText}</Messeges>)}
            {/* {DATA.self && <SelfMessege>{selfMessege}</SelfMessege>}
            {!DATA.self &&<UserMessege>{userMessege}</UserMessege>} */}
        </>
    )
}

const SendMessegeBox = styled.div`
    /* width: 100%;
    height: 56px;
    background-color: #000;
    position: absolute;
    bottom: 0px; */
`
export function SendMessege() {
    return (
        <SendMessegeBox>

        </SendMessegeBox>
    )
}