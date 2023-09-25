<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Turma;
use Illuminate\Support\Facades\DB;

class TurmaController extends Controller
{
    function insertClass(Request $request) {
        $insert = Turma::create([  
            'dataInicio' => $request['dataInicio'],
            'dataFim' => $request['dataFim'],
            'qtMaxAlunos' => $request['qtMaxAlunos'],
        ]);

        return json_encode($insert);
    }

    function readClass ($id) {
        $readOneClass = Turma::all()
            -> where('id', $id);
            

            return json_encode($readOneClass);
    }

    function readClasses () {
        $readClasses = Turma::select(DB::raw('turma.id as idturma,count(idturma) as count'))
            ->leftjoin('alunos','turma.id','=','alunos.idturma')
            ->groupBy('turma.id')
            ->get();
        return json_encode($readClasses);
    }

    function updateClass(Request $request, $id) {
        $updateClass = Turma::where('id', $id)
           ->update([
            'dataInicio' => $request['dataInicio'],
            'dataFim' => $request['dataFim'],
           ]);

           return json_encode($updateClass);
    }

    function removeClass($id) {
        $removeClass = Turma::where('id',$id)
            ->delete();

        return json_encode($removeClass);
    }

}
