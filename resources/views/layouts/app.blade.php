<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }} - </title>

    <!-- Scripts -->
    <script src="{{mix('js/app.js')}}" defer></script>

    <!-- Styles -->
    <link href="{{ asset('css/tabler.css') }}" rel="stylesheet">
    <!-- Styles -->
    <link href="{{ asset('css/tabler-icons.min.css') }}" rel="stylesheet">
</head>
<body class="">  
    <div id="app" class="h-100 w-100"></div>
</body>
    <script src="{{ asset('js/tabler.min.js') }}"></script>
</html>

<?php 
    /*use Carbon\Carbon;

    $date = Carbon::now();
    $fecha_actual = $date->format('Y-m-d');
    $dia_semana = date('w', strtotime($fecha_actual));

    $hora = $date->toTimeString();
    $horaSta = strtotime($hora);

    echo $hora;
    echo "<br>";
    echo $horaSta;
    echo "<br>";
    echo $dia_semana;

    if( $horaSta > strtotime('15:00:00')  ){
        echo "es mayor";
    }*/
?>