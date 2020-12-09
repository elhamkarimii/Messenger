
export default function reducer(state, action) {
    return ACTION[action.type](state, action)
}
const ACTION = {
    'HOMEPAGE_MODE': homePageMode,
    'CONTACT-FOUND': contactFound,
    'MESSEGE-SENT': messegeSent,
    'SEARCH_VALUE_PASSED': searchValuePassed,
    'UNREAD_MESSAGES': unreadMesseges,
    'SEARCH_MODE': searchMode,
    'VIEW_MODE': viewMode,
    'HANDLE_SEARCH_CHANGE': handleSearchChange,
    'WRITING_MESSEGE': writingMessege,
    'CLEARING_MESSEGE_INPUT': clearingMessegeInput
}

function homePageMode(state) {
    return {
        ...state,
        contactFound: {}
    }
}

function contactFound(state, action) {
    const { data } = state;
    const dataCopied = [...data];
    const itemFound = dataCopied.find(item => item.id === action.payload);
    return {
        ...state,
        contactFound: itemFound,
        userId: action.payload
    }
}

function messegeSent(state, action) {
    const { userId, contactFound, data } = state
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
    console.log(userId)
    const newData = [...data]
    const itemFound = { ...data.find(item => item.id === userId) }
    const Index = data.findIndex(item => item.id === userId)
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
    }
}

function searchValuePassed(state, action) {
    return {
        ...state,
        searchValue: action.payload
    }
}

function unreadMesseges(state) {
    return {
        ...state,
        unreadMessege: 0
    }
}

function searchMode(state) {
    return {
        ...state,
        mode: "search"
    }
}

function viewMode(state) {
    return {
        ...state,
        mode: "view"
    }
}

function handleSearchChange(state, action) {
    return {
        ...state,
        value: action.payload
    }
}

function writingMessege(state, action) {
    return {
        onChange: action.payload
    }
}

function clearingMessegeInput(state) {
    return {
        onChange: ""
    }
}
