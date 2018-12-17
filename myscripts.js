	// myFunction is used to read filename into a value and store it in FileName
	function myFunction(){
		  
			var fullPath = document.getElementById('upload').value;
			if (fullPath) {
			var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
			var filename = fullPath.substring(startIndex);
			if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
				filename = filename.substring(1);
				
			}
			document.getElementById("demo").innerHTML =filename;
             }}
			
		class Employee {
			 
			
			
				constructor( name,hourlypay,totalSalary) {
				 this.Name = name;
				 this.Hourlypay = hourlypay;
				 this.TotalSalary = totalSalary;
				}
		   }
		   
	empl = new Employee("oscar", 19,1000);
	console.log(empl.name, empl.hourlypay, empl.totalSalary);