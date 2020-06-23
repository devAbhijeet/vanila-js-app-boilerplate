import './styles.css';
import './dom/index'
import { getUserInfo } from './services/index'
import { greet } from "./components/index"

const root = document.getElementById("app");

const render = () => {
	root.innerHTML = greet("World!")
}

render()