import React from 'react'
import './gallery.css'
import WovenImageList from './MaterialUI/ImagesGallery'

function Gallery() {

return (
    <div className='container-fluid'>
        <div className='row galleryHead'>
            <div className='col-12 d-flex align-items-center  p-md-5 p-2'>
                <h1 style={{ fontFamily: 'Pirata One, cursive', color: 'white' }} className=' GalleryTitle col-md-3 col-12 pb-2 pb-md-0'>Gallery</h1>
            </div>
        </div>
        <div style={{backgroundColor:'#f8f4f3'}} className='row galleryBody d-flex justify-content-center'>
            <div className='col-md-9 col-11 d-flex justify-content-center p-3'>
                <WovenImageList/>
        </div>
        </div>
    </div>
)
}

export default Gallery