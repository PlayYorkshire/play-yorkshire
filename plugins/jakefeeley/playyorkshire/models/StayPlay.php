<?php namespace JakeFeeley\PlayYorkshire\Models;

use Model;

/**
 * Model
 */
class StayPlay extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    use \October\Rain\Database\Traits\SoftDelete;

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'jakefeeley_playyorkshire_stay_play';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
    
    public $attachOne = [

        'image' => 'System\Models\File'

    ];
    
    public $attachMany = [

        'gallery' => 'System\Models\File',

    ];
    
    public $belongsTo = [

        'golfclubs' => GolfClub::class,
        'venue' => Venue::class
    
    ];
    
}
