<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTravelsTable extends Migration
{
    public function up()
    {
        Schema::create('travels', function (Blueprint $table) {
            $table->id('travel_id');
            $table->date('departure_date');
            $table->time('departure_time');
            $table->foreignId('passenger_id')->constrained('passengers', 'passenger_id');
            $table->foreignId('city_id')->constrained('cities', 'city_id');
            $table->foreignId('company_id')->constrained('companies', 'company_id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('travels');
    }
}
