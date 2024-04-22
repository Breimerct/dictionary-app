import { httpClient } from '@/plugins/axios';
import type { Phonetic, ApiResponse, DefinitionResult } from '@/types';

interface IAxiosError {
    response: {
        data: {
            message: string;
        };
    };
}

export const getDefinition = async (
    searchText: string,
): Promise<DefinitionResult[]> => {
    const { data: definitions, status } = await httpClient
        .get<ApiResponse[]>(searchText)
        .catch((error: IAxiosError) => {
            throw new Error(error.response?.data.message);
        });

    if (status !== 200) return [];

    const result: DefinitionResult[] = definitions.map((definition) => ({
        ...definition,
        phonetic: filterPhonetic(definition.phonetics),
    }));

    return result;
};

const filterPhonetic = (phonetics: Phonetic[]) => {
    return (
        phonetics.find(({ audio, text }) => !!audio && !!text) ||
        phonetics[0] ||
        {}
    );
};
