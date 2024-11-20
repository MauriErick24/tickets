<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBusStatesTable extends Migration
{
    public function up()
    {
        Schema::create('bus_states', function (Blueprint $table) {
            $table->id('bus_state_id');
            $table->string('state', 50);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('bus_states');
    }
}
