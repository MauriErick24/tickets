<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Seeder;

class CitySeeder extends Seeder
{
    public function run()
    {
        City::create(['name' => 'New York']);
        City::create(['name' => 'Los Angeles']);
        City::create(['name' => 'Chicago']);
        City::create(['name' => 'Houston']);
        City::create(['name' => 'Phoenix']);
    }
}
