import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons'


function Header() {

	return (
		<header>
			<FontAwesomeIcon icon={faEarthEurope} className='header--logo'/>
			<p className='header--text'>my travel journal.</p>
		</header>
	)
}

export default Header