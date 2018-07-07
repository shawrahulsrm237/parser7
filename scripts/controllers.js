app.controller('myCtrl', function($scope,Service){
   $scope.uploadFile = function(){
      var file = $scope.myFile;
      
      console.log('file is ' );
      console.dir(file);
      
      var uploadUrl = "http://localhost:3000/parse";
      var upload=Service.uploadFileToUrl(file, uploadUrl);
      upload.promise.then(function(res){
      	console.log(res.data);
      	$scope.output=res.data.data;
      	console.log($scope.output);
      },function(err){
      	console.log(err);
      });
      
   };
});
