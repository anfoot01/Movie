import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { Sidebar } from "./shared/ui/Sidebar/Sidebar";

function App({loggedIn}) {
	return (
		<>
			<div className="container">
				{loggedIn && <Sidebar />}
				<div className="page">
					<Outlet />
				</div>
			</div>
		</>
	);
}
App.propTypes = {
	loggedIn: PropTypes.bool,
};

export default App;
