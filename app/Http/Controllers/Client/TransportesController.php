<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Configuracion\EmpresasTransportes;
use Illuminate\Http\Request;

class TransportesController extends Controller
{
    public function index()
    {
        return response()->json([
            'status' => 200,
            'results' => EmpresasTransportes::where('activo', '=', true)->get()->toArray()
        ], 200);
    }
}
