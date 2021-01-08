<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireVenues8 extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_venues', function($table)
        {
            $table->string('latitude', 191)->nullable()->default('null');
            $table->dropColumn('langitude');
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_venues', function($table)
        {
            $table->dropColumn('latitude');
            $table->string('langitude', 191)->nullable()->default('NULL');
        });
    }
}
