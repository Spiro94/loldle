import { MessageSquareWarningIcon } from 'lucide-react';
import Modal from './Modal';


export type Props = {
    onClose: () => void;
}

export default function MissingCharactersModal({ onClose }: Props) {
    return (
        <Modal onClose={onClose}>
            <div className='rounded-full bg-grey p-4'>
                <MessageSquareWarningIcon size={40} />
            </div>
            <p className='font-medium font-jetbrains-mono'>Missing Characters!</p>
            <hr className='bg-tile h-1 text-tile' />
            <div className='inline-flex gap-4'>
                <button onClick={onClose} className='inline-flex gap-2 items-center bg-tile rounded-full px-5 py-3 font-oswald font-semibold text-sm cursor-pointer'>Close</button>
            </div>
        </Modal>
    )
}
