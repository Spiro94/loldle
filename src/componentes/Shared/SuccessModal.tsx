import { RotateCcw, Trophy } from 'lucide-react';
import { useState } from 'react';
import { useUserScores } from '../../store/userScores';
import Modal from './Modal';

export type Props = {
  answer: string;
  turns: number;
  onClose: () => void;
  onPlayAgain: () => void;
}

export default function SuccessModal({ answer, turns, onClose, onPlayAgain }: Props) {
  const [username, setUsername] = useState('');

  const saveScore = useUserScores(state => state.saveScore);

  function handleSaveScore(username: string) {
    saveScore({ username: username, score: turns });
    onPlayAgain();
  }

  function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  return (
    <Modal onClose={onClose}>
      <div className='rounded-full bg-gold p-4'>
        <Trophy size={40} className='text-primary' />
      </div>
      <h2 className='text-4xl text-text-secondary font-bold font-cinzel'>Victory!</h2>
      <p className='font-medium font-jetbrains-mono'>You cracked the word!</p>
      <div className='flex flex-col gap-2 items-center bg-tile px-5 py-4 rounded-xl self-stretch'>
        <span className='font-oswald font-semibold text-xs'>THE ANSWER WAS</span>
        <span className='font-cinzel text-text-secondary text-2xl font-bold'>{answer}</span>
      </div>
      <hr className="self-stretch h-0.5 bg-tile border-0 mt-4" />
      <div className='flex gap-4 m-3'>
        <div className='flex flex-col gap-2 items-center'>
          <span className='font-oswald font-bold text-3xl text-heading-white'>{turns}</span>
          <span className='font-jetbrains-mono font-medium text-xs'>Guesses</span>
        </div>
      </div>
      <hr className="self-stretch h-0.5 bg-tile border-0" />
      <div className='flex gap-4 m-4'>
        <input placeholder='username' className='bg-tile rounded-full px-5 py-3 font-oswald font-semibold text-sm' value={username} onChange={handleUsernameChange} />
        <button onClick={() => handleSaveScore(username)} className='bg-tile rounded-full px-5 py-3 font-oswald font-semibold text-sm cursor-pointer'>Save score</button>
      </div>
      <hr className="self-stretch h-0.5 bg-tile border-0" />
      <div className='inline-flex gap-4 mt-4'>
        <button onClick={onPlayAgain} className='inline-flex gap-2 items-center bg-tile rounded-full px-5 py-3 font-oswald font-semibold text-sm cursor-pointer'> <RotateCcw size={16} />Play Again</button>
      </div>
    </Modal>
  )
}
