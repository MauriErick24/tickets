<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePassengersTable extends Migration
{
    public function up()
    {
        Schema::create('passengers', function (Blueprint $table) {
            $table->id('passenger_id');
            $table->string('name', 100);
            $table->string('lastname', 100);
            $table->date('date_of_birth');
            $table->string('ci', 20)->unique();
            $table->string('phone_number', 20)->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('passengers');
    }
}
