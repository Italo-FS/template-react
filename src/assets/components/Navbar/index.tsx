import './navbar.css';

import { Logo } from './Logo';

export const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg bg-dark'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#'>
					<Logo />
					<span className='mx-2'>Spotifei</span>
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<i className='bi bi-list'></i>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<a className='nav-link active' aria-current='page' href='#'>
								FAQ
							</a>
						</li>
					</ul>

					<form className='d-flex' role='login'>
						<button className='btn' type='submit'>
							Entrar
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

// <nav className='navbar bg-dark fluid'>
// 	<div className='container-fluid'>
// 		<a className='navbar-brand' href='#'>
// 			<img
// 				src='images/nav-logo.png'
// 				alt='Logo'
// 				width='32'
// 				height='32'
// 				className='d-inline-block align-text-top'
// 			/>
// 			<span className='mx-2'>Spotifei</span>
// 		</a>
// 	</div>
// </nav>
