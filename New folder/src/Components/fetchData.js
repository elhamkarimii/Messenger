
import { createdTime } from '../functions/functions';
export const initialState = {
    conversations:
        [
            {
                id: '1',
                imageUrl: require("../images/profiles/avatar.png"),
                imageAlt: 'Morteza',
                username: 'Morteza',
                unread: 5,
                messages: [
                    {
                        messageText: `Sed convallis sed mauris eget dapibus.`,
                        createdAt: createdTime(),
                        self: true
                    },
                    {
                        messageText: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tincidunt ut ipsum semper porta.
                    Sed convallis sed mauris eget dapibus. 
                    In gravida nulla sit amet justo varius pellentesque.
                    `,
                        createdAt: createdTime(),
                        self: false
                    },
                    {
                        messageText: `MQuisque euismod dapibus elit. Vestibulum et sodales nibh.
                     Nulla facilisi.`,
                        createdAt: createdTime(),
                        self: true
                    },
                    {
                        messageText: `
                    Nullam suscipit lorem a dolor imperdiet, ac porta ex varius. 
                    Duis porta elit in nisl feugiat pellentesque. 
                    Sed vehicula, lacus vitae hendrerit condimentum, mi odio condimentum augue, 
                    id lacinia nisi orci in diam.`,
                        createdAt: createdTime(),
                        self: false
                    },
                    {
                        messageText: `
                    Nullam suscipit lorem a dolor imperdiet, ac porta ex varius. 
                    Duis porta elit in nisl feugiat pellentesque. 
                    `,
                        createdAt: createdTime(),
                        self: true
                    },
                    {
                        messageText: `
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tincidunt ut ipsum semper porta.
                    `,
                        createdAt: createdTime(),
                        self: false
                    },
                    {
                        messageText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tincidunt ut ipsum semper porta.
                    `,
                        createdAt: createdTime(),
                        self: true
                    },
                    {
                        messageText: `mi odio condimentum augue, 
                        id lacinia nisi orci in diam.`,
                        createdAt: createdTime(),
                        self: false
                    },

                ]
            },
            {
                id: '2',
                imageUrl: require("../images/profiles/avatar.png"),
                imageAlt: 'Ghazaleh',
                username: 'Ghazaleh',
                unread: 2,
                messages: [
                    {
                        messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        createdAt: createdTime(),
                        self: true
                    },
                    {
                        messageText: `
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tincidunt ut ipsum semper porta.
                    `,
                        createdAt: createdTime(),
                        self: false
                    },
                    {
                        messageText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras tincidunt ut ipsum semper porta.`,
                        createdAt: createdTime(),
                        self: true
                    },
                    {
                        messageText: `
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras tincidunt ut ipsum semper porta.Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.Cras tincidunt ut ipsum semper porta. `,
                        createdAt: createdTime(),
                        self: false
                    },
                    {
                        messageText: `
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras tincidunt ut ipsum semper porta.
                    `,
                        createdAt: createdTime(),
                        self: true
                    },
                    {
                        messageText: `
                        Cras tincidunt ut ipsum semper porta.
                    `,
                        createdAt: createdTime(),
                        self: false
                    },
                    {
                        messageText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
                        createdAt: createdTime(),
                        self: true
                    },
                ]
            },
            {
                id: '3',
                imageUrl: require('../images/profiles/avatar.png'),
                imageAlt: 'Mohmmad Mahdi',
                username: 'Mohammad Mahdi',
                unread: 0,
                messages: [
                    {
                        messageText: 'Hi',
                        createdAt: createdTime(),
                        self: true
                    }
                ]
            },
            {
                id: '4',
                imageUrl: require('../images/profiles/avatar.png'),
                imageAlt: 'Mom',
                username: 'Mom',
                unread: 0,
                messages: [
                    {
                        messageText: 'Hi Mommy!',
                        createdAt: '2:49',
                        self: true
                    }
                ]
            },
            {
                id: '5',
                imageUrl: require('../images/profiles/avatar.png'),
                imageAlt: 'Dad',
                username: 'Dad',
                unread: 0,
                messages: [
                    {
                        messageText: `Hello Daddy, How've you been?`,
                        createdAt: '6:14 PM',
                        self: true
                    }
                ]
            },
            {
                id: '6',
                imageUrl: require('../images/profiles/avatar.png'),
                imageAlt: 'Fatemeh',
                username: 'Fatemeh',
                unread: 1,
                messages: [
                    {
                        messageText: `Nullam suscipit lorem a dolor imperdiet, ac porta ex varius. 
                    Duis porta elit in nisl feugiat pellentesque. 
                    `,
                        createdAt: '1 week ago',
                        self: true
                    },
                    {
                        messageText: ` 
                    Sed vehicula, lacus vitae hendrerit condimentum, mi odio condimentum augue, 
                    id lacinia nisi orci in diam.`,
                        createdAt: '1 week ago',
                        self: false
                    }
                ]
            },
        ],
    selectedConversation: {}
}


export const getInitData = () => {
    // initialState.selectedConversation = initialState.conversations[0];
    return new Promise(resolve =>
        setTimeout(() => {
            resolve(initialState);
        }, 5000)
    );
}

