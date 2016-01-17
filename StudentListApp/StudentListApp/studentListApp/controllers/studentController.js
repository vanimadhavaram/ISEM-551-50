(function (app) {
    var studentController = function ($scope, studentService) {
        var init = function () {
            $scope.student = studentService.getStudent(0);
       };

        var index = 0;

        $scope.nextStudent = function () {
            index++;
            if (studentService.isOverflow(index))
            {
                index--;
            }
            $scope.student = studentService.getStudent(index);

        }

        $scope.previousStudent = function () {
            index--;
            if (index < 0) {
                index = 0;
            }
            $scope.student = studentService.getStudent(index);
        }

        $scope.addStudent = function () {
            index--;
            if (index < 0) {
                index = 0;
            }
            $scope.student = studentService.addStudent(index);
        }

        $scope.deleteStudent = function () {
         
            $scope.student = studentService.deleteStudent(index);
            index--;
        }      

        init();
    };
    app.controller("studentController", ["$scope", "studentService", studentController]);
}(angular.module("studentListApp")));