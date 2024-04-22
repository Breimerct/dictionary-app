import Header from '@/components/header/Header';
import './App.scss';

function App() {
    return (
        <main className="min-h-screen min-w-screen grid place-content-center">
            <Header />
            <h1 className="text-6xl font-bold">Dictionary app</h1>
        </main>
    );
}

export default App;
