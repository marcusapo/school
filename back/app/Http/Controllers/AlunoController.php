<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Aluno;

class AlunoController extends Controller
{
    function insertStudent(Request $request) {
        $insert = Aluno::create([
            'idTurma' => $request['idTurma'],
            'nome' => $request['nome'],
            'sexo' => $request['sexo'],
            'cpf' => $request['cpf'], 
            'email' => $request['email'],
            'dataNasc' => $request['dataNasc'],
        ]);

        return json_encode($insert);
    }

    function readAllStudent($id) {
        $readAll = Aluno::select()
            ->where('idTurma', $id)
            ->get();

        return $readAll;
    }

    function readOneStudent($id) {
        $readOne = Aluno::all()
            ->where('id', $id);
        
        return json_encode($readOne);
    }

    function updateStudent(Request $request, $id) {
        $updateStudent = Aluno::where('id', $id)
            ->update([
                'idTurma' => $request['idTurma'],
                'nome' => $request['nome'],
                'sexo' => $request['sexo'],
                'email' => $request['email'],
                'cpf' => $request['cpf'],
                'dataNasc' => $request['dataNasc'],
            ]);

      return json_encode($updateStudent);
    }

    function removeStudent($id) {
        $removeStudent = Aluno::where('id',$id)
            ->delete();

        return $removeStudent;
    }
}
