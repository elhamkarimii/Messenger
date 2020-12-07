import React, { useReducer } from "react";

export default function reducer(state, action) {
    switch (action.type) {
        case 'HOMEPAGE_MODE':
            return {
                ...state,
                mode: "homePage"
            };
        case 'CHATVIEW_MODE':
            return {
                ...state,
                mode: "chatView"
            };
        case 'CONTACT-FOUND':
            const {data} = state
            const dataCopied = [...data]
            const ItemFound = dataCopied.find(item => item.id === action.payload);
            return {
                ...state,
                contactFound: ItemFound,
                userId: action.payload
            };
        case 'MESSEGE-SENT':
            const {userId,contactFound, data:myData} = state
            const today = new Date();
            const time = today.getHours() + ":" + today.getMinutes();
            console.log(userId)
            const newData = [...myData]
            const itemFound = { ...myData.find(item => item.id === userId) } 
            const Index = myData.findIndex(item => item.id === userId)
            const newMessegeSent = {
                messegeText: action.payload,
                createdAt: time,
                self: true,
            }
            const messegeItem = [...itemFound.messeges]
            messegeItem.push(newMessegeSent)
            itemFound.messeges = messegeItem
            newData[Index] = itemFound;
            const newContacts = { ...contactFound }

            const newMesseges = [...contactFound.messeges]
            newMesseges.push(newMessegeSent)
            newContacts.messeges = newMesseges;

            newData.splice(Index, 1)
            newData.unshift(itemFound)
            return {
                ...state,
                data: newData,
                contactFound: newContacts
            };
        case 'SEARCH_VALUE_PASSED':
            return {
                ...state,
                searchValue: action.payload
            };
        case 'UNREAD_MESSAGES':
            return {
                ...state,
                unreadMessege: 0
            };
        case 'SEARCH_MODE':
            return {
                ...state,
                mode: "search"
            };
        case 'VIEW_MODE':
            return {
                ...state,
                mode: "view"
            };
        case 'HANDLE_SEARCH_CHANGE':
            return {
                ...state,
                value: action.payload
            };
        case 'WRITING_MESSEGE':
            return {
                onChange: action.payload
            };
        case 'CLEARING_MESSEGE_INPUT':
            return {
                onChange: ""
            }
    }
}