import React, { useRef, useState } from 'react'
import { PiTextAlignJustifyBold } from "react-icons/pi"
import { FaRegImage } from "react-icons/fa"
import { BiTable } from "react-icons/bi"
import { useDrop } from 'react-dnd'
import { DraggableText } from '../helpers/DraggableText '
import { DraggableImage } from '../helpers/DraggableImage'



export const Aside = ({ image, setImage, moveImage, text, setText, moveText }) => {



    const [, drop] = useDrop(
        () => ({
            accept: ['image', 'text'],
            drop(item, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset()
                const left = Math.round(item.left + delta.x)
                const top = Math.round(item.top + delta.y)
                    (item.type === 'image') ? moveImage(item.id, left, top) : moveText(item.id, left, top)
                return undefined
            },
        }),
        [moveText, moveImage],
    )

    return (
        <section className='aside'>
            <div className="area-name">
                <h2 className='elements'>Elements</h2>
            </div>

            <div className="row">
                <div ref={drop} className="elements">
                    <div className="element" >
                        <p>Text</p>
                    </div>
                    {Object.keys(text).map((key) => {
                        const { left, top } = text[key]
                        return (
                            <DraggableText key={key} id={key} left={left} top={top}>
                                <textarea rows="10" cols="50" type="text" placeholder='Place me on the body or the on footer, then write something' />
                            </DraggableText>
                        )
                    })}
                </div>
                <div ref={drop} className="elements">
                    <div className="element"  >
                        {/* <input type="file" accept='image/*' ref={inputFileRef} onChange={onFileChange} style={{ display: 'none' }} /> */}

                        <p>Image</p>
                        {Object.keys(image).map((key) => {
                            const { left, top, src } = image[key]
                            return (
                                <DraggableImage key={key} id={key} left={left} top={top}>
                                    <img src={src} />
                                </DraggableImage>
                            )
                        })}
                    </div>
                </div>

            </div>

        </section>
    )
}
