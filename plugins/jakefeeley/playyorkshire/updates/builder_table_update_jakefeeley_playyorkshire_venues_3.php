<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireVenues3 extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_venues', function($table)
        {
            $table->integer('contact_id')->unsigned();
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_venues', function($table)
        {
            $table->dropColumn('contact_id');
        });
    }
}
