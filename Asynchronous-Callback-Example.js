
function showLoadingData(){
	console.log("1. Loading Screen Appeared");
}

function hideLoadingData(){
	console.log("4. Loading Screen Hidden");
}

function getDataFromAPI(callback){
	console.log("2. Start Loading Data");
  
  setTimeout(() => {
  	console.log("3. Finished Loading Data");
    callback();
  }, 2000 );
}

showLoadingData();
getDataFromAPI(hideLoadingData); //contoh callback

// Output:
// Logged immediately:
// "1. Loading Screen Appeared"
// "2. Start Loading Data"
// After 2000 ms:
// "3. Finished Loading Data"
// "4. Loading Screen Hidden"
