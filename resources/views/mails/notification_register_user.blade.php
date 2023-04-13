<!DOCTYPE html>
<html>
<head>
    <title>Notificacion de registro de nuevo usuario</title>
</head>
<body>
	<center><h2>VenezuelaCargo</h2><center>
	<hr>
	<center><h3>Estimado Administrador del Sistema!<h3><center> 
	<center><h3>Se ha registrado un nuevo usuario satisfactoriamente, debe asignarsele un código</h3><center>
	<br>
    <center><h3><b>Usuario:</b> {{ $details['username'] }}</h3>
    <h3><b>Cedula:</b> {{ $details['cedula'] }}</h3><center>
    <h3><b>Nombre:</b> {{ $details['client'] }}</h3><center>

    <br>
    <hr>
    <center><a href="{{$details['url']}}"><h3>Ingresar a mi Cuenta</h3></a><center>
</body>
</html>