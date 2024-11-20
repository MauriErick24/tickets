<?php

namespace Database\Seeders;

use App\Models\BusState;
use Illuminate\Database\Seeder;

class BusStateSeeder extends Seeder
{
    public function run()
    {
        BusState::create(['state' => 'Available']);
        BusState::create(['state' => 'In Maintenance']);
        BusState::create(['state' => 'On Route']);
    }
}
