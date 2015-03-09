// (function() {

//     angular.module('angnewsApp').controller('UserCtrl', function($scope, FIR) {

//         // var isNewUser = true;
//         var ref = new Firebase("https://<your-firebase>.firebaseio.com");
//         ref.onAuth(function(authData) {
//             if (authData && isNewUser) {
//                 // save the user's profile into Firebase so we can list users,
//                 // use them in Security and Firebase Rules, and show profiles
//                 ref.child("users").child(authData.uid).set({
//                     provider: authData.provider,
//                     // name: getName(authData)
//                 });
//             }
//         });
//     });

// })();