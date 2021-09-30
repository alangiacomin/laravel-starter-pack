<?php

namespace App\Http\Controllers;

use App\Models\Enums\HttpStatusCode;
use App\Models\User;
use App\Traits\JsonResponser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    use JsonResponser;

    public function __construct()
    {
        $this->middleware('auth')->except([
            'index',
            'login',
            'me',
        ]);
    }

    public function index()
    {
        $all = User::all();

        return $this->showAll($all);
    }

    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'email|required',
            'password' => 'required',
        ]);

        if (!auth()->attempt($data)) {
            return $this->errorResponse('Incorrect Details. Please try again', HttpStatusCode::UNAUTHORIZED);
        }

        $request->session()->regenerate();

        return $this->successResponse(User::with('roles')->find(Auth::user()?->id), HttpStatusCode::OK);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return $this->successResponse(null, HttpStatusCode::NO_CONTENT);
    }

    public function me()
    {
        return $this->successResponse(Auth::check() ? Auth::user() : null, HttpStatusCode::OK);
    }
}
