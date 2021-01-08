<?php namespace JakeFeeley\PlayYorkshire\Models;

use Model;

/**
 * Model
 */
class Enquiry extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    use \October\Rain\Database\Traits\SoftDelete;

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'jakefeeley_playyorkshire_enquiries';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];
    
    public $belongsTo = [

        'golfclub' => GolfClub::class,
        'collection' => Collection::class
    
    ];
    
}
