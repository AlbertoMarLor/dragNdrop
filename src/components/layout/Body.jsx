import React from 'react'
import { useDrop } from 'react-dnd'

export const Body = ({ moveImage, moveText, moveTable, paragraph, setParagraph, border, setBorder }) => {

    const styles = () => {
        setParagraph(false)
        setBorder({ border: 'none' })
    }

    const [, drop] = useDrop(
        () => ({
            accept: ['image', 'text', 'table'],
            drop(item, monitor) {

                const delta = monitor.getDifferenceFromInitialOffset()
                const left = Math.round(item.left + delta.x)
                const top = Math.round(item.top + delta.y)
                if (item.type === 'image') {
                    moveImage(item.id, left, top)
                    styles()
                } else if (item.type === 'text') {
                    moveText(item.id, left, top)
                    styles()
                } else {
                    moveTable(item.id, left, top)
                    styles()
                }
                return undefined
            },
        }),
        [moveText, moveImage, moveTable],
    )

    return (
        <section>
            <div className="area-name">
                <h2>Body</h2>
            </div>
            <div style={border} ref={drop} className="area">
                {paragraph && <p>Drag and drop an element within this area.</p>}
            </div>
        </section>
    )
}
