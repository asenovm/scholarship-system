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
var numberOfDummyUser = 20;

db = db.getSiblingDB(mDbName);

// add dummy users
db.users.drop();
for (var i = 0; i < numberOfDummyUser; i++) {
	user = {
		'userType' : 'student',
		'email': i + "kerezov.atanas@gmail.com",
		'password': "d839395e4f10d9718e3a0768ef911864",
		'firstName': 'Атанас', 
		'surname': 'Атанас', 
		'lastName': 'Атанас', 
		'facultyId': i, 
		'facultyName': 'Факултет по математика и информатика', 
	};
	if (i<(numberOfDummyUser/2)) {
		user.major = "Компютърни науки"
	}else{
		user.major = "Приложна математика"
	};
	db.users.save(user);	
};
// ==========================
asenov = { 
	"email" : "asenov.m@gmail.com", 
	"password" : "d839395e4f10d9718e3a0768ef911864", 
	"firstName" : "Мартин", 
	"surname" : "Асенов", 
	"lastName" : "Асенов", 
	"facultyId" : "12345", 
	"facultyName" : "Факултет по математика и информатика", 
	"major" : "КН", 
	"userType" : "student" 
};
db.users.save(asenov);	
admin = { 
	"email" : "admin@admin.com", 
	"facultyId" : "12345", 
	"facultyName" : "Факултет по математика и информатика", 
	"firstName" : "Админ", 
	"lastName" : "АДмин", 
	"major" : "КН", 
	"password" : "f6adb63acbeb9ee181e1161f825af03e", 
	"surname" : "Админ", 
	"userType" : "admin" 
};
// ==========================
db.users.save(admin);	

// add dummy applications
db.applications.drop();
for (var i = 0; i < numberOfDummyUser; i++) {
	var grade = (4 + i/10);
	application = { 
		"email" : i + "kerezov.atanas@gmail.com",
		"major" : "Компютърни науки",
		"grade" : "4", 
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
		application.major = "Компютърни науки";
		application.status = "approved";//"pending";
		application.grade = 4 + i/10;
	}else if (i<(2*numberOfDummyUser/3)) {
		application.major = "СТ";
		application.status = "deleted";//"pending";
		application.grade = 4 + i/10;
	} else{
		application.major = "Инф";
		application.grade = 4;
	}

	db.applications.save(application);	
};

db.majors.drop();
majorsArr = ['КН', "Компютърни науки", 'Инф', 'СофтИнж', 'ИнфСист', 'Статистика'];
// add dummy majors settings
for (var i = 0; i < majorsArr.length; i++) {
	major = {
		major: majorsArr[i],
		maxOccupacity : 3,
		deadLine: Date.now()+10000,
		'status':'ongo', 
	};
	db.majors.save(major);	
};


db.applications.save({
	"email" : "asenov.m@gmail.com", 
	"major" : "КН",
	"grade" : "6", 
	"schoolYear" : "4", 
	"firstParentFirstName" : "Мартин",
	"firstParentSurname" : "Асенов", 
	"firstParentLastName" : "Асенов", 
	"firstParentCompany" : "Асенов",
	"firstParentIncome" : "6",
	"secondParentFirstName" : "Мартин",
	"secondParentSurname" : "Асенов", "secondParentLastName" : "Асенов",
	"secondParentCompany" : "Асенов", 
	"secondParentIncome" : "6", 
	"status" : "pending", 
	"timestamp" : 1382879050190
});
