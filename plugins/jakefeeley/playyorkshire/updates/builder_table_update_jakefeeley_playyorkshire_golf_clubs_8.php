<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireGolfClubs8 extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_golf_clubs', function($table)
        {
            $table->integer('county_id')->unsigned();
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_golf_clubs', function($table)
        {
            $table->dropColumn('county_id');
        });
    }
}
