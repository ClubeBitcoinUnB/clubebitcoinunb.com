import { ReactNode } from 'react';

interface WrapperProps {
    children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
    return(
        <div className="min-h-screen flex flex-col font-sans">
            { children }
        </div>
    )
}