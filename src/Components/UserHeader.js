import React from "react";
import styled from "styled-components";
import * as fa from 'react-icons/fa';

const Container = styled.div`
    height:20px;
    width:calc(100% - 500);
    background-color:#eee;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 20px;
`
const BackIcon = styled.div`
    font-weight:bold;
`
const UserInfo = styled.div`
    display: flex;
    align-items: center;
`
const MoreInfo = styled.div`

`
const UserAvatar = styled.img`

`

const UserName = styled.h1`
    
`

export default function UserHeader({ onBackToHomePage, name, avatarSrc }) {
    function handleBackToHomePage(e) {
        onBackToHomePage(e.target.value)
    }
    return (
        <>
            <Container>
                <BackIcon onClick={handleBackToHomePage}>
                    <fa.FaRegWindowClose />
                </BackIcon>
                <UserInfo>
                    <UserAvatar src={avatarSrc} alt="avatar" width="48px" height="48px" />
                    <UserName>{name}</UserName>
                </UserInfo>
                <MoreInfo>
                    <fa.FaEllipsisV />
                </MoreInfo>
            </Container>
        </>
    )
}