'use strict';

angular.module('app.memberList')
    .controller('UserFormController', function($scope) {
        var userCtrl 		= this; // controller self reference
        var dateTimeFormat	= 'MMMM Do YYYY, h:mm:ss a';
        var userIdSequence 	= 0;

        //Define a default user detail object
        userCtrl.userDetails 	= getUserDetailsObject();
        userCtrl.userDetailList = [];

        userCtrl.submitUserDetails = function() {
        	userCtrl.userDetails['userId'] 		= ++userIdSequence;
        	userCtrl.userDetails['createdDate'] = moment().format(dateTimeFormat);

        	userCtrl.userDetailList.push(userCtrl.userDetails);

        	userCtrl.userDetails = getUserDetailsObject();

        	console.log(userCtrl.userDetailList);
        };

        userCtrl.removeUser = function(userDetails) {
            userCtrl.userDetailList.splice(userCtrl.userDetailList.indexOf(userDetails), 1);
        };

        function getUserDetailsObject() {
        	return {
	        	userId:0,
	        	userName:"",
	        	userEmail:"", 
	        	userTel:"",
	        	createdDate:""
        	};
        }

    });