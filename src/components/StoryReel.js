import React from 'react'
import Story from './Story'
import '../styles/StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story image="https://images.unsplash.com/photo-1612635466104-e3aab50680b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                profileSrc="https://images.unsplash.com/profile-1636551572283-29fbbfec15dfimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" title="Bob Jeffries" />
            <Story image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                profileSrc="https://images.unsplash.com/profile-1442952939675-91392dd0cfcf?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" title="Green Chameleon" />
            <Story image="https://images.unsplash.com/photo-1613755317778-0003e3bfc2c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                profileSrc="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" title="Nyan Shah" />
            <Story image="https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                profileSrc="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" title="Ingo Stiller" />
            <Story image="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                profileSrc="https://images.unsplash.com/profile-fb-1470712920-1e27070c0fe8.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" title="Mark Basarab" />
        </div>
    )
}

export default StoryReel