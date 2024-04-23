import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
	<div className="header">
		<Link to="/">Movies</Link>
		<Link to="/">Series</Link>
		<Link to="/">Documentaries</Link>
		<div className='ml-auto'>
			icon
		</div>






	</div>
  )
}
