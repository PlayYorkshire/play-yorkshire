<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireGolfclubCollection extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_golfclub_collection', function($table)
        {
            $table->renameColumn('golfclub_id', 'golf_club_id');
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_golfclub_collection', function($table)
        {
            $table->renameColumn('golf_club_id', 'golfclub_id');
        });
    }
}
