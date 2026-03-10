import { RotateCcw, Skull } from 'lucide-react';
import Modal from './Modal';

export type Props = {
    answer: string;
    onClose: () => void;
    onPlayAgain: () => void;
}

export default function FailureModal({ answer, onClose, onPlayAgain }: Props) {
    return (
        <Modal onClose={onClose}>
            <div className='rounded-full bg-grey p-4'>
                <Skull size={40} />
            </div>
            <h2 className='text-4xl text-tile-partial-hit font-bold font-cinzel'>Defeated</h2>
            <p className='font-medium font-jetbrains-mono'>Better luck next time, Summoner</p>
            <div className='flex flex-col gap-2 items-center bg-tile px-5 py-4 rounded-xl self-stretch'>
                <span className='font-oswald font-semibold text-xs'>THE ANSWER WAS</span>
                <span className='font-cinzel text-text-secondary text-2xl font-bold'>{answer}</span>
            </div>
            <hr className="self-stretch h-0.5 bg-tile border-0 m-4" />
            <div className='inline-flex gap-4'>
                <button onClick={onPlayAgain} className='inline-flex gap-2 items-center bg-tile-partial-hit rounded-full px-5 py-3 font-oswald font-semibold text-sm text-primary cursor-pointer hover:bg-gold'> <RotateCcw size={16} />Try Again</button>
            </div>
        </Modal>
    )
}
