import styled from "styled-components";
import React, { useState } from "react";
// import Contacts from "./Components/Contacts";
import ContactContainer from "./Components/ContactContainer";
import UserHeader from "./Components/UserHeader";
import FancyMessengerBox from "./Components/FancyMessengerBox";
import { MessegeBar, SendMessege } from "./Components/MessegeBar";
import HomePage from "./Components/HomePage";
import DATA from "./Components/data.json"

const MainContainer = styled.div`
    display:flex;
    margin: 0;
`
const LeftContainer = styled.div`
    border: 1px solid #ccc;
    display: inline-block;
`
const RightContainer = styled.div`
    border: 1px solid #ccc;
    display: inline-block;
    background-color: #c5f6d8;
    width:100%;
`
const HeaderBox = styled.div`
    width:100%;
    height: 40px;
    background-color: #32BEA6;
`
export default function App() {
    const [mode, setMode] = useState("homePage");
    const [contactFound, setContactFound] = useState({});

    function handleBack() {
        setMode("homePage")
    }

    function handleContactClick() {
        setMode("chatView")
    }

    function handleFindContact(id) {
        const dataCopied = [...DATA]
        const itemFound = dataCopied.find(item => item.id === id);
        setContactFound(itemFound)
    }

    return (
        <>
            <HeaderBox />
            <MainContainer>
                <LeftContainer>
                    <FancyMessengerBox />
                    <ContactContainer onHandleContClick={handleContactClick} clickHandler={handleFindContact} />
                </LeftContainer>
                <RightContainer>
                    {mode === "chatView" &&
                        <>
                            <UserHeader onBackToHomePage={handleBack} name={contactFound.name} avatarSrc={contactFound.src} />
                         <MessegeBar
                         messeges={contactFound.messeges}
                                // userMessege={contactFound.messeges[2].messegeText}
                                // selfMessege={contactFound.messeges[2].messegeText}
                            />
                            <SendMessege />
                        </>
                    }
                    {mode === "homePage" && <HomePage />}
                </RightContainer>
            </MainContainer>
        </>
    )
}