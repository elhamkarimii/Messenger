import React, { useReducer, useRef, useEffect, useContext} from "react";
import styled from "styled-components"
import * as fa from 'react-icons/fa';
import reducer from "./reducer"
import {IdContext} from "./Context"


const MessegesWrapper = styled.div`
    background-color: #c5f6d8;
    width:100%;
    height : 430px;
    overflow-y:scroll;
    scroll-behavior: smooth;
    position:relative;
`
const Messeges = styled.div`
   min-height: 27px;
    width: 210px;
    background-color: ${props => props.self ? ' #32bea6' : '#fff'};
    border-radius: 7px;
    border : 1px solid #ccc;
    padding: 5px;
    margin-left: ${props => props.self ? 'auto' : "20px"};
    margin-right: ${props => props.self ? "20px" : 'auto'};
    margin-top: 10px;
    line-height: 1.5;
`
const SendMessegeBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 56px;
    position: relative;
    bottom: 0px;
    top: auto;
    background-color: #EDEDED;
`
const SendMessegeInput = styled.input`
    border: none;
    outline: none;
    border-radius: 10px;
    width: 90%;
    height: 32px;
    margin-left: 20px;
    margin-right: 12px;
    font-size: 17px;
    font-family:"Segoe";

`
const SendIcon = styled.p``

export function MessegeBar({ messeges, onKeyPress }) {

    const userId = useContext(IdContext)
    const scrollDown = useRef()

    useEffect(() => {
        scrollDown.current.scrollTo(250,scrollDown.current.scrollHeight)
    }, [userId, messeges]);

    const [{ onChange }, dispatch] = useReducer(reducer, {
        onChange: ""
    })

    function handleInputChange(e) {
        dispatch({
            type: 'WRITING_MESSEGE',
            payload: e.target.value
        })
    };

    function handleSendMessege() {
        if (onChange) {
            onKeyPress(onChange)
            dispatch({
                type: 'CLEARING_MESSEGE_INPUT'
            })
        }
    }

    function handleKeyPress(e) {
        if (e.key === "Enter" && onChange) {
            onKeyPress(onChange)
            dispatch({
                type: 'CLEARING_MESSEGE_INPUT'
            })
        }
    }

    return (
        <>
            <MessegesWrapper ref={scrollDown}>
                {messeges.map(messege => <Messeges self={messege.self} key={messege.id}>{messege.messegeText}</Messeges>)}
            </MessegesWrapper>
            <SendMessegeBox>
                <SendMessegeInput
                    placeholder="type something!"
                    autoFocus={true} type="text"
                    value={onChange}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <SendIcon onClick={handleSendMessege} >
                    <fa.FaPaperPlane />
                </SendIcon>
            </SendMessegeBox>
        </>
    )
}

