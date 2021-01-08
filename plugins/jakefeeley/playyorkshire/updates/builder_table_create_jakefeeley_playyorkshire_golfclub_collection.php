<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateJakefeeleyPlayyorkshireGolfclubCollection extends Migration
{
    public function up()
    {
        Schema::create('jakefeeley_playyorkshire_golfclub_collection', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->integer('golfclub_id')->unsigned();
            $table->integer('collection_id')->unsigned();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('jakefeeley_playyorkshire_golfclub_collection');
    }
}
