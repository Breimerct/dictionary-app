export type DefinitionResult = {
    word: string;
    phonetic: Phonetic;
    meanings: Meaning[];
    license: License;
    sourceUrls: string[];
};

export type ApiResponse = {
    word: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
    license: License;
    sourceUrls: string[];
};

export type License = {
    name: string;
    url: string;
};

export type Meaning = {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
};

export type Definition = {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example?: string;
};

export type Phonetic = {
    audio: string;
    sourceUrl?: string;
    license?: License;
    text?: string;
};
