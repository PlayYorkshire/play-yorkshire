<?php namespace JakeFeeley\PlayYorkshire\Models;

use Model;

/**
 * Model
 */
class Collection extends Model
{
    use \October\Rain\Database\Traits\Validation;

    use \October\Rain\Database\Traits\SoftDelete;

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'jakefeeley_playyorkshire_collections';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];


    public $jsonable = [

        'itinerary'

    ];

    public $attachOne = [

        'image' => 'System\Models\File',

    ];


    public $belongsToMany = [
        'golfclubs' => [
            'JakeFeeley\PlayYorkshire\Models\GolfClub',
            'table' => 'jakefeeley_playyorkshire_golfclub_collection'
        ]
    ];

}
