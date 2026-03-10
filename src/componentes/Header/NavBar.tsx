
export default function NavBar() {

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <header>
            <nav className='flex gap-4 px-5 py-4 bg-surface rounded-2xl justify-between'>
                <h1 className='text-text-secondary text-3xl font-cinzel font-bold'>LEAGUE WORDLE</h1>
                <div className='inline-flex gap-5'>
                    <button onClick={() => scrollTo('home')} className='font-jetbrains-mono font-semibold cursor-pointer hover:text-heading-white'>Home</button>
                    <button onClick={() => scrollTo('how-to-play')} className='font-jetbrains-mono font-semibold cursor-pointer hover:text-heading-white'>How to Play</button>
                    <button onClick={() => scrollTo('leaderboard')} className='font-jetbrains-mono font-semibold cursor-pointer hover:text-heading-white'>Leaderboard</button>
                </div>
            </nav>
        </header>
    )
}
