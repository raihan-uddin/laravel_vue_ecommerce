<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('admin.admin_master');
});

Route::get('test', function () {
    return 'test grooup';
});



Route::get('/{path}', function () {
    return view('admin.admin_master');
});
