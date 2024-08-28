import { Outlet } from 'react-router-dom';

export default function Layout() {
	return (
		<div>
			<div className="container">
				<Outlet />
			</div>
		</div>
	)
}