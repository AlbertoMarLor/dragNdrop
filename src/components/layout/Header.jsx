import React from 'react'
import { useDrop } from 'react-dnd'


export const Header = ({ moveImage, paragraph, setParagraph, border, setBorder }) => {

    const styles = () => {
        setParagraph(false)
        setBorder({ border: 'none' })
    }

    const [, drop] = useDrop(
        () => ({
            accept: 'image',
            drop(item, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset()
                const left = Math.round(item.left + delta.x)
                const top = Math.round(item.top + delta.y)
                moveImage(item.id, left, top)
                styles()
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
