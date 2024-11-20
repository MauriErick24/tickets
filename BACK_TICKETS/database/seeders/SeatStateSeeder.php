<?php

namespace Database\Seeders;

use App\Models\SeatState;
use Illuminate\Database\Seeder;

class SeatStateSeeder extends Seeder
{
    public function run()
    {
        SeatState::create(['state' => 'Available']);
        SeatState::create(['state' => 'Reserved']);
        SeatState::create(['state' => 'Occupied']);
    }
}
