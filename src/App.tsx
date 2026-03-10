import Footer from './componentes/Footer/Footer'
import NavBar from './componentes/Header/NavBar'
import DailyChallengeSection from './componentes/Main/DailyChallenge/Section'
import HowToPlaySection from './componentes/Main/HowToPlay/Section'

import Main from './componentes/Main/Main'
import ResultSection from './componentes/Main/Result/Section'

function App() {

  return (
    <div className='flex flex-col gap-6 m-6'>
      <NavBar />
      <Main>
        <DailyChallengeSection />
        <HowToPlaySection />
        <ResultSection />
      </Main>
      <Footer />
    </div>
  )
}

export default App
