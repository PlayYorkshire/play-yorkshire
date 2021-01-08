<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireGolfClubs5 extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_golf_clubs', function($table)
        {
            $table->integer('collection_id')->nullable()->change();
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_golf_clubs', function($table)
        {
            $table->integer('collection_id')->nullable(false)->change();
        });
    }
}
