function alumnosCtrl($scope){
	$scope.alumnos=[
		{nombre:'Sergio', telefono:'543543', curso:'Jquery'},
		{nombre:'Juan', telefono:'765765', curso:'Computacion'},
		{nombre:'Pepe', telefono:'342444', curso:'Videojuegos'}
	];

	$scope.Save = function(){
		$scope.alumnos.push({nombre:$scope.na.nombre,telefono:$scope.na.telefono,curso:$scope.na.curso});
		$scope.formVisibiity=false;
	}

	$scope.formVisibiity=false;

	$scope.visibility = function(){
		$scope.formVisibiity=true;
	}
}