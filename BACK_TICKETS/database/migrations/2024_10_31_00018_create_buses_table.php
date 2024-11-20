<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBusesTable extends Migration
{
    public function up()
    {
        Schema::create('buses', function (Blueprint $table) {
            $table->id('bus_id');
            $table->string('number_plate', 20)->unique();
            $table->integer('seats_number');
            $table->foreignId('bus_state_id')->constrained('bus_states', 'bus_state_id');
            $table->string('type', 50);
            $table->foreignId('company_id')->constrained('companies', 'company_id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('buses');
    }
}
