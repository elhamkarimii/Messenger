import React, { useReducer, useState } from "react";
import styled from "styled-components";
import reducer from "./reducer"

const Container = styled.div`
    width: 495px;
    height: 95px;
    background-color : ${props => props.color};
    border-bottom : 1px solid #ccc;
    display: flex;
    flex-direction:row;
    position: relative;
    cursor: pointer;
    padding-right: 5px;
    &:hover {
        background-color : #ccc;
        transition: 1s;
    }
`
const AvatarImg = styled.div`
    display: flex;
    align-items:center;
    margin: 20px;
`
const ChatInfo = styled.div`
    margin-top: 22px;
`
const AvatarName = styled.h3`
    margin: 3px;
`
const RecentChat = styled.p`
    margin: 3px;
    font-size: 12px;
    overflow: hidden;
    width:328px;
    height:17px;
`
const RecentDate = styled.p`
    margin-left: auto;
    font-size: 14px;
    color: #9c9c9c;
    /* margin-right: -26px; */
`
const UnreadBox = styled.div`
    width:28px;
    height:28px;
    border-radius:50%;
    background-color: #ccc;
    color: #fff;
    display:flex;
    align-items:center;
    justify-content:center;
    position: absolute;
    /* top: 58px; */
    bottom:6px;
    right:6px;
`
export default function Contacts({ name, src, createdAt, lastMessege, onHandleContactClick ,id, clickContact, messegeLength, userId}) {
    // const [unreadMessege, setUnreadMessege ] = useState(messegeLength)

    const [{unreadMessege}, dispatch] = useReducer(reducer, {
        unreadMessege: messegeLength
    })
 
    function handleClick(e) {
        onHandleContactClick()
        clickContact()
        // setUnreadMessege(0);
        dispatch({
            type: 'UNREAD_MESSAGES'
        })
    }

    return (
        <Container color={userId === id ? "#eee" : "#fff"} onClick={handleClick} >
            <AvatarImg>
                <img src={src} alt="avatar" width="48px" height="48px" />
            </AvatarImg>
            <ChatInfo>
                <AvatarName>{name}</AvatarName>
                <RecentChat>{lastMessege}</RecentChat>
            </ChatInfo>
            <RecentDate>{createdAt}</RecentDate>
            {unreadMessege > 0 && <UnreadBox >{unreadMessege}</UnreadBox>}
        </Container>
    )
}

