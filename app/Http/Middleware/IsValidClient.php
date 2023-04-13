<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class IsValidClient
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if( $request->user()->getRoleNames()->first() != 'client' ){
            return response()->json([
                'status' => 403,
                'message' => '¡Solicitud Denegada! Usted No Esta Autorizado Para Esta Solicitud'
            ], 403);
        }

        if( !isset($request->usuario_id) || $request->usuario_id === '' ){
            return response()->json([
                'status' => 403,
                'message' => '¡Por Favor debe enviar como parametro "usuario_id", para procesar su solicitud!'
            ], 403);
        }

        return $next($request);
    }
}
