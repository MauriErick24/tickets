<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $primaryKey = 'company_id';
    protected $fillable = ['name', 'NIT', 'phone_number'];

    public function travels()
    {
        return $this->hasMany(Travel::class, 'company_id');
    }

    public function buses()
    {
        return $this->hasMany(Bus::class, 'company_id');
    }
}
