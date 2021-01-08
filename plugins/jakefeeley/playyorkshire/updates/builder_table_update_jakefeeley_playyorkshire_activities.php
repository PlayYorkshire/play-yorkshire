<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireActivities extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_activities', function($table)
        {
            $table->integer('golf_club_id')->unsigned();
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_activities', function($table)
        {
            $table->dropColumn('golf_club_id');
        });
    }
}
