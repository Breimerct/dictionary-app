import { FC } from 'react';
import { PlayIcon } from '../icons/Icon';

interface ButtonPlayProps {
    audioUrl: string;
}

const ButtonPlay: FC<ButtonPlayProps> = ({ audioUrl }) => {
    const handleClickPlaySound = (audioUrl: string | null) => {
        if (!audioUrl) return;

        const $audio = document.createElement('audio');
        $audio.src = audioUrl;
        $audio.play();
    };

    return (
        <button
            onClick={() => handleClickPlaySound(audioUrl)}
            className="w-20 h-20 rounded-full grid place-content-center transition-all bg-purple-300 hover:bg-purple-400/70 dark:bg-purple-600 dark:hover:bg-purple-700 hover:scale-105"
        >
            <PlayIcon className="text-purple-500 dark:text-purple-950" />
        </button>
    );
};

export default ButtonPlay;
