<?php

namespace App\Traits;

use App\Models\Enums\HttpStatusCode;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

trait JsonResponser
{
    /**
     * Undocumented function.
     *
     * @param array|string $message Messaggio da visualizzare
     * @param int          $code    Status code dell'operazione
     */
    protected function errorResponse($message, $code): \Illuminate\Http\JsonResponse
    {
        return response()->json(['success' => false, 'error' => $message, 'code' => $code], $code);
    }

    /**
     * Undocumented function.
     *
     * @param mixed $message Messaggio da visualizzare
     * @param int   $code    Status code dell'operazione
     *
     * @return \Illuminate\Http\JsonResponse Risposta in formato json
     */
    protected function showMessage($message, int $code = HttpStatusCode::OK): \Illuminate\Http\JsonResponse
    {
        return $this->successResponse(['data' => $message], $code);
    }

    /**
     * Undocumented function.
     *
     * @param Illuminate\Database\Eloquent\Collection $collection Collezione da restituire
     * @param int                                     $code       Status code dell'operazione
     *
     * @return \Illuminate\Http\JsonResponse Risposta in formato json
     */
    protected function showAll(Collection $collection, $code = HttpStatusCode::OK): \Illuminate\Http\JsonResponse
    {
        if ($collection->isEmpty()) {
            return $this->successResponse(['data' => $collection], $code);
        }
		
        return $this->successResponse($collection, $code);
    }

    /**
     * Undocumented function.
     *
     * @param \Illuminate\Database\Eloquent\Model $model Model da restituire
     * @param int                                 $code  Status code dell'operazione
     *
     * @return \Illuminate\Http\JsonResponse Risposta in formato json
     */
    protected function showOne(Model $model, int $code = HttpStatusCode::OK): \Illuminate\Http\JsonResponse
    {
        return $this->successResponse($model, $code);
    }

    /**
     * Undocumented function.
     *
     * @param [type] $data Oggetto da restituire
     * @param int    $code Status code dell'operazione
     *
     * @return \Illuminate\Http\JsonResponse Risposta in formato json
     */
    private function successResponse($data, int $code): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => is_array($data) ? array_values($data) : $data,
        ], $code);
    }
}
