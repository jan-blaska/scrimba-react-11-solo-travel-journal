import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
	return (
		<div className='card'>
            <img src={props.item.imageUrl} alt="dominican-republic" className='card--img'/>
			<div className='card--text'>
				<div className='card--text-location'>
					<FontAwesomeIcon icon={faLocationDot} style={{color: "#F55A5A",}} />
					<p className='card--text-location-name'>{props.item.location}</p>
					<a href={props.item.googleMapsUrl} className='card--text-location-link'>View on Google Maps</a>
				</div>
				<h1 className='card--text-title'>{props.item.title}</h1>
				<p className='card--text-date'>{props.item.startDate} - {props.item.endDate}</p>
				<p>{props.item.description}</p>
			</div>
        </div>
			
		
	)
}

export default Card