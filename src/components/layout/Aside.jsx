import React from 'react'
import { useDrop } from 'react-dnd'
import { DraggableText } from '../helpers/DraggableText '
import { DraggableImage } from '../helpers/DraggableImage'
import { DraggableTable } from '../helpers/DraggableTable'

//TODO refactorizar 

export const Aside = ({ image, moveImage, text, moveText, table, moveTable }) => {

    const [, drop] = useDrop(
        () => ({
            accept: ['image', 'text'],
            drop(item, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset()
                const left = Math.round(item.left + delta.x)
                const top = Math.round(item.top + delta.y)
                if (item.type === 'image') {
                    moveImage(item.id, left, top)
                } else if (item.type === 'text') {
                    moveText(item.id, left, top)
                } else { moveTable(item.id, left, top) }
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
                <div ref={drop} className="elements">
                    <div className="element"  >
                        <p>Table</p>
                        {Object.keys(table).map((key) => {
                            const { left, top } = table[key]
                            return (
                                <DraggableTable key={key} id={key} left={left} top={top}>
                                    <table border="1">

                                        <tbody>
                                            <tr>
                                                <td contentEditable='true'>Drag me to the body, then write something</td>
                                                <td contentEditable='true'></td>
                                                <td contentEditable='true'></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true'></td>
                                                <td contentEditable='true'></td>
                                                <td contentEditable='true'></td>
                                            </tr>
                                            <tr>
                                                <td contentEditable='true'></td>
                                                <td contentEditable='true'></td>
                                                <td contentEditable='true'></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </DraggableTable>
                            )
                        })}

                    </div>
                </div>
            </div>

        </section>
    )
}
