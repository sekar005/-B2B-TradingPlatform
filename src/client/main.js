var apiUrl = process.env.API_SERVER_URL;
var environment = process.env.NODE_ENV;
document.write(apiUrl + ' ' + environment);
function test() {
	let a = 2 ** 3;
	console.log(a);
}
test();
