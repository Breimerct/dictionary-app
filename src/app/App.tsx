import Header from '@/components/header/Header';
import './App.scss';
import SearchInput from '@/components/search-input/SearchInput';

function App() {
    const handleSubmit = (searchText: string) => {
        console.log(searchText);
    };

    return (
        <main className="min-h-screen md:w-[70%] mx-auto">
            <Header />
            <h1 className="text-6xl font-bold">Dictionary app</h1>
            <SearchInput onSubmit={handleSubmit} />
        </main>
    );
}

export default App;
