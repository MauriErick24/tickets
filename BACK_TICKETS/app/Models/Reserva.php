<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserva extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'destino',
        'fecha',
        'asientos',
    ];

    // Relación con el modelo User (un usuario tiene muchas reservas)
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
