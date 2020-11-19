import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel' >
            <Story
                image='https://developer.microsoft.com/games/staticres/img/sp/blog/MGS_gdc_20202x.jpg'
                profileSrc='https://www.gstatic.com/tv/thumb/persons/614/614_v9_bc.jpg'
                title='Bill Gates'
            />
            <Story
                image='https://assets.yellowtrace.com.au/wp-content/uploads/2019/07/25141848/Abstract-Portrait-Paintings-by-Joseph-Lee-Yellowtrace-05.jpg'
                profileSrc='https://i.pinimg.com/originals/f1/09/9d/f1099d54fe85cd3d2d4d8b401595bb88.jpg'
                title='Jeff Bezos '
            />
            <Story
                image='https://cdn.shopify.com/s/files/1/0128/3672/products/DIMENSIONAL_ABSTRACT_PORTRAIT_no._IV_1024x1024.png?v=1507719723'
                profileSrc='https://www.abc.net.au/news/image/9815730-3x2-940x627.jpg'
                title='Elon Musk '
            />

        </div>
    )
}

export default StoryReel