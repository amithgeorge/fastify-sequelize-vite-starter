import "./app.css";

import { useState } from "preact/hooks";

import preactLogo from "./assets/preact.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" class="logo" alt="Vite logo" />
				</a>
				<a href="https://preactjs.com" target="_blank" rel="noreferrer">
					<img src={preactLogo} class="logo preact" alt="Preact logo" />
				</a>
			</div>
			<h1>Vite + Preact</h1>
			<div class="card">
				<button onClick={() => setCount((oldCount) => oldCount + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/app.jsx</code> and save to test HMR
				</p>
			</div>
			<p class="read-the-docs">
				Click on the Vite and Preact logos to learn more
			</p>
		</>
	);
}

export { App };
