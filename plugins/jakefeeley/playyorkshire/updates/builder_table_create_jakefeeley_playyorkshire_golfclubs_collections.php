<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateJakefeeleyPlayyorkshireGolfclubsCollections extends Migration
{
    public function up()
    {
        Schema::create('jakefeeley_playyorkshire_golfclubs_collections', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('golfclub_id')->unsigned();
            $table->integer('collection_id')->unsigned();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('jakefeeley_playyorkshire_golfclubs_collections');
    }
}
