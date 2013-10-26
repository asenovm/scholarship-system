/**
 * 
 */
//require(["CriptoJS"], function(util) {
//    //This function is called when scripts/helper/util.js is loaded.
//    //If util.js calls define(), then this function is not fired until
//    //util's dependencies have loaded, and the util argument will hold
//    //the module value for "helper/util".
//})
var mDbName = 'scholar-systems';
var numberOfDummyUser = 10;

db = db.getSiblingDB(mDbName);
for (var i = 0; i < numberOfDummyUser; i++) {
	user = {
		'email':"user"+ i+"@example.com",
		 'password': i+"resu",
		 'firstName': 'firstNameUser' + i, 
		 'surname': 'surnameUser' + i, 
		 'lastName': 'lastNameUser' + i, 
		 'facultyId': 'facultyIdUser' + i, 
		 'facultyName': i, 
		};
		if (i<(numberOfDummyUser/2)) {
			user.major = "Computer Science"
		}else{
			user.major = "Apply Mathematics"
		};

	db.users.save(user);	
};
