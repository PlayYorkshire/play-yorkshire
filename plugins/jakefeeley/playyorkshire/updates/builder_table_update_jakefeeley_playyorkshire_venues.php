<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireVenues extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_venues', function($table)
        {
            $table->boolean('is_published');
            $table->boolean('is_featured');
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_venues', function($table)
        {
            $table->dropColumn('is_published');
            $table->dropColumn('is_featured');
        });
    }
}
