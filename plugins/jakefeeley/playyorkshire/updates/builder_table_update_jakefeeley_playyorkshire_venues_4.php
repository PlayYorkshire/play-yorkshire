<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireVenues4 extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_venues', function($table)
        {
            $table->string('town')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_venues', function($table)
        {
            $table->dropColumn('town');
        });
    }
}
