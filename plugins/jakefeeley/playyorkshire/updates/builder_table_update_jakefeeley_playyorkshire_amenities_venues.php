<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireAmenitiesVenues extends Migration
{
    public function up()
    {
        Schema::rename('jakefeeley_playyorkshire_venues_amenities', 'jakefeeley_playyorkshire_amenities_venues');
    }
    
    public function down()
    {
        Schema::rename('jakefeeley_playyorkshire_amenities_venues', 'jakefeeley_playyorkshire_venues_amenities');
    }
}
