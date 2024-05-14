<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TemplateController extends Controller
{
    public function home()
    {
        return view('home');
    }
    public function servicios()
    {
        return view('servicios');
    }
    public function empresa()
    {
        return view('empresa');
    }
    public function contacto()
    {
        return view('contacto');
    }
    public function proyectos()
    {
        return view('proyectos');
    }
}
