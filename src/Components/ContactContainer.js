import React, { useContext } from "react";
import Contacts from "./Contacts";
import {DataContext} from "./Context"

export default function ContactContainer({ clickHandler, onChange }) {
    const data = useContext(DataContext)
    const filteredContacts = data.filter(item => item.name.toLowerCase().includes(onChange.toLowerCase()))

    return (<>
        {  filteredContacts.map(item => <Contacts
            key={item.id}
            name={item.name}
            src={item.src}
            id={item.id}
            createdAt={item.messeges[item.messeges.length - 1].createdAt}
            lastMessege={item.messeges[item.messeges.length - 1].messegeText}
            clickContact={() => clickHandler(item.id)}
            messegeLength={item.messeges.length}
        />)
        }
    </>
    )
}