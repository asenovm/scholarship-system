#================ test registration ===================
#-- success --
#(1)
echo "must success"
set USER_CORRECT_CORRECT=userХX@example.com
set USER_PASS_CORRECT=ХXresu91
set USER_FN_CORRECT=Атанас
set USER_SN_CORRECT=Красимиров
set USER_LN_CORRECT=Керезов
set USER_FACNAME_CORRECT=ФМИ
set USER_FACID_CORRECT=24296

curl --data "email=$USER_CORRECT_CORRECT&password=$USER_PASS_CORRECT&firstName=$USER_FN_CORRECT&surname=$USER_SN_CORRECT&lastName=Керезов&facultyId=24295&facultyName=FMI&major=КН" http://localhost:3000/register
sleep 2

#(2)
echo "must success"
curl --data "email=userХ@example.com&password=Xresu123&firstName=Петър&surname=Иванов&lastName=Петров&facultyId=12345&facultyName=ФМИ&major=СТ" http://localhost:3000/register
sleep 2

#-- fail --
#(1 wrong email)
echo "must fail"
curl --data "email=example.com&password=Xresu&firstName=firstNameUserХ&surname=surnameUserХ&lastName=lastNameUserХ&facultyId=Х&facultyName=FMI&major=Statistics" http://localhost:3000/register
sleep 2

#(2 wrong password)
echo "must fail"
curl --data "email=test@example.com&password=Xresu&firstName=firstNameUserХ&surname=surnameUserХ&lastName=lastNameUserХ&facultyId=Х&facultyName=FMI&major=Statistics" http://localhost:3000/register
sleep 2

#(3 wrong firstName)
echo "must fail"
curl --data "email=test@example.com&password=Xresu999&firstName=firstNameUserХ&surname=surnameUserХ&lastName=lastNameUserХ&facultyId=Х&facultyName=FMI&major=Statistics" http://localhost:3000/register
sleep 2

#(4 wrong surname)
echo "must fail"
curl --data "email=test@example.com&password=Xresu999&firstName=ИмеХ&surname=surnameUserХ&lastName=lastNameUserХ&facultyId=Х&facultyName=FMI&major=Statistics" http://localhost:3000/register
sleep 2

#(4 wrong lastName)
echo "must fail"
curl --data "email=test@example.com&password=Xresu999&firstName=ИмеТестХ&surname=ПрезимеТест&lastName=lastNameUserХ&facultyId=Х&facultyName=FMI&major=Statistics" http://localhost:3000/register
sleep 2

#(5 wrong facultyId)
echo "must fail"
curl --data "email=test@example.com&password=Xresu999&firstName=ИмеТестХ&surname=ПрезимеТест&lastName=ФамилияТест&facultyId=Х&facultyName=FMI&major=Statistics" http://localhost:3000/register
sleep 2

#(6 wrong major)
echo "must fail"
curl --data "email=test@example.com&password=Xresu999&firstName=ИмеТестХ&surname=ПрезимеТест&lastName=ФамилияТест&facultyId=23412&facultyName=FMI&major=Statistics" http://localhost:3000/register
sleep 2

#(7) -- success --
echo "must success"
echo "Test: curl --data "email=test@example.com&password=Xresu999&firstName=ИмеТестХ&surname=ПрезимеТест&lastName=ФамилияТест&facultyId=23412&facultyName=FMI&major=Инф" http://localhost:3000/register"
curl --data "email=test@example.com&password=Xresu999&firstName=ИмеТестХ&surname=ПрезимеТест&lastName=ФамилияТест&facultyId=23412&facultyName=FMI&major=Statistics" http://localhost:3000/register
=============== test login ====================
--  success --
curl --data "username=userХ@example.com&password=Xresu123" http://localhost:3000/login

-- test login fail
curl --data "username=user1@example.com&password=1re" http://localhost:3000/login
=======
curl --data "username=userХX@example.com&password=$USER_PASS_CORRECT" http://localhost:3000/login
-- test login fail
curl --data "username=user1@example.com&password=1re" http://localhost:3000/login
>>>>>>> Add DB dummy data
-- test getunapproved applications success
curl -X GET http://localhost:3000/admin/applications

<<<<<<< HEAD
-- test app creation success
 curl --data "email=userX@example.com&grade=6&schoolYear=3&socialScholarship=false&yearlyScholarship=true&firstParentFirstName=Пешо&firstParentSurname=Иванов&firstParentLastName=Петров&firstParentCompany=Компания&firstParentIncome=400&secondParentFirstName=Иван&secondParentSurname=Петров&secondParentLastName=Петров&secondParentCompany=Фирма&secondParentIncome=1300" http://localhost:3000/application
=======
===================================
-- test approve application success
curl -X PUT --data "email=4kerezov.atanas@gmail.com" http://localhost:3000/admin/applications

===================================
-- test approve application success
curl -X PUT --data "email=4kerezov.atanas@gmail.com" http://localhost:3000/admin/applications
===================================
-- test set major settings
curl -X PUT --data "major=КН&maxOccupacity=100&deadLine=1382864276756" http://localhost:3000/admin/settings


>>>>>>> Add DB dummy data

-- test app creation fail
 curl --data "email=user1@example.com&grade=6&schoolYear=3&socialScholarship=true&yearlyScholarship=false&firstParentFirstName=Пешо&firstParentSurname=fpsurname&firstParentLastName=fpLastName&firstParentCompany=fpcompany&firstParentIncome=400&secondParentFirstName=secondparent&secondParentSurname=spsurname&secondParentLastName=spLastName&secondParentCompany=spcompany&secondParentIncome=5g00" http://localhost:3000/application

-- test get application success
curl -G --data "email=userX@example.com" http://localhost:3000/application

-- test mark app as deleted
curl -X DELETE --data "email=userX@example.com" http://localhost:3000/application
