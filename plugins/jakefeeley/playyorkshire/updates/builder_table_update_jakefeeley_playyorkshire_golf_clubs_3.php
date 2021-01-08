<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireGolfClubs3 extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_golf_clubs', function($table)
        {
            $table->string('postcode')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_golf_clubs', function($table)
        {
            $table->dropColumn('postcode');
        });
    }
}
