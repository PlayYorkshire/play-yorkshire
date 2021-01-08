<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableDeleteJakefeeleyPlayyorkshireGolfclubsCollections extends Migration
{
    public function up()
    {
        Schema::dropIfExists('jakefeeley_playyorkshire_golfclubs_collections');
    }
    
    public function down()
    {
        Schema::create('jakefeeley_playyorkshire_golfclubs_collections', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('golfclub_id')->unsigned();
            $table->integer('collection_id')->unsigned();
        });
    }
}
