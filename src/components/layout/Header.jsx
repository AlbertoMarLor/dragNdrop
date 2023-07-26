import React, { useState } from 'react'
import { useDrop } from 'react-dnd'


export const Header = ({ image, setImage, moveImage, paragraph, setParagraph, border, setBorder }) => {



    const [, drop] = useDrop(
        () => ({
            accept: 'image',
            drop(item, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset()
                const left = Math.round(item.left + delta.x)
                const top = Math.round(item.top + delta.y)
                moveImage(item.id, left, top)
                setParagraph(false)
                setBorder({ border: 'none' })
                return undefined
            },
        }),
        [moveImage],
    )

    return (
        <section>
            <div className="area-name">
                <h2>Header</h2>
            </div>
            <div style={border} className="area" ref={drop}>
                {paragraph && <p>Drag and drop an element within this area.</p>}
            </div>
        </section >
    )
}
