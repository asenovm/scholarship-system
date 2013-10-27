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
		 'firstName': 'Атанас' + i, 
		 'surname': 'Атанас' + i, 
		 'lastName': 'Атанас' + i, 
		 'facultyId': i, 
		 'facultyName': 'Факултет', 
		};
		if (i<(numberOfDummyUser/2)) {
			user.major = "Компютърни науки"
		}else{
			user.major = "Приложна математика"
		};

	db.users.save(user);	
};

// add dummy applications
for (var i = 0; i < numberOfDummyUser; i++) {
	application = { "email" : i + "kerezov.atanas@gmail.com",
	 "grade" : "6", 
	 "schoolYear" : "4",
	  "socialScholarship" : true, 
	  "firstParentFirstName" : "тест",
	   "firstParentSurname" : "тест", 
	   "firstParentLastName" : "тест",
	    "firstParentIncome" : "6",
	     "secondParentFirstName" : "тест",
	      "secondParentSurname" : "тест",
	       "secondParentLastName" : "тест",
	        "secondParentCompany" : "те",
	         "secondParentIncome" : "6",
	          "status" : "pending", 
	      };
		if (i<(numberOfDummyUser/2)) {
			application.status = "pending";
		}else{
			application.status = "approved";
		}

	db.applications.save(application);	
};

// add dummy majors settings
for (var i = 0; i < numberOfDummyUser; i++) {
	major = {
		major: "Специалност " + i,
		maxOccupacity : i*10 + i * 7,
		deadLine: Date.now(),
	};
	db.majors.save(major);	
}
