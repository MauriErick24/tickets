<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Travel extends Model
{
    use HasFactory;

    protected $primaryKey = 'travel_id';
    protected $fillable = ['date', 'company_id', 'city_id', 'passenger_id', 'bus_id'];

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }

    public function city()
    {
        return $this->belongsTo(City::class, 'city_id');
    }

    public function passenger()
    {
        return $this->belongsTo(Passenger::class, 'passenger_id');
    }

    public function bus()
    {
        return $this->belongsTo(Bus::class, 'bus_id');
    }

    public function tickets()
    {
        return $this->hasMany(Ticket::class, 'travel_id');
    }
}
