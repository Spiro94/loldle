
export default function Section() {
    return (
        <section id='leaderboard' className='flex gap-5 px-5 py-4 bg-surface rounded-2xl justify-evenly'>
            <article className='flex flex-col gap-2 flex-1 p-4 rounded-xl bg-article'>
                <h3 className='font-cinzel text-2xl font-bold text-text-secondary'>Daily Top Players</h3>
                <ol className='font-jetbrains-mono font-medium'>
                    <li>
                        Scarkov - 3 guesses
                    </li>
                    <li>
                        Kirikov - 4 guesses
                    </li>
                    <li>
                        Scarkov - 5 guesses
                    </li>
                </ol>
            </article>
            <article className='flex flex-col gap-2 flex-1 p-4 rounded-xl bg-article'>
                <h3 className='font-cinzel text-2xl font-bold text-text-secondary'>Share Today's Result</h3>
                <p className='font-jetbrains-mono font-medium'>Post your streak and challenge friends to beat your solve count.</p>
                <div className='flex gap-3'>
                    <button className='mt-2 px-4 py-3 bg-tile text-white rounded-full font-jetbrains-mono font-semibold text-xs cursor-pointer'>Share</button>
                    <button className='mt-2 px-4 py-3 bg-tile text-white rounded-full font-jetbrains-mono font-semibold text-xs cursor-pointer'>Discord</button>
                    <button className='mt-2 px-4 py-3 bg-tile-partial-hit text-primary rounded-full font-jetbrains-mono font-bold text-xs cursor-pointer'>Copy Score</button>
                </div>

            </article>
        </section>
    )
}
