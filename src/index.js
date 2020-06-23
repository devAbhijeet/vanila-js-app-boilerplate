import "./styles.css";
import { getUserInfo } from './services/index'
import { greet } from "./components/index"

const root = document.getElementById("app");

const render = () => {
	root.innerHTML = !state.userName ? 'Fetching user....' : state.userName
}

render()