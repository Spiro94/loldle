import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import usePuzzleLengthContext from '../../../hooks/usePuzzleLengthContext';
import type { LetterState } from '../../../types/letterState';
import { getWordsByLength } from '../../../utils/dictionary';
import evaluateGuess from '../../../utils/evaluateGuess';
import FailureModal from '../../Shared/FailureModal';
import SuccessModal from '../../Shared/SuccessModal';
import Word from './Word';
import MissingCharactersModal from '../../Shared/MissingCharactersModal';

type SuccessModalState = {
    show: boolean;
    turns?: number;
}

export default function GameBoard() {
    const { length: wordLength } = usePuzzleLengthContext();

    const [showSuccessModal, setShowSuccessModal] = useState<SuccessModalState>({ show: false });
    const [showFailureModal, setShowFailureModal] = useState(false);
    const [showMissingCharactersModal, setShowMissingCharactersModal] = useState(false);

    const [showHint, setShowHint] = useState(false);
    const [hint, setHint] = useState('');
    const [hintWarning, setHintWarning] = useState(false);
    const [answer, setAnswer] = useState('');
    const [turn, setTurn] = useState(0);
    const [results, setResults] = useState<(LetterState[] | null)[]>(
        Array(6).fill(null)
    );
    const [gameId, setGameId] = useState(0);
    const arr = Array.from({ length: 6 }, (_, i) => i);


    function pickRandomAnswer() {
        const words = getWordsByLength(wordLength);
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    }

    useEffect(() => {
        const nextAnswer = pickRandomAnswer();
        setAnswer(nextAnswer.word);
        setHint(nextAnswer.hint);
        setTurn(0);
        setResults(Array(6).fill(null));
        setShowSuccessModal({ show: false });
        setShowFailureModal(false);
        setShowHint(false);
        setShowMissingCharactersModal(false);
        setGameId(prev => prev + 1);
        console.info(`Answer: ${nextAnswer}`);
    }, [wordLength]);

    function handleComplete(word: string) {
        if (word.length === wordLength) {
            console.info(`Complete ${word}`);
            const evaluation = evaluateGuess(word, answer);

            setResults(prev => {
                const next = [...prev];
                next[turn] = evaluation;
                return next;
            });



            if (turn === 5) {
                console.log(`Turns completed ${word}`);
                setTurn(-1);

                if (evaluation.every(state => state === 'correct')) {
                    console.log('Congratulations! You guessed the word!');
                    setShowSuccessModal({ show: true, turns: turn + 1 });
                } else {
                    console.log(`Game over! The correct word was: ${answer}`);
                    setShowFailureModal(true);
                }
            }
            else if (evaluation.every(state => state === 'correct')) {
                console.log('Congratulations! You guessed the word!');
                setShowSuccessModal({ show: true, turns: turn + 1 });
                setTurn(-1);
            }
            else {
                setTurn(prev => prev + 1);
            }
        }
        else {
            console.warn(`Missing characters! ${word}`);
            setShowMissingCharactersModal(true);
        }
    }

    function handlePlayAgain() {
        const nextAnswer = pickRandomAnswer();
        setTurn(0);
        setResults(Array(6).fill(null));
        setShowSuccessModal({ show: false });
        setShowFailureModal(false);
        setShowHint(false);
        setAnswer(nextAnswer.word);
        setHint(nextAnswer.hint);
        setShowMissingCharactersModal(false);
        setGameId(prev => prev + 1);
    }

    function handleClose() {
        setShowSuccessModal({ show: false });
        setShowFailureModal(false);
        setShowMissingCharactersModal(false);
    }

    function handleShowHint() {
        if (turn >= 2) {
            setShowHint(true);
        }
        else {
            console.warn('Hint is available after 2 turns!');
            setHintWarning(true);
            setTimeout(() => {
                setHintWarning(false);
            }, 3000);
        }
    }

    return (
        <div className='flex flex-col gap-6 items-center '>
            <div className='grid grid-cols-1 gap-3 p-3 bg-gameboard rounded-2xl'>
                {
                    arr.map((_, index) => {
                        return <Word disabled={index !== turn}
                            onComplete={handleComplete}
                            evaluation={results[index]}
                            length={wordLength}
                            key={`game-${gameId}-word-${index}`}
                        />
                    })
                }
                {
                    showSuccessModal.show && createPortal(<SuccessModal answer={answer} turns={showSuccessModal.turns!} onClose={handleClose} onPlayAgain={handlePlayAgain} />, document.getElementById('modal')!)
                }
                {
                    showFailureModal && createPortal(<FailureModal answer={answer} onClose={handleClose} onPlayAgain={handlePlayAgain} />, document.getElementById('modal')!)
                }
                {
                    showMissingCharactersModal && createPortal(<MissingCharactersModal onClose={() => setShowMissingCharactersModal(false)} />, document.getElementById('modal')!)
                }
            </div>
            <div className='flex flex-col gap-3 items-center' >
                <button onClick={handleShowHint} className='bg-tile px-4 py-2 rounded-full font-jetbrains-mono font-semibold cursor-pointer'>Hint ?</button>
                {showHint && <span className='font-jetbrains-mono text-sm text-text-secondary'>{hint}</span>}
                {hintWarning && <span className='font-jetbrains-mono text-sm text-text-secondary'>Hint is available after 2 turns!</span>}
            </div>
        </div>
    )
}
