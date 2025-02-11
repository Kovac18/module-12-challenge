import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div class="container">
            <div class="navbar">
            <h2 class="title">H a r b o l d</h2>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className='nav-link'>
                            About Me
                            </Link>
                        </li>
                        <li>
                            <Link to="/Portfolio" className='nav-link'>
                            Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="/Contact" className='nav-link'>
                            Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/Resume" className='nav-link'>
                            Resume
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div> 
    )
}