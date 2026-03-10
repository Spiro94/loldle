import React from 'react';
import { cn } from '../../../utils/cn';

type TileProps = {
  inputRef: (element: HTMLInputElement | null) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
};

export default function Tile({ inputRef, onChange, onKeyDown, disabled = false, className }: TileProps) {
  return (
    <input
      ref={inputRef}
      maxLength={1}
      onChange={onChange}
      onKeyDown={onKeyDown}
      disabled={disabled}
      className={cn("bg-tile text-2xl rounded-lg size-16 text-center font-bold uppercase caret-transparent", className)}
    />
  );
}
