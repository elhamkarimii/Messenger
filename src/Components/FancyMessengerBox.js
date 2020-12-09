import React, { useContext, useReducer } from "react";
import styled from "styled-components"
import * as fa from 'react-icons/fa';
import reducer from "./reducer"

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
export default function FancyMessengerBox({ onInputChange }) {
    
    const [{ mode, value }, dispatch] = useReducer(reducer, {
        mode: "view",
        value: ""
    })

    function handleSearchMode() {
        dispatch({
            type: 'SEARCH_MODE'
        })
    }

    function handleViewMode() {
        dispatch({
            type: 'VIEW_MODE'
        })
    }

    function handleInputChange(e) {
        onInputChange(e.target.value)
        dispatch({
            type: 'HANDLE_SEARCH_CHANGE',
            payload: e.target.value
        })
    }

    return (
        <>
            { mode === 'view' && <ViewBox>
                <p>
                    <fa.FaThList />
                </p>
                <Header>Fancy Messenger</Header>
                <p onClick={handleSearchMode} >
                    <fa.FaSearch />
                </p>
            </ViewBox>}
            { mode === 'search' && <SearchBox>
                <p onClick={handleViewMode} >
                    <fa.FaChevronCircleLeft />
                </p>
                <Input type="text" autoFocus={true} value={value} onChange={handleInputChange} />
            </SearchBox>}

        </>
    )
}