import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <h3>Goldhelm Schokolade</h3>
            <ul className="nav-links">
                <li>
                <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/shop'>Shop</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;