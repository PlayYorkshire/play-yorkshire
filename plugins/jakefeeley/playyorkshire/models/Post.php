<?php namespace JakeFeeley\PlayYorkshire\Models;

use Model;

/**
 * Model
 */
class Post extends Model
{
    use \October\Rain\Database\Traits\Validation;

    use \October\Rain\Database\Traits\SoftDelete;

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'jakefeeley_playyorkshire_posts';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $belongsTo = [

        'author' => Author::class,
        'category' => Category::class

    ];

    public $attachOne = [

        'image' => 'System\Models\File',

    ];

}
