import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className='nav-bar'>
            <div className='nav-links'>
                <Link className='home-link' to='/'>Home</Link>
                <Link className='home-link' to='legends'>Legends</Link>
                <Link className='home-link' to='about'>About</Link>
            </div>
        </div>
    )
}

export default Navbar