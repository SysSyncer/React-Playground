import {navLinks} from "../constants";

const Header = () => {
    return (
        <header className="max-w-fit">
            <h1 className="mb-3">Welcome to My Website!</h1>
            <nav className="flex gap-5 justify-center">
                {navLinks.map(({id, name, href}) =>
                    <li key={id} className="list-none p-0">
                        <a href={href}>{name}</a>
                    </li>)}
            </nav>
        </header>
    );
}
export default Header;