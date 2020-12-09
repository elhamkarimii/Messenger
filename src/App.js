import styled, { createGlobalStyle } from "styled-components";
import React, { useReducer } from "react";
import ContactContainer from "./Components/ContactContainer";
import UserHeader from "./Components/UserHeader";
import FancyMessengerBox from "./Components/FancyMessengerBox";
import { MessegeBar } from "./Components/MessegeBar";
import HomePage from "./Components/HomePage";
import DATA from "./Components/data.json"
import { GlobalFont } from './fonts/fonts'
import reducer from "./Components/reducer"
import {DataContext, IdContext} from './Components/Context'

const Wrapper = styled.div`
    margin: -8px;
    width: 100%;
    border: 7px solid #fff;
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

    const [{ data, contactFound, userId, searchValue }, dispatch] = useReducer(reducer, {
        data: DATA,
        contactFound: {},
        userId: 0,
        searchValue: ""
    })

    function handleBack() {
        dispatch({
            type: "HOMEPAGE_MODE"
        })
    }

    function handleFindContact(id) {
        dispatch({
            type: "CONTACT-FOUND",
            payload: id
        })
    }

    function handleKeyPress(onChange) {
        dispatch({
            type: "MESSEGE-SENT",
            payload: onChange
        })
    }

    function handleInputChange(value) {
        dispatch({
            type: "SEARCH_VALUE_PASSED",
            payload: value

        })
    }

    return (
        <IdContext.Provider value={userId}>
        <DataContext.Provider value={data}>
        <Wrapper>
            <GlobalFont />
            <HeaderBox />
            <MainContainer>
                <LeftContainer>
                    <FancyMessengerBox onInputChange={handleInputChange} />
                    <ContactContainer onChange={searchValue} clickHandler={handleFindContact} />
                </LeftContainer>
                <RightContainer>
                    {Object.getOwnPropertyNames(contactFound).length > 0 &&
                        <>
                            <UserHeader onBackToHomePage={handleBack} name={contactFound.name} avatarSrc={contactFound.src} />
                            <MessegeBar messeges={contactFound.messeges} onKeyPress={handleKeyPress} />
                        </>
                    }
                    {Object.getOwnPropertyNames(contactFound).length === 0 && <HomePage />}
                </RightContainer>
            </MainContainer>
        </Wrapper>
        </DataContext.Provider>
        </IdContext.Provider>
    )
}