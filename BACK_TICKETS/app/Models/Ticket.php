<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $primaryKey = 'ticket_id';
    protected $fillable = ['price', 'travel_id', 'passenger_id'];

    public function travel()
    {
        return $this->belongsTo(Travel::class, 'travel_id');
    }

    public function passenger()
    {
        return $this->belongsTo(Passenger::class, 'passenger_id');
    }

    public function seats()
    {
        return $this->hasMany(Seat::class, 'ticket_id');
    }
}
