<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Progress extends Model
{
    use HasFactory;

    protected $table = 'progresses';

    protected $fillable = [
        'tanggal',
        'ayat_ke',
        'surat_ke',
        'class_id'
    ];

    public function classes()
    {
        return $this->belongsTo('App\Models\Classes');
    }
}
