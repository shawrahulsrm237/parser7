// define factory for data source
app.service("Service", function($http){
   
   this.uploadFileToUrl = function(file, uploadUrl){
      var data = {promise: null};
      var fd = new FormData();
      fd.append('file1', file);

      data.promise=$http.post(uploadUrl, fd, {
         transformRequest: angular.identity,
         headers: {'Content-Type': undefined}
      })
      return data;
      
   }
  
  
});