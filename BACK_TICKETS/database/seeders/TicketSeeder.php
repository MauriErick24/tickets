<?php

namespace Database\Seeders;

use App\Models\Ticket;
use Illuminate\Database\Seeder;

class TicketSeeder extends Seeder
{
    public function run()
    {
        Ticket::create(['travel_id' => 1, 'passenger_id' => 1, 'seat_number' => 10, 'price' => 25.00]);
        Ticket::create(['travel_id' => 2, 'passenger_id' => 2, 'seat_number' => 15, 'price' => 30.00]);
    }
}
