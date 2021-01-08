<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireVenues9 extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_venues', function($table)
        {
            $table->text('seo_title')->nullable();
            $table->text('seo_description')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_venues', function($table)
        {
            $table->dropColumn('seo_title');
            $table->dropColumn('seo_description');
        });
    }
}
