import { DefinitionResult } from '@/types';
import { FC } from 'react';
import ButtonPlay from '../button-play/ButtonPlay';
import Meanings from '../meanings/Meanings';
import { ExternalLinkIcon } from '../icons/Icon';

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

                <article className="mt-4 flex gap-2">
                    <p className="font-bold m-0">Source: </p>
                    <a
                        href={sourceUrls[0]}
                        target="_blank"
                        className="relative underline transition-transform hover:scale-105 flex flex-nowrap items-center gap-1"
                    >
                        {sourceUrls[0]}
                        <ExternalLinkIcon size={16} />
                    </a>
                </article>

                {index !== definitions.length - 1 && <hr className="my-14" />}
            </section>
        ),
    );
};

export default DefinitionList;
