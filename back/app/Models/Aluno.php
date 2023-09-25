<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aluno extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'idTurma',
        'nome',
        'sexo',
        'cpf',
        'email',
        'dataNasc'
    ];

    protected $table = 'alunos';
}
