import { Meaning } from '@/types';
import { FC } from 'react';

interface MeaningsProps {
    meanings: Meaning[];
}

const Meanings: FC<MeaningsProps> = ({ meanings }) => {
    return meanings.map(
        ({ partOfSpeech, definitions, antonyms, synonyms }, index) => (
            <article key={index}>
                <h1 className="text-2xl font-bold capitalize">
                    {partOfSpeech}
                </h1>

                <ul className="flex flex-col gap-2 list-disc marker:text-purple-800 dark:marker:text-purple-400">
                    {definitions.map(({ definition }, index) => (
                        <li key={index} className="ml-4">
                            {definition}
                        </li>
                    ))}
                </ul>

                {synonyms.length > 0 && (
                    <article className="flex gap-1 mt-6">
                        <p className="font-bold m-0">Synonyms: </p>
                        <span className="text-purple-600 dark:text-purple-400">
                            {synonyms.join(', ')}
                        </span>
                    </article>
                )}

                {antonyms.length > 0 && (
                    <article className="flex gap-1">
                        <p className="font-bold m-0">antonyms: </p>
                        <span className="text-purple-600 dark:text-purple-400">
                            {antonyms.join(', ')}
                        </span>
                    </article>
                )}
            </article>
        ),
    );
};

export default Meanings;
