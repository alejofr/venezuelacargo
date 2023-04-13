<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class IsValidAdmin
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

        if( $request->user()->getRoleNames()->first() != 'admin' ){
            return response()->json([
                'status' => 403,
                'message' => '¡Solicitud Denegada! Usted No Esta Autorizado Para Esta Solicitud'
            ], 403);
        }

        return $next($request);
    }
}
