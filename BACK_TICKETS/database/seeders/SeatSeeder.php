<?php

namespace Database\Seeders;

use App\Models\Seat;
use Illuminate\Database\Seeder;

class SeatSeeder extends Seeder
{
    public function run()
    {
        Seat::create(['bus_id' => 1, 'seat_state_id' => 1, 'seat_number' => 1]);
        Seat::create(['bus_id' => 1, 'seat_state_id' => 2, 'seat_number' => 2]);
        Seat::create(['bus_id' => 2, 'seat_state_id' => 1, 'seat_number' => 3]);
    }
}
