import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import GlobalStyle from "./styles/Global.style.js";
import {Provider} from "react-redux";
import store from "./store/index.js";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme.style.js"; // 환경별 테마 정보 가져오기


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
		<Provider store={store}>
			<ThemeProvider theme={theme}>
			<BrowserRouter>
				<React.StrictMode>
					<GlobalStyle/>
					<App/>
				</React.StrictMode>
			</BrowserRouter>
			</ThemeProvider>
		</Provider>
);

reportWebVitals();
