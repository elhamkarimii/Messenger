import React, { useState } from "react";
import styled from "styled-components"

const ViewBox = styled.div`
    display: flex;
    width: 460px;
    height: 19px;
    background-color: #EDEDED;
    border-bottom :1px solid #ccc;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const SearchBox = styled.div`
    padding: 20px;
    width: 460px;
    height: 19px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    background-color: #EDEDED;
`
const Header = styled.h1`

`
const Input = styled.input`
    width: 420px;
    height: 33px;
    border: none;
    outline: none;
    background-color: #EDEDED;
    font-size: 20px;
`
export default function FancyMessengerBox() {
    const [mode, setMode] = useState('view')

    function handleSearchMode() {
        setMode('search')
    }

    function handleViewMode() {
        setMode('view')
    }

    return (
        <>
            { mode === 'view' && <ViewBox>
                <p>...</p>
                <Header>Fancy Messenger</Header>
                <p onClick={handleSearchMode} >#</p>
            </ViewBox>}
            { mode === 'search' && <SearchBox>
                <p onClick={handleViewMode} >%</p>
                <Input type="text" autoFocus={true} />
            </SearchBox>}

        </>
    )
}