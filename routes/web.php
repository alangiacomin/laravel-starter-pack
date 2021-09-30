<?php

use App\Http\Controllers\Auth\Auth0IndexController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ResourceNotFoundController;
use App\Http\Controllers\TranslationController;
use App\Http\Controllers\UserController;
use Auth0\Login\Auth0Controller;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/auth0/callback', [Auth0Controller::class, 'callback'])->name('auth0-callback');
Route::get('/auth0/login', [Auth0IndexController::class, 'login'])->name('login');
Route::get('/auth0/logout', [Auth0IndexController::class, 'logout'])->name('logout');
Route::get('/auth0/profile', [Auth0IndexController::class, 'profile'])->name('profile');

Route::get('/translation/{locale}/{namespace}', [TranslationController::class, 'index'])
    ->where('locale', '.+')
    ->where('namespace', '.+')
;

Route::post('/login', [UserController::class, 'login']);
Route::post('/logout', [UserController::class, 'logout']);

foreach ([
    // 'tex' => [
    //     'controller' => TexController::class,
    //     'only' => ['index'],
    // ],
    // 'diabolik' => [
    //     'controller' => DiabolikController::class,
    //     'only' => ['index'],
    // ],
    //     'livellos' => [
    //         'controller' => LivelloController::class,
    //         'only' => ['index', 'show'],
    //     ],
    'users' => [
        'controller' => UserController::class,
        'only' => ['index', 'show'],
    ],
] as $key => $value) {
    Route::resource($key, ResourceNotFoundController::class);
    Route::resource($key, $value['controller'])
        ->only($value['only'] ?? [])
        ->except($value['except'] ?? [])
    ;
}
// Route::resource('grandeedificios.livellos', GrandeedificioLivelloController::class)->only(['index']);
// Route::resource('users.grandeedificios', UserGrandeedificioController::class)->only(['index']);

// Route::get('/assegnaGe', [HomeController::class, 'assegnaGe']);

Route::get('/{any}', [HomeController::class, 'index'])->where('any', '.*')->name('home');
