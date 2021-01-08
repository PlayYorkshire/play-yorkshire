<?php namespace JakeFeeley\PlayYorkshire\Models;

use Model;

/**
 * Model
 */
class GolfClub extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    use \October\Rain\Database\Traits\SoftDelete;

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'jakefeeley_playyorkshire_golf_clubs';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $attachOne = [

        'image' => 'System\Models\File',
        'banner' => 'System\Models\File'

    ];
    
    public $attachMany = [

        'gallery' => 'System\Models\File',

    ];

    public $belongsTo = [

        'city' => City::class,
        'county' => County::class,
        'membership' => Membership::class
    
    ];
    
    public $hasMany = [

        'opendays' => OpenDay::class,
        'amenities' => Amenity::class,
        'stayplays' => StayPlay::class,
        'contacts' => Contact::class,
        'activities' => Activity::class,
        'enquiries' => Enquiry::class,
        'invoices' => Invoice::class
    
    ];

    public $belongsToMany = [
        
        'collections' => [
            'JakeFeeley\PlayYorkshire\Models\Collection'
        ],
        
        'amenities' => [
            'JakeFeeley\PlayYorkshire\Models\Amenity',
            'table' => 'jakefeeley_playyorkshire_amenities_venues'
        ],
        
    ];
    
}
