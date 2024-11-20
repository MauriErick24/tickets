<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeatsTable extends Migration
{
    public function up()
    {
        Schema::create('seats', function (Blueprint $table) {
            $table->id('seat_id');
            $table->integer('number');
            $table->foreignId('seat_state_id')->constrained('seat_states', 'seat_state_id');
            $table->foreignId('ticket_id')->nullable()->constrained('tickets', 'ticket_id');
            $table->timestamps();

            $table->unique(['number', 'ticket_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('seats');
    }
}
