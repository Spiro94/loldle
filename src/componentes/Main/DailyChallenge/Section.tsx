import GameBoard from './GameBoard'
import PuzzleSelector from './PuzzleSelector'

export default function Section() {

    return (
        <section id='daily-challenge' className='flex flex-col gap-4 px-5 py-4 bg-surface rounded-2xl'>
            <header>
                <h2 className='text-text-secondary text-5xl font-bold font-cinzel'>Daily League Challenge</h2>
                <p className='font-jetbrains-mono text-lg'>Guess the League concept in six tries</p>
            </header>
            <PuzzleSelector />
            <GameBoard />
        </section>
    )
}
