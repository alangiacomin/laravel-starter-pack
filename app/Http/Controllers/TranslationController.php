<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Support\Facades\Config;

class TranslationController extends Controller
{
    public function index(string $locale, string $namespace)
    {
        // requested path
        $path = $this->translationPath($locale, $namespace);
        if (!file_exists($path)) {
            // fallback path
            $path = $this->translationPath(Config::get('app.fallback_locale'), $namespace);
        }

        try {
            return include $path;
        } catch (Exception $ex) {
            // not found
            return json_encode(new stdClass());
        }
    }

    private function translationPath(string $locale, string $namespace)
    {
        return dirname(__FILE__).DIRECTORY_SEPARATOR
            .'..'.DIRECTORY_SEPARATOR
            .'..'.DIRECTORY_SEPARATOR
            .'..'.DIRECTORY_SEPARATOR
            .'resources'.DIRECTORY_SEPARATOR
            .'lang'.DIRECTORY_SEPARATOR
            .$locale.DIRECTORY_SEPARATOR
            .$namespace.'.php';
    }
}
