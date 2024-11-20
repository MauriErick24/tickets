<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReservaController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

Route::middleware(['auth:sanctum', 'role:cliente'])->group(function () {
    Route::post('/reservas', [ReservaController::class, 'create']);
    Route::get('/reservas', [ReservaController::class, 'index']);
});

Route::get('/', function () {
    return view('welcome');
});
