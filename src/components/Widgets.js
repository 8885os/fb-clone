import React from 'react'
import '../styles/Widgets.css'


const Widgets = () => {
    return (
        <div className='widgets'>
            <iframe src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFaceBook%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
                width="340"
                height="100%"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                title="Embed-Posts">

            </iframe>
        </div>
    )
}

export default Widgets