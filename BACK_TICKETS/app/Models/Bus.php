<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bus extends Model
{
    use HasFactory;

    // Specify the custom primary key
    protected $primaryKey = 'bus_id';

    // Specify the data type of the primary key
    protected $keyType = 'int';

    // Indicate whether the primary key is auto-incrementing
    public $incrementing = true;

    // Define fillable fields
    protected $fillable = [
        'number_plate',
        'seats_number',
        'bus_state_id',
        'type',
        'company_id',
    ];

    // Define relationships
    public function busState()
    {
        return $this->belongsTo(BusState::class, 'bus_state_id');
    }

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }
}
