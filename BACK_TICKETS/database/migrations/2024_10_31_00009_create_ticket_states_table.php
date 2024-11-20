<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTicketStatesTable extends Migration
{
    public function up()
    {
        Schema::create('ticket_states', function (Blueprint $table) {
            $table->id('ticket_state_id');
            $table->string('state', 50);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ticket_states');
    }
}
