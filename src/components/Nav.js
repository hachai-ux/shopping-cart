import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <li>
                <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/shop'>Shop</Link>
                </li>
                <li>
                <Link to='/cart'>Cart</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;