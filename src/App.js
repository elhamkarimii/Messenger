import styled, { createGlobalStyle } from "styled-components";
import React, { useState } from "react";
// import Contacts from "./Components/Contacts";
import ContactContainer from "./Components/ContactContainer";
import UserHeader from "./Components/UserHeader";
import FancyMessengerBox from "./Components/FancyMessengerBox";
import { MessegeBar } from "./Components/MessegeBar";
import HomePage from "./Components/HomePage";
import DATA from "./Components/data.json"
import { GlobalFont } from './fonts/fonts'
import * as fa from 'react-icons/fa';

// const GlobalStyle = createGlobalStyle`
//     body{
//         margin: 0;
//         padding: 0;
//     }
//     *{
//         box-sizing: border-box;
//     }
// `
const Wrapper = styled.div`
    margin: -8px;
    width: 100%;
    border: 7px solid #fff;
    /* max-width: 100%; */
`
const MainContainer = styled.div`
    display:flex;
    margin: -8px;
    font-family:"Segoe";
`
const LeftContainer = styled.div`
    border: 1px solid #ccc;
    display: inline-block;
`
const RightContainer = styled.div`
/* overflow-x:scroll; */
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    background-color: #c5f6d8;
    width:100%;
    max-width: 100%;
    position: relative;
`
const HeaderBox = styled.div`
    width:100%;
    min-width:100%;
    height: 40px;
    background-color: #32BEA6;
    margin: -8px;
`
export default function App() {
    const [data, setData] = useState(DATA)
    const [mode, setMode] = useState("homePage");
    const [contactFound, setContactFound] = useState({});
    const [userId, setUserId] = useState(0)
    const [searchValue, setSearchValue] = useState("")

    function handleBack() {
        setMode("homePage")
    }

    function handleContactClick() {
        setMode("chatView")
    }

    function handleFindContact(id) {
        const dataCopied = [...data]
        const itemFound = dataCopied.find(item => item.id === id);
        setContactFound(itemFound)
        setUserId(id)
    }
// Object.getOwnPropertyNames(obj).length
    function handleKeyPress(onChange) {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();

        const newData = [...data]
        const itemFound = { ...data.find(item => item.id === userId) }
        const Index = data.findIndex(item => item.id === userId)
        const newMessegeSent = {
            messegeText: onChange,
            createdAt: time,
            self: true,
        }
        const messegeItem = [...itemFound.messeges]
        messegeItem.push(newMessegeSent)
        itemFound.messeges = messegeItem
        newData[Index] = itemFound;
 
        setData(newData)
        const newContacts = { ...contactFound }
        const newMesseges = [...contactFound.messeges]
        newMesseges.push(newMessegeSent)
        newContacts.messeges = newMesseges;
        setContactFound(newContacts);
        
        newData.splice(Index , 1)
        newData.unshift(itemFound)
        
    }

    function handleInputChange(value) {
        setSearchValue(value)
    }

    return (
        <Wrapper>
            {/* <GlobalStyle /> */}
            <GlobalFont />
            <HeaderBox />
            <MainContainer>
                <LeftContainer>
                    <FancyMessengerBox data={data} onInputChange={handleInputChange} />
                    <ContactContainer onChange={searchValue} onHandleContClick={handleContactClick} clickHandler={handleFindContact} data={data} userId={userId} />
                </LeftContainer>
                <RightContainer>
                    {mode === "chatView" &&
                        <>
                            <UserHeader onBackToHomePage={handleBack} name={contactFound.name} avatarSrc={contactFound.src} />
                            <MessegeBar messeges={contactFound.messeges} onKeyPress={handleKeyPress} />
                        </>
                    }
                    {mode === "homePage" && <HomePage />}
                </RightContainer>
            </MainContainer>
        </Wrapper>
    )
}