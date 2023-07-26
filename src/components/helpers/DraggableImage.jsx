import React from 'react'
import { useDrag } from 'react-dnd'

const style = {
    position: 'absolute',
    cursor: 'move'
}

export const DraggableImage = ({ id, left, top, children }) => {

    const type = 'image'

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'image',
        item: { id, left, top, type },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id, left, top, type],
    )
    if (isDragging) {
        return <div ref={drag} />
    }


    return (
        <div className='image' ref={drag} style={{ ...style, left, top }} data-testid="image" >
            {children}
        </div>
    )

}