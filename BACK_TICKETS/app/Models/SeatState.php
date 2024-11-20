<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SeatState extends Model
{
    use HasFactory;

    protected $primaryKey = 'seat_state_id';
    protected $fillable = ['name'];

    public function seats()
    {
        return $this->hasMany(Seat::class, 'seat_state_id');
    }
}
