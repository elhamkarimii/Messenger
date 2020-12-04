import React from "react";
import Contacts from "./Contacts";
import DATA from "./data.json"

export default function ContactContainer({ onHandleContClick, clickHandler}) {

    const allContacts = DATA.map(item => <Contacts
        key={item.id}
        name={item.name}
        src={item.src}
        id={item.id}
        createdAt={item.messeges[item.messeges.length - 1].createdAt}
        lastMessege={item.messeges[item.messeges.length - 1].messegeText}
        onHandleContactClick={onHandleContClick}
        clickContact={() => clickHandler(item.id)}
    />)

    return (
        <>
            {allContacts}
        </>
    )
}