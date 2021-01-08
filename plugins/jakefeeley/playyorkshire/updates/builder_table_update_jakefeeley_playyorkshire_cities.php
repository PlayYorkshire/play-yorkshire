<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireCities extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_cities', function($table)
        {
            $table->integer('county_id')->unsigned();
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_cities', function($table)
        {
            $table->dropColumn('county_id');
        });
    }
}
