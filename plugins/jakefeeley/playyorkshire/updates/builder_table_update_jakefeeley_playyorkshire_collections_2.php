<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireCollections2 extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_collections', function($table)
        {
            $table->text('itinerary')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_collections', function($table)
        {
            $table->dropColumn('itinerary');
        });
    }
}
