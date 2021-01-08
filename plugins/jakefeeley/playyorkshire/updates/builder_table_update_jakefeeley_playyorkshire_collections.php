<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireCollections extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_collections', function($table)
        {
            $table->text('short_description')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_collections', function($table)
        {
            $table->dropColumn('short_description');
        });
    }
}
