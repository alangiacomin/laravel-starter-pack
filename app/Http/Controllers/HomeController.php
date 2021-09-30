<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\JsonResponser;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    use JsonResponser;

    public function index()
    {
        // $user = User::with('roles')->find(Auth::user()?->id);
        $user = Auth::user()?->getUserInfo();

        return view('home', ['user' => $user]);
    }
}
