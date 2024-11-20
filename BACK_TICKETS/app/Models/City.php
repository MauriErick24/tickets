<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;

    protected $primaryKey = 'city_id';
    protected $fillable = ['name'];

    public function travels()
    {
        return $this->hasMany(Travel::class, 'city_id');
    }
}