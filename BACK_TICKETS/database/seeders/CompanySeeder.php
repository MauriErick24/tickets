<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    public function run()
    {
        Company::create(['name' => 'Express Travel', 'nit' => '123456789', 'phone_number' => '123-456-7890']);
        Company::create(['name' => 'Quick Rides', 'nit' => '987654321', 'phone_number' => '098-765-4321']);
    }
}
