import { FC } from 'react';
import { DefinitionResult } from '@/types';
import ButtonPlay from '@components/button-play/ButtonPlay';
import { ExternalLinkIcon } from '@components/icons/Icon';
import Meanings from '@components/meanings/Meanings';

interface DefinitionListProp {
    definitions: DefinitionResult[];
}

const DefinitionList: FC<DefinitionListProp> = ({ definitions }) => {
    return definitions.map(
        ({ word, meanings, phonetic, sourceUrls }, index) => (
            <section key={index} className={index === 0 ? 'mt-10' : ''}>
                <article>
                    <div className="flex gap-8 justify-start items-center">
                        <div>
                            <h1 className="text-6xl font-bold capitalize">
                                {word}
                            </h1>
                            {phonetic && (
                                <span className="block text-xl mt-2">
                                    {phonetic.text}
                                </span>
                            )}
                        </div>

                        {phonetic?.audio && (
                            <ButtonPlay audioUrl={phonetic.audio} />
                        )}
                    </div>
                </article>

                <article className="flex flex-col gap-2 mt-4">
                    <Meanings meanings={meanings} />
                </article>

                <article className="mt-4 flex flex-col gap-2">
                    <p className="font-bold m-0">Source: </p>
                    <div className="w-full flex gap-2">
                        <ul className="list-disc marker:text-purple-800 dark:marker:text-purple-400">
                            {sourceUrls.map((url) => (
                                <li key={url} className="ml-10">
                                    <a
                                        href={url}
                                        target="_blank"
                                        className="underline flex items-center gap-1"
                                    >
                                        {url}
                                        <ExternalLinkIcon
                                            size={15}
                                            className="invisible md:visible"
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>

                {index !== definitions.length - 1 && <hr className="my-14" />}
            </section>
        ),
    );
};

export default DefinitionList;
