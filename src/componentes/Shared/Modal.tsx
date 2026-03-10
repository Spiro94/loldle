import React from 'react'

type Props = React.PropsWithChildren<{
    onClose?: () => void;
}>

export default function Modal({ onClose, children }: Props) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />
            <div className="relative bg-primary rounded-lg p-8 shadow-lg flex flex-col gap-4 items-center">
                {children}
            </div>

        </div>
    )
}
