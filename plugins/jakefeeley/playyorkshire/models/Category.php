<?php namespace JakeFeeley\PlayYorkshire\Models;

use Model;

/**
 * Model
 */
class Category extends Model
{
    use \October\Rain\Database\Traits\Validation;

    use \October\Rain\Database\Traits\SoftDelete;

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'jakefeeley_playyorkshire_categories';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $hasMany = [

        'posts' => Post::class

    ];

    public $attachOne = [

        'image' => 'System\Models\File',

    ];

}
