<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireEnquiries4 extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_enquiries', function($table)
        {
            $table->integer('golf_club_id')->nullable();
            $table->dropColumn('golfclub_id');
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_enquiries', function($table)
        {
            $table->dropColumn('golf_club_id');
            $table->integer('golfclub_id')->nullable()->default(NULL);
        });
    }
}
