import { FC } from 'react';
import { Meaning } from '@/types';

interface MeaningsProps {
    meanings: Meaning[];
}

const Meanings: FC<MeaningsProps> = ({ meanings }) => {
    return meanings.map(
        ({ partOfSpeech, definitions, antonyms, synonyms }, index) => (
            <article key={index} className="mt-4">
                <h1 className="text-2xl font-bold capitalize">
                    {partOfSpeech}
                </h1>

                <ul className="list-disc marker:text-purple-800 dark:marker:text-purple-400">
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
                    <article className="flex gap-1 mt-6">
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
