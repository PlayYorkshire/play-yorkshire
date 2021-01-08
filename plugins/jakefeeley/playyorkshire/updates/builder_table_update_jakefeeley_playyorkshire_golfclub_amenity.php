<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireGolfclubAmenity extends Migration
{
    public function up()
    {
        Schema::rename('jakefeeley_playyorkshire_golfclub_amenities', 'jakefeeley_playyorkshire_golfclub_amenity');
    }
    
    public function down()
    {
        Schema::rename('jakefeeley_playyorkshire_golfclub_amenity', 'jakefeeley_playyorkshire_golfclub_amenities');
    }
}
