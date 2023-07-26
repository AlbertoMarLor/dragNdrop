import React from 'react'
import { useDrop } from 'react-dnd'

export const Body = ({ moveImage, moveText }) => {

    const [, drop] = useDrop(
        () => ({
            accept: ['image', 'text'],
            drop(item, monitor) {


                const delta = monitor.getDifferenceFromInitialOffset()
                const left = Math.round(item.left + delta.x)
                const top = Math.round(item.top + delta.y)
                if (item.type === 'image') {
                    moveImage(item.id, left, top)
                } else {
                    moveText(item.id, left, top)
                }
                return undefined
            },
        }),
        [moveText, moveImage],
    )

    return (
        <section>
            <div className="area-name">
                <h2>Body</h2>
            </div>
            <div ref={drop} className="area">
                <p>Drag and drop an element within this area.</p>
            </div>
        </section>
    )
}
