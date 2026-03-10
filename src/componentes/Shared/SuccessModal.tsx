import { RotateCcw, Trophy } from 'lucide-react';
import Modal from './Modal';

export type Props = {
  answer: string;
  onClose: () => void;
  onPlayAgain: () => void;
}

export default function SuccessModal({ answer, onClose, onPlayAgain }: Props) {
  return (
    <Modal onClose={onClose}>
      <div className='rounded-full bg-gold p-4'>
        <Trophy size={40} className='text-primary' />
      </div>
      <h2 className='text-4xl text-text-secondary font-bold font-cinzel'>Victory!</h2>
      <p className='font-medium font-jetbrains-mono'>You cracked the champion!</p>
      <div className='flex flex-col gap-2 items-center bg-tile px-5 py-4 rounded-xl self-stretch'>
        <span className='font-oswald font-semibold text-xs'>THE ANSWER WAS</span>
        <span className='font-cinzel text-text-secondary text-2xl font-bold'>{answer}</span>
      </div>
      <hr className='bg-tile h-1 text-tile' />
      <div className='inline-flex gap-4'>
        <button onClick={onPlayAgain} className='inline-flex gap-2 items-center bg-tile rounded-full px-5 py-3 font-oswald font-semibold text-sm cursor-pointer'> <RotateCcw size={16} />Play Again</button>
      </div>
    </Modal>
  )
}
