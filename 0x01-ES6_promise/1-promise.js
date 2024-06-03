export default function getFullResponseFromAPI(success) {
	return promise ((resolve, reject) => {
		if(sucsess) {
			resolve({
				status: 200,
				body: 'Success'
			});
		}else {
			reject(new Error('The fake API is not working currently'));
		}
	});
}
