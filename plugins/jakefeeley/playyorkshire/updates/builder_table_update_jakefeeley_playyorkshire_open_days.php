<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireOpenDays extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_open_days', function($table)
        {
            $table->integer('golfclub_id')->unsigned();
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_open_days', function($table)
        {
            $table->dropColumn('golfclub_id');
        });
    }
}
