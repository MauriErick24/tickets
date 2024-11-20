<?php

namespace Database\Seeders;

use App\Models\Passenger;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PassengerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('passengers')->insert([
            [
                'name' => 'John',
                'lastname' => 'Doe',
                'date_of_birth' => '1985-02-15',
                'ci' => '12345678',
                'phone_number' => '123-456-7890',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Jane',
                'lastname' => 'Smith',
                'date_of_birth' => '1990-05-20',
                'ci' => '87654321',
                'phone_number' => '987-654-3210',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Alice',
                'lastname' => 'Johnson',
                'date_of_birth' => '1978-11-03',
                'ci' => '11223344',
                'phone_number' => '555-123-4567',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
