<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateJakefeeleyPlayyorkshireVenuesAmenities extends Migration
{
    public function up()
    {
        Schema::create('jakefeeley_playyorkshire_venues_amenities', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->integer('venue_id')->unsigned();
            $table->integer('amenities_id')->unsigned();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('jakefeeley_playyorkshire_venues_amenities');
    }
}
