import { useState } from 'react';
import { DefinitionResult } from '@/types';
import { showToast } from '@plugins/toastify';
import { getDefinition } from '@services/dictionary.service';
import DefinitionList from '@components/definition-list/DefinitionList';
import SearchInput from '@components/search-input/SearchInput';
import Header from '@components/header/Header';
import './App.scss';

function App() {
    const [definitions, setDefinitions] = useState<DefinitionResult[]>([]);
    const handleSubmit = async (searchText: string) => {
        try {
            const dataResult = await getDefinition(searchText);

            setDefinitions(dataResult);
        } catch (error) {
            const isDark = document.documentElement.classList.contains('dark');

            showToast(
                "we couldn't find definitions for the word you were looking for.",
                'error',
                isDark,
            );
            setDefinitions([]);
        }
    };

    return (
        <main className="min-h-screen transition-all md:w-[70%] lg:w-[50%] pb-10 mx-6 md:mx-auto">
            <Header />
            <SearchInput onSubmit={handleSubmit} />

            {definitions?.length > 0 ? (
                <DefinitionList definitions={definitions} />
            ) : (
                <div className="h-full w-full mt-14 flex flex-col justify-center items-center gap-4">
                    <picture>
                        <img src="dictionary.avif" alt="dictionary logo" />
                    </picture>
                    <h1 className="text-6xl md:text-7xl text-center font-bold">
                        Dictionary app
                    </h1>
                </div>
            )}
        </main>
    );
}

export default App;
