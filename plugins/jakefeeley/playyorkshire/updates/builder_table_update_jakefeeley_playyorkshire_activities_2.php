<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireActivities2 extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_activities', function($table)
        {
            $table->integer('venue_id')->unsigned();
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_activities', function($table)
        {
            $table->dropColumn('venue_id');
        });
    }
}
