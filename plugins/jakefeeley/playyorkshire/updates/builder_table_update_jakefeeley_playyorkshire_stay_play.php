<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireStayPlay extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_stay_play', function($table)
        {
            $table->integer('golf_rounds')->nullable();
            $table->text('occupancy')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_stay_play', function($table)
        {
            $table->dropColumn('golf_rounds');
            $table->dropColumn('occupancy');
        });
    }
}
