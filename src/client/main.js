var apiUrl = process.env.API_SERVER_URL;
var environment = process.env.NODE_ENV;
document.write(apiUrl + ' ' + environment);
function test() {
	if(3>2) {
		let i=2;
		i++;
	}
}
test();