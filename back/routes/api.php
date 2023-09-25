<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AlunoController;
use App\Http\Controllers\TurmaController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AlunoController::class)->group(function (){
    Route::get('/lerAlunos/{id}', 'readAllStudent');
    Route::post('/inserirAluno', 'insertStudent');
    Route::get('/lerUmAluno/{id}', 'readOneStudent');
    Route::put('/editarAluno/{id}', 'updateStudent');
    Route::delete('/removerAluno/{id}', 'removeStudent');
});


Route::controller(TurmaController::class)->group(function (){
    Route::get('/lerTurmas', 'readClasses');
    Route::post('/inserirTurma', 'insertClass');
    Route::get('/lerTurma/{id}', 'readClass');
    Route::put('/editarTurma{id}', 'updateClass');
    Route::delete('/removerTurma/{id} ', 'removeClass');
});

