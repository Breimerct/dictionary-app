import React from 'react';
import { BookOpenIcon } from '../icons/Icon';

const Header: React.FC = () => {
    return (
        <header>
            <figure>
                <BookOpenIcon size={25} />
            </figure>
        </header>
    );
};

export default Header;
