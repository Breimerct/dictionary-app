import { useState } from 'react';
import Header from '@/components/header/Header';
import SearchInput from '@/components/search-input/SearchInput';
import { getDefinition } from '@/services/dictionary.service';
import { DefinitionResult } from '@/types';
import './App.scss';
import DefinitionList from '@/components/definition-list/DefinitionList';

function App() {
    const [definitions, setDefinitions] = useState<DefinitionResult[]>();
    const handleSubmit = async (searchText: string) => {
        try {
            const dataResult = await getDefinition(searchText);

            setDefinitions(dataResult);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="min-h-screen transition-all md:w-[70%] lg:w-[50%] mb-10 mx-6 md:mx-auto">
            <Header />
            <SearchInput onSubmit={handleSubmit} />

            {definitions && <DefinitionList definitions={definitions} />}
        </main>
    );
}

export default App;
