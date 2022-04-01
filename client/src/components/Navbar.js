import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className='navbar'>
            <header>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='legends'>Legends</Link>
                    <Link to='about'>About</Link>
                </nav>
            </header>
        </div>
    )
}

export default Navbar