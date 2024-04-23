import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { AppRouter } from './app/routes/AppRouter.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
	<AppRouter />
  </React.StrictMode>
);
