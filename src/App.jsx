import update from 'immutability-helper'
import { Aside } from './components/layout/Aside'

import { Body } from './components/layout/Body'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { useCallback, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {

  const [image, setImage] = useState({
    a: { top: 40, left: 80, src: '/images/arrow.png' },
    b: { top: 40, left: 300, src: '/images/pdf.png' },
    c: { top: 200, left: 70, src: '/images/ubi.png' },
    d: { top: 250, left: 300, src: '/images/javascript.png' }
  })

  const [text, setText] = useState({
    e: { top: 60, left: 40 },
    f: { top: 100, left: 40 },
    g: { top: 140, left: 40 },
  })

  const [table, setTable] = useState({
    h: { top: 100, left: 40 },
    i: { top: 200, left: 40 },
    j: { top: 300, left: 40 }
  })

  const [paragraph, setParagraph] = useState(true)

  const [border, setBorder] = useState({ border: '1px dashed rgb(34, 106, 173)' })



  const moveImage = useCallback(
    (id, left, top) => {
      setImage(
        update(image, {
          [id]: {
            $merge: { left, top },
          },
        }),
      )
    },
    [image, setImage],
  )

  const moveText = useCallback(
    (id, left, top) => {
      setText(
        update(text, {
          [id]: {
            $merge: { left, top },
          },
        }),
      )
    },
    [text, setText],
  )

  const moveTable = useCallback(
    (id, left, top) => {
      setTable(
        update(table, {
          [id]: {
            $merge: { left, top },
          },
        }),
      )
    },
    [table, setTable],
  )

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='page'>
        <div className='layout'>
          <Header
            moveImage={moveImage}
            paragraph={paragraph}
            setParagraph={setParagraph}
            border={border}
            setBorder={setBorder} />

          <Body moveImage={moveImage}
            moveText={moveText}
            moveTable={moveTable}
            paragraph={paragraph}
            setParagraph={setParagraph}
            border={border}
            setBorder={setBorder}
          />

          <Footer moveText={moveText}
            paragraph={paragraph}
            setParagraph={setParagraph}
            border={border}
            setBorder={setBorder} />
        </div>

        <Aside
          image={image}
          moveImage={moveImage}
          text={text}
          moveText={moveText}
          table={table}
          moveTable={moveTable} />
      </div>
    </DndProvider>
  )
}

export default App
