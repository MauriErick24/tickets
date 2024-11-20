<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeatStatesTable extends Migration
{
    public function up()
    {
        Schema::create('seat_states', function (Blueprint $table) {
            $table->id('seat_state_id');
            $table->string('state', 50);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('seat_states');
    }
}
