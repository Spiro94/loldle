import React, { useEffect, useRef } from 'react';
import Tile from './Tile';
import type { LetterState } from '../../../types/letterState';
import getLetterColor from '../../../utils/letterColor';

type Props = {
    disabled?: boolean;
    onComplete: (word: string) => void;
    evaluation: LetterState[] | null;
    length?: number;
}

export default function Word({ disabled = false, onComplete, evaluation, length = 5 }: Props) {
    let word = '';
    const refs = useRef<Array<HTMLInputElement | null>>([]);
    const validKeyRegex = /^[a-zA-Z]$/;
    const state = evaluation;
    console.log(`Evaluation ${state}`);

    useEffect(() => {
        if (!disabled) {
            refs.current[0]?.focus();
        }
    }, [disabled]);

    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const lettersOnly = event.target.value.replace(/[^a-zA-Z]/g, '');
        const nextValue = lettersOnly.slice(0, 1);
        event.target.value = nextValue;

        if (nextValue.length === 1) {
            word += nextValue;
            refs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        const allowedControlKeys = [
            'Backspace',
            'Delete',
            'Tab',
            'ArrowLeft',
            'ArrowRight',
            'Home',
            'End',
            'Enter'
        ];

        if (
            !allowedControlKeys.includes(e.key) &&
            !validKeyRegex.test(e.key) &&
            !e.ctrlKey &&
            !e.metaKey
        ) {
            e.preventDefault();
            return;
        }

        console.log(`Key down ${e.key} at index ${index}`);
        if (e.key === 'Backspace' && word.length > 0) {
            word = word.slice(0, -1);
        }

        if (e.key === 'Backspace' && !refs.current[index]?.value) {
            refs.current[index - 1]?.focus();
        }

        if (e.key === 'Enter') {
            onComplete(word);
        }
    };

    return (
        <div className="flex gap-3">
            {Array.from({ length }).map((_, i) => (
                <Tile
                    key={i}
                    inputRef={(el) => {
                        refs.current[i] = el;
                    }}
                    onChange={(e) => handleChange(i, e)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    disabled={disabled}
                    className={state ? getLetterColor(state[i]) : undefined}
                />
            ))}
        </div>
    );
}