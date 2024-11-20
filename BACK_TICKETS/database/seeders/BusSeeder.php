<?php

namespace Database\Seeders;

use App\Models\Bus;
use Illuminate\Database\Seeder;

class BusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Bus::insert([
            [
                'number_plate' => 'ABC123',
                'seats_number' => 45,
                'bus_state_id' => 1, // Assuming an existing state ID
                'type' => 'Luxury',
                'company_id' => 1,  // Assuming an existing company ID
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'number_plate' => 'XYZ789',
                'seats_number' => 40,
                'bus_state_id' => 2,
                'type' => 'Standard',
                'company_id' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
