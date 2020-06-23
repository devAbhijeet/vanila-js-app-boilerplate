import { get } from "./http-service"

const getUserInfo = (userName) => {
	return get(userName)
}

export {
	getUserInfo
};