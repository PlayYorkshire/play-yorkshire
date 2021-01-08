<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireEnquiries3 extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_enquiries', function($table)
        {
            $table->integer('golfclub_id')->nullable()->change();
            $table->integer('collection_id')->nullable()->change();
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_enquiries', function($table)
        {
            $table->integer('golfclub_id')->nullable(false)->change();
            $table->integer('collection_id')->nullable(false)->change();
        });
    }
}
