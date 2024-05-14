<?php

use App\Http\Controllers\TemplateController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [TemplateController::class, 'home']);
Route::get('/empresa', [TemplateController::class, 'empresa']);
Route::get('/servicios', [TemplateController::class, 'servicios']);
Route::get('/proyectos', [TemplateController::class, 'proyectos']);
Route::get('/contacto', [TemplateController::class, 'contacto']);
