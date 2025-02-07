import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const currentPage = useLocation().pathname;

    return (
        <ul>
            Harbold
            <li>
                <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                About Me
                </Link>
            </li>
            <li>
                <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
                Portfolio
                </Link>
            </li>
            <li>
                <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                Contact
                </Link>
            </li>
            <li>
                <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
                Resume
                </Link>
            </li>
        </ul>
    )
}