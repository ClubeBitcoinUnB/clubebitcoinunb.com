import { ReactNode } from 'react';

interface ContentProps {
    children: ReactNode;
}

export default function Content({ children }: ContentProps) {
    return (
        <div className="w-full flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-base">
            { children }
        </div>
    )
}