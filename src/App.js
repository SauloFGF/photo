import React, { Fragment, useState } from "react";
import './assets/css/index.css'

const imagens = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', 'https://cdn.pixabay.com/photo/2016/09/07/11/37/sunset-1651426__340.jpg',
                'https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522__340.jpg', 'https://cdn.pixabay.com/photo/2016/09/08/13/58/desert-1654439__340.jpg', 
                'https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973__340.jpg',"https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285__340.jpg","https://cdn.pixabay.com/photo/2017/02/15/11/15/wintry-2068298__340.jpg",
            "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828__340.jpg", "https://cdn.pixabay.com/photo/2014/01/30/18/26/skyline-255116__340.jpg",]

const App = () => {
    const [image, setImage] = useState(0)
    const [blur, setBlur] = useState(0)
    const [brig, setbrig] = useState(0)

    function handleChangeblur (evt) {
        if(handleChange){
        setBlur(evt.target.value)
        }
    }
    function handleChange (evt) {
        if(handleChange){
        setbrig(evt.target.value)
        }
    }


    return(
<Fragment>
        <div>
            <h1>Gallery</h1>
            <div className="gallery-container">
            {imagens.map(function(image){
                return <img onClick={() => setImage(image)} className='img-gallery' src={image} alt='' />
            })}
            </div>
            <div className="grad">
                <img className="viewer" src={image} alt='' 
                 style={{filter: `blur(${blur}px)`        
                 }} />
                <div className="filters">
                <h3>Blur</h3>
                <input type='range' min='0' max="10" onChange={handleChangeblur} id="rangeBlur" value={blur}/>
                <h3>Brightness</h3>
                <input type='range' min='0' max="10" onChange={handleChange} id="rangeBrightness" value={style}/>
                <h3>Contrast</h3>
                <input type='range' min='0' max="10" onChange={handleChange} id="rangeContrast" value={style}/>
                <h3>Grayscale</h3>
                <input type='range' min='0' max="10" onChange={handleChange} id="rangeGrayscale" value={style}/>
                <h3>Invert</h3>
                <input type='range' min='0' max="10" onChange={handleChange} id="rangeInvert" value={style}/>
                <h3>Opacity</h3>
                <input type='range' min='0' max="10" onChange={handleChange} id="rangeOpacity" value={style}/>
                <h3>Saturate</h3>
                <input type='range' min='0' max="10" onChange={handleChange} id="rangeSaturate" value={style}/>
                <h3>Sepia</h3>
                <input type='range' min='0' max="10" onChange={handleChange} id="rangeSepia" value={style}/>
                <h3>Hue-Rotate</h3>
                <input type='range' min='0' max="10" onChange={handleChange} id="rangeHue-Rotate" value={style}/>
                <h3>Drop-Shadow</h3>
                <input type='range' min='0' max="10" onChange={handleChange} id="rangeDrop-Shadow" value={style}/>
                </div>
            </div>
        </div>
    </Fragment>
    )
    

}

export default App