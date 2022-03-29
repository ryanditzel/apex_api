import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='legends'>Legends</Link>
                <Link to='about'>About</Link>
            </nav>
        </header>
    )
}

export default Navbar