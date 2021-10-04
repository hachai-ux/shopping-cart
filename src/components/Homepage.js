import header from "../images/Tafelschokolade_Mood_Allgemein.jpeg";
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="homepage">
            <h1>Goldhelm Schokolade</h1>
            <img width="500" alt='Goldhelm Schokolade Header'src={header}></img>
            <button>
            <Link to='/shop'>Shop</Link>
            </button>
            
            
        </div>
        
    );
};

export default Homepage;