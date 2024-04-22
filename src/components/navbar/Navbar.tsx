import DarkToggle from '../dark-toggle/DarkToggle';
import { BookIcon } from '../icons/Icon';

const NavBar = () => {
    return (
        <nav className="w-full flex items-start justify-between">
            <figure>
                <BookIcon size={50} />
            </figure>

            <div>
                <DarkToggle />
            </div>
        </nav>
    );
};

export default NavBar;
