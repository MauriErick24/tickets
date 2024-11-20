<?php

namespace Database\Seeders;

use App\Models\Travel;
use Illuminate\Database\Seeder;

class TravelSeeder extends Seeder
{
    public function run()
    {
        Travel::create(['city_id' => 1, 'company_id' => 1, 'departure_time' => '2024-12-01 08:00:00']);
        Travel::create(['city_id' => 2, 'company_id' => 2, 'departure_time' => '2024-12-01 14:00:00']);
    }
}
