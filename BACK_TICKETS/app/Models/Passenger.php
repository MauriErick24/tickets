<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Passenger extends Model
{
    use HasFactory;

    // Specify the custom primary key
    protected $primaryKey = 'passenger_id';

    // If the primary key is not an auto-incrementing integer
    public $incrementing = true;

    // Specify the data type of the primary key if necessary
    protected $keyType = 'int';

    // Define fillable fields
    protected $fillable = [
        'name',
        'lastname',
        'date_of_birth',
        'ci',
        'phone_number',
    ];
    
    // Define table name if it's not pluralized conventionally
    protected $table = 'passengers';
}
