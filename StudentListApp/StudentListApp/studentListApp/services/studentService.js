
(function (app) {

    var student =
                  [  
                      {
                          Id: 1,
                          FirstName: "Vani",
                          LastName: "Madhavaram",
                          MobilePhone: "567004332",
                          HomePhone: "454355465",
                          Street: "Holmgrem Way",
                          City: "Green Bay",
                          State: "WI",
                          Zip: "55555",
                          Country: "USA",
                          Degree: "Masters",
                          Major: "ISEM",
                          PersonalEmail: "vm@gmail.com",
                          StudentEmail: "vm@my.harrisburgu.edu"
                      },
                      {
                          Id: 2,
                          FirstName: "ABC",
                          LastName: "XYZ",
                          MobilePhone: "123456789",
                          HomePhone: " ",
                          Street: "Badura Ave",
                          City: "Las Vegas",
                          State: "NV",
                          Zip: "12345",
                          Country: "USA",
                          Degree: "Bachelors",
                          Major: "CS",
                          PersonalEmail: "abc@gmail.com",
                          StudentEmail: "ax@unlv.edu"
                       },
                        {
                            Id: 3,
                            FirstName: "YYY",
                            LastName: "ZZZ",
                            MobilePhone: "34567890",
                            HomePhone: "233456678",
                            Street: "Main St",
                            City: "Orlando",
                            State: "FL",
                            Zip: "45678",
                            Country: "USA",
                            Degree: "Masters",
                            Major: "CIS",
                            PersonalEmail: "yyy@gmail.com",
                            StudentEmail: "yzzz@ucf.edu"
                        },
                  ];


    var studentService = function () {
        var studentFactory = {};

        studentFactory.getStudent = function (index) {
            var returnStudent = [];
            if (studentFactory.isOverflow(index))
            {
                index = 0;
            }
            returnStudent.push(student[index]);
            return returnStudent;
        };

        studentFactory.isOverflow = function (index) {

            return (student.length <= index)
        };

        studentFactory.addStudent = function (index) {
            var returnStudent = [];
            var newIndex = student.length + 1;
            student.push(studentFactory.newItem(newIndex));
            returnStudent.push(student[student.length - 1]);
            return (returnStudent)
        };

        studentFactory.deleteStudent = function (index) {
            var returnStudent = [];

            student.splice(index,1);
            if (student.length <= index)
           {
                index = student.length - 1;
           }
            returnStudent.push(student[index]);
           return (returnStudent)
        };

        studentFactory.newItem = function (index) {

            var newStudent = {

                Id: index,
                FirstName: "",
                LastName: "",
                MobilePhone: "",
                HomePhone: "",
                Street: "",
                City: "",
                State: "",
                Zip: "",
                Country: "",
                Degree: "",
                Major: "",
                PersonalEmail: "",
                StudentEmail: ""
            }
            return newStudent;

        }

        return studentFactory;
    };
    app.factory("studentService", studentService);

}(angular.module("studentListApp")));