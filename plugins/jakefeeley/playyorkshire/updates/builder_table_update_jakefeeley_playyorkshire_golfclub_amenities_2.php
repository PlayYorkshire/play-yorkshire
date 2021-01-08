<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireGolfclubAmenities2 extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_golfclub_amenities', function($table)
        {
            $table->renameColumn('amenity_id', 'amenities_id');
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_golfclub_amenities', function($table)
        {
            $table->renameColumn('amenities_id', 'amenity_id');
        });
    }
}
