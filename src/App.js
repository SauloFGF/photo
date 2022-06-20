import React, { Fragment } from "react";
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
    const [image, setImage] = React.useState(0)
    const [filtro, setFiltro] = React.useState({
        blur: "",
        brightness: "",
        contrast: "",
        grayscale: "",
        invert: "",
        opacity: "",
        saturate: "",
        sepia: "",
        hueRotate: ""
    })

    function handleChangeBlur({target}) {
        const {id, value} = target;
    setFiltro({...filtro, [id] : value })}

        //function filtros(){
        //(filtro.blur) ? `${[id]}(${value}px)`
        //: (filtro.hueRotate) ? `${[id]}(${value}deg)`
        //: `${[id]}(${value}%)`}

    return (
        <Fragment>
            <div className="conteiner">
                <div className="subConteiner1">
                    <div className="viewer">
                        <button className="arrow">{"<"}</button>
                        <img className="viewerImg" src={image} alt='' style={{ filter: `blur(${filtro})` }} />
                        <button className="arrow">{">"}</button>
                    </div>
                    <div className="navBar">
                        <button className="arrow">{"<"}</button>
                        <div className="bars">
                            {imagens.map((image) => {
                                return <img key={image} onClick={() => {
                                    setImage(image)
                                }} className="imgBar" src={image} alt='' />
                            })}
                        </div>
                        <button className="arrow">{">"}</button>
                    </div>
                </div>
                <div className="edit">
                    <h2 className="top">Edição</h2>
                    <div className="scale">
                        <div className='symbols'><img src={vector} alt="icon" /><h3>Blur</h3></div>
                        <input id="blur" name="blur" type='range' min='0' max="10" onChange={handleChangeBlur} data-filter="blur" value={filtro.blur} />
                    </div>
                    <div className="scale">
                        <div className='symbols'><img src={sun} alt="icon" /><h3>Brightness</h3> </div>
                        <input id="brightness" name="brightness" type='range' min='0' max="300" onChange={handleChangeBlur} data-filter="brightness" value={filtro.brightness} />
                    </div>
                    <div className="scale">
                        <div className='symbols'><img src={sliders} alt="icon" /><h3>Contrast</h3></div>
                        <input id="contrast" name="contrast" type='range' min='0' max="300" onChange={handleChangeBlur} data-filter="contrast" value={filtro.contrast} />
                    </div>
                    <div className="scale">
                        <div className='symbols'><img src={aperture} alt="icon" /><h3>Grayscale</h3></div>
                        <input id="grayscale" name="grayscale" type='range' min='0' max="100" onChange={handleChangeBlur} data-filter="grayscale" value={filtro.grayscale} />
                    </div>
                    <div className="scale">
                        <div className='symbols'><img src={repeat} alt="icon" /><h3>Invert</h3></div>
                        <input id="invert" name="invert" type='range' min='0' max="100" onChange={handleChangeBlur} data-filter="invert" value={filtro.invert} />
                    </div>
                    <div className="scale">
                        <div className='symbols'><img src={gitcommit} alt="icon" /><h3>Opacity</h3></div>
                        <input id="opacity" name="opacity" type='range' min='0' max="100" onChange={handleChangeBlur} data-filter="opacity" value={filtro.opacity} />
                    </div>
                    <div className="scale">
                        <div className='symbols'><img src={circle} alt="icon" /><h3>Saturate</h3></div>
                        <input id="saturate" name="Saturate" type='range' min='0' max="300" onChange={handleChangeBlur} data-filter="Saturate" value={filtro.saturate} />
                    </div>
                    <div className="scale">
                        <div className='symbols'><img src={copy} alt="icon" /><h3>Sepia</h3></div>
                        <input id="sepia" name="sepia" type='range' min='0' max="100" onChange={handleChangeBlur} data-filter="sepia" value={filtro.sepia} />
                    </div>
                    <div className="scale">
                        <div className='symbols'><img src={rotate} alt="icon" /><h3>Hue-Rotate</h3></div>
                        <input id="hueRotate" name="hueRotate" type='range' min='0' max="360" onChange={handleChangeBlur} data-filter="hue-rotate" value={filtro.hueRotate} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default App