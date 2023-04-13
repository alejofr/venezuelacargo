<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BannerApp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class BannerAppController extends Controller
{
    public function index()
    {
        return response()->json([
            'status' => 200,
            'results' => BannerApp::all(),
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'image' => ['required'],
        ]);

        if ( isset($validator) && $validator->fails() ) {
            return response()->json([
                'status' => 403,
                'message' => $validator->errors()->first(),
            ], 403);
        }

        BannerApp::create([
            'ruta_image' => Storage::url($request->image->store('public/images'))
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Imagen agregada',
        ], 200);
    }

    public function update($id)
    {
        
        $imagen = BannerApp::find($id);

        if( $imagen != null ){
            //BannerApp::where('estado', '=', 'visible')->update(["estado" => 'no-visible']);

            if( $imagen->estado  == 'no-visible'){
                $imagen->estado = 'visible';
            }else{
                $imagen->estado = 'no-visible';
            }
            
            $imagen->update();

            return response()->json([
                'status' => 200,
                'message' => 'Imagen actualizada y visible para banner',
            ], 200);

        }

        return response()->json([
            'status' => 422,
            'message' => 'No existe esta imagen',
        ], 422);
    }

    public function destroy($id)
    {
        
        $imagen = BannerApp::find($id);

        if( $imagen != null ){
            //BannerApp::where('estado', '=', 'visible')->update(["estado" => 'no-visible']);
            $imagen->delete();

            return response()->json([
                'status' => 200,
                'message' => 'Imagen eliminada con exito',
            ], 200);

        }

        return response()->json([
            'status' => 422,
            'message' => 'No existe esta imagen',
        ], 422);
    }
}
