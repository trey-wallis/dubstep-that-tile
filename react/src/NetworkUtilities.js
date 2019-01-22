const URL = "http://localhost";
const PORT = "3006";
const ADDRESS = URL + ":" + PORT; 

/*
* Takes in a route http://localhost:3006/ROUTE
* and a javascript object
*/
export const fetchPost = async (route, object, address=ADDRESS) => {
	const response = await fetch(address + "/" + route, {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(object)
	});
	const json = await response.json();
	return json;
};

export const fetchGet = (route, object) => {

};