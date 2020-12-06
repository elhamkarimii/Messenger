import React, { useState } from "react";
import Contacts from "./Contacts";

export default function ContactContainer({ onHandleContClick, clickHandler, data, onChange , userId}) {

    const filteredContacts = data.filter(item => item.name.toLowerCase().includes(onChange.toLowerCase()))

    return (<>
        {  filteredContacts.map(item => <Contacts
            key={item.id}
            name={item.name}
            src={item.src}
            id={item.id}
            createdAt={item.messeges[item.messeges.length - 1].createdAt}
            lastMessege={item.messeges[item.messeges.length - 1].messegeText}
            onHandleContactClick={onHandleContClick}
            clickContact={() => clickHandler(item.id)} 
            messegeLength={item.messeges.length}
            userId={userId}
            />)
            }
    </>
    )
}