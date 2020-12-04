import React, { useState } from "react";
import styled from "styled-components";
import DATA from "./data.json"

const Container = styled.div`
    width: 495px;
    height: 95px;
    background-color : ${props => props.color};
    border-bottom : 1px solid #ccc;
    display: flex;
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
    margin-right: -26px;
`
const UnreadBox = styled.div`
    width:28px;
    height:28px;
    border-radius:50%;
    background-color: ${props => props.unreadBoxBg};
    color: ${props => props.unreadBoxColor};
    display:flex;
    align-items:center;
    justify-content:center;
    position: relative;
    top: 58px;
`
export default function Contacts({ name, src, createdAt, lastMessege, onHandleContactClick ,clickContact}) {
    let unreadMesseges = 10;
    const [color, setColor] = useState("#fff");
    const [unreadBoxBg, setUnreadBoxBg] = useState("#ccc");
    const [unreadBoxColor, setUnreadBoxColor] = useState("#fff")
    function handleClick(e) {
        onHandleContactClick(e.target.value)
        setColor("#eee");
        setUnreadBoxBg("tranparent");
        setUnreadBoxColor("transparent");
        clickContact()
    }

    return (
        <Container color={color} onClick={handleClick} >
            <AvatarImg>
                <img src={src} alt="avatar" width="48px" height="48px" />
            </AvatarImg>
            <ChatInfo>
                <AvatarName>{name}</AvatarName>
                <RecentChat>{lastMessege}</RecentChat>
            </ChatInfo>
            <RecentDate>{createdAt}</RecentDate>
            <UnreadBox unreadBoxBg={unreadBoxBg} unreadBoxColor={unreadBoxColor} >{unreadMesseges}</UnreadBox>
        </Container>
    )
}

