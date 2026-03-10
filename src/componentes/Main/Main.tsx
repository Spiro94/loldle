import React, { useState } from 'react'
import { PuzzleLengthContext } from '../../context/puzzleLengthContext'

type Props = {
    children?: React.ReactNode
}

export default function Main({ children }: Props) {
    const [puzzleLength, setPuzzleLength] = useState(5);

    return (
        <PuzzleLengthContext.Provider value={{ length: puzzleLength, setLength: setPuzzleLength }}>
            <main className='flex flex-col gap-6'>{children}</main>
        </PuzzleLengthContext.Provider>
    )
}
