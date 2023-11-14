<!DOCTYPE html>
<html>
<head>
    <title>Notificacion de registro</title>
</head>
<body>
	<center><h2>VenezuelaCargo</h2><center>
	<hr>
	<center><h3>Hola cliente!<h3><center> 
	<center><h3>Su cuenta fue registrada satisfactoriamente</h3><center>
	<br>
    <center><h3><b>Usuario:</b> {{ $details['username'] }}</h3>
    <h3><b>Code:</b> {{ $details['code'] }}</h3><center>

    <br>
    <center><p>Al momento de realizar tus compras, debes colocar tus datos de la siguiente forma:
        <br>
        <strong>NAME:</strong>primer nombre + Código<br>
        <strong>LASTNAME:</strong>VzlaCargo<br>
        <strong>ADDRESS:</strong>6994 NW 82 Ave<br>
        <strong>CITY:</strong>Miami<br>
        <strong>ZIP CODE:</strong>33166<br>
        <strong>PHONE:</strong>7868720552<br>
         </p><center>

    <hr>
    <center><a href="{{$details['url']}}"><h1>Ingresar a mi Cuenta</h1></a><center>
</body>
</html>