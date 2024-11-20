<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reserva;

class ReservaController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'destino' => 'required|string',
            'fecha' => 'required|date',
            'asientos' => 'required|integer'
        ]);

        $reserva = Reserva::create([
            'user_id' => $request->user()->id,
            'destino' => $request->destino,
            'fecha' => $request->fecha,
            'asientos' => $request->asientos
        ]);

        return response()->json(['reserva' => $reserva]);
    }

    public function index(Request $request)
    {
        $reservas = Reserva::where('user_id', $request->user()->id)->get();
        return response()->json(['reservas' => $reservas]);
    }
}
