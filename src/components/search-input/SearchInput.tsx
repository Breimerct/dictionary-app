import { FC, FormEvent } from 'react';
import { SearchIcon } from '@components/icons/Icon';

interface ISearchInputProps {
    label?: string;
    onSubmit: (search: string) => void;
}

const SearchInput: FC<ISearchInputProps> = ({ label = 'Search', onSubmit }) => {
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const formElement = event.target as HTMLFormElement;
        const $searchInput = formElement.elements.namedItem(
            'search',
        ) as HTMLInputElement;

        const formData = new FormData(formElement);
        const searchText = formData.get('search')?.toString();

        !!searchText && onSubmit(searchText);
        $searchInput.blur();
    };

    return (
        <div className="flex flex-col">
            <form id="searchForm" onSubmit={handleSubmit}>
                <label
                    htmlFor="search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    {label}
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <SearchIcon
                            size={18}
                            className="text-gray-500 dark:text-gray-400"
                        />
                    </div>
                    <input
                        type="search"
                        id="search"
                        name="search"
                        className="block w-full p-4 ps-10 text-xl font-semibold text-gray-900 transition-all outline outline-2 outline-gray-400 rounded-lg bg-gray-50 hover:outline-purple-500 focus:outline-purple-500 dark:bg-gray-700 dark:outline-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-purple-500 peer"
                        placeholder="Search"
                        required
                    />
                    <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-[50%] translate-y-[50%] transition-colors bg-purple-700 hover:bg-purple-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:pointer-events-none"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchInput;
