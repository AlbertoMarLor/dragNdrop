import React from 'react'
import { useDrop } from 'react-dnd'


export const Footer = ({ text, setText, moveText }) => {

    const [, drop] = useDrop(
        () => ({
            accept: 'text',
            drop(item, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset()
                const left = Math.round(item.left + delta.x)
                const top = Math.round(item.top + delta.y)
                moveText(item.id, left, top)
                return undefined
            },
        }),
        [moveText],
    )

    return (
        <div><section>
            <div className="area-name">
                <h2>Footer</h2>
            </div>
            <div className="area" ref={drop}>
                <p>Drag and drop an element within this area.</p>
            </div>
        </section></div>
    )
}
