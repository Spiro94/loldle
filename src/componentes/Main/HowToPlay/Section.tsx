
export default function Section() {
    return (
        <section id='how-to-play' className='flex flex-col gap-5 px-5 py-4 bg-surface rounded-2xl'>
            <header>
                <h2 className='text-text-secondary font-cinzel text-3xl font-bold'>How to Play</h2>
            </header>
            <div className='flex gap-3 justify-evenly'>
                <article className='flex flex-col gap-2 p-3 rounded-xl bg-article'>
                    <div className='size-7 rounded-lg bg-tile'></div>
                    <h3 className='text-heading-white font-oswald font-semibold'>Guess a League concept</h3>
                    <p className='font-jetbrains-mono text-xs'>Champion, item, rune, or role are all possible answers.</p>
                </article>
                <article className='flex flex-col gap-2 p-3 rounded-xl bg-article'>
                    <div className='size-7 rounded-lg bg-tile-partial-hit'></div>
                    <h3 className='text-heading-white font-oswald font-semibold'>Read feedback colors</h3>
                    <p className='font-jetbrains-mono text-xs'>Green is exact, yellow is partial, gray is not present.</p>
                    <div className='flex gap-2 justify-start'>
                        <div className='size-4 rounded-sm bg-tile-hit'></div>
                        <div className='size-4 rounded-sm bg-tile-partial-hit'></div>
                        <div className='size-4 rounded-sm bg-tile-no-hit'></div>

                    </div>
                </article>
                <article className='flex flex-col gap-2 p-3 rounded-xl bg-article'>
                    <div className='size-7 rounded-lg bg-tile-hit'></div>
                    <h3 className='text-heading-white font-oswald font-semibold'>Six guesses per game</h3>
                    <p className='font-jetbrains-mono text-xs'>Solve before attempt six to keep your win streak alive.</p>
                </article>
            </div>
            <p className='font-jetbrains-mono font-medium'>Master the Rift vocabulary in one quick puzzle.</p>
        </section>
    )
}
