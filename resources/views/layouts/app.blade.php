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
