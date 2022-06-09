import React, { Fragment, useState } from "react";
import './assets/css/index.css'
import aperture from './assets/icon/aperture.svg'
import circle from './assets/icon/circle.svg'
import copy from './assets/icon/copy.svg'
import gitcommit from './assets/icon/gitcommit.svg'
import repeat from './assets/icon/repeat.svg'
import rotate from './assets/icon/rotate.svg'
import sliders from './assets/icon/sliders.svg'
import sun from './assets/icon/sun.svg'
import vector from './assets/icon/Vector.svg'





const imagens = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', 'https://cdn.pixabay.com/photo/2016/09/07/11/37/sunset-1651426__340.jpg',
    'https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522__340.jpg', 'https://cdn.pixabay.com/photo/2016/09/08/13/58/desert-1654439__340.jpg',
    'https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973__340.jpg', "https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285__340.jpg", "https://cdn.pixabay.com/photo/2017/02/15/11/15/wintry-2068298__340.jpg",
    "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828__340.jpg", "https://cdn.pixabay.com/photo/2014/01/30/18/26/skyline-255116__340.jpg",]

const App = () => {
    const [image, setImage] = useState(0)
    const [blur, setBlur] = useState(0)
    const [brig, setBrig] = useState(0)
    const [atr, setAtr] = useState(0)

    function handleChangeBlur(evt) {
        setBlur({ value: evt.target.value.this })
        setBrig(evt.target.value)
        setAtr(evt.target.dataset.filter)
        console.dir(atr)
    }

    function filterapp() {
        if (atr === 'blur') {
            return `${atr}(${brig}px)`
        }
        else if (atr === "hue-rotate") {
            return `${atr}(${brig}deg)`
        } else {
            return `${atr}(${brig}%)`
        }
    }

    return (
        <Fragment>
            <div className="conteiner">
                <div className="subConteiner1">
                    <div className="viewer">
                        <img className="viewerImg" src={image} alt='' style={{ filter: filterapp() }} />
                    </div>
                    <div className="bars">
                        {imagens.map(function (image) {
                            return <img onClick={() => {
                                setImage(image)
                                setBlur({ value: "0" })
                            }} src={image} alt='' />
                        })}
                    </div>
                </div>
                <div className="edit">
                    <h2 className="top">Edição</h2>
                    <div className="scale">
                        <div className='symbols'><img src={vector} alt="icon"/><h3>Blur</h3></div>
                        <input type='range' min='0' max="10" onChange={handleChangeBlur} data-filter="blur" value={blur.value} />
                    </div>
                    <div className="scale">
                         <div className='symbols'><img src={sun} alt="icon"/><h3>Brightness</h3> </div>
                        <input  type='range' min='0' max="300" onChange={handleChangeBlur} data-filter="brightness" value={blur.value} />
                    </div>
                    <div className="scale">
                         <div className='symbols'><img src={sliders} alt="icon"/><h3>Contrast</h3></div>
                        <input type='range' min='0' max="300" onChange={handleChangeBlur} data-filter="contrast" value={blur.value} />
                    </div>
                    <div className="scale">
                         <div className='symbols'><img src={aperture} alt="icon"/><h3>Grayscale</h3></div>
                        <input type='range' min='0' max="100" onChange={handleChangeBlur} data-filter="grayscale" value={blur.value} />
                    </div>
                    <div className="scale">
                         <div className='symbols'><img src={repeat} alt="icon"/><h3>Invert</h3></div>
                        <input type='range' min='0' max="100" onChange={handleChangeBlur} data-filter="invert" value={blur.value} />
                    </div>
                    <div className="scale">
                         <div className='symbols'><img src={gitcommit} alt="icon"/><h3>Opacity</h3></div>
                        <input type='range' min='0' max="100" onChange={handleChangeBlur} data-filter="opacity" value={blur.value} />
                    </div>
                    <div className="scale">
                         <div className='symbols'><img src={circle} alt="icon"/><h3>Saturate</h3></div>
                        <input type='range' min='0' max="300" onChange={handleChangeBlur} data-filter="Saturate" value={blur.value} />
                    </div>
                    <div className="scale">
                         <div className='symbols'><img src={copy} alt="icon"/><h3>Sepia</h3></div>
                        <input type='range' min='0' max="100" onChange={handleChangeBlur} data-filter="sepia" value={blur.value} />
                    </div>
                    <div className="scale">
                         <div className='symbols'><img src={rotate} alt="icon"/><h3>Hue-Rotate</h3></div>
                        <input type='range' min='0' max="360" onChange={handleChangeBlur} data-filter="hue-rotate" value={blur.value} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default App