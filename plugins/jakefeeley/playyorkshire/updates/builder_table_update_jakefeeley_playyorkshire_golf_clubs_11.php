<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireGolfClubs11 extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_golf_clubs', function($table)
        {
            $table->date('membership_renewal_date')->nullable();
            $table->string('membership_plan')->nullable();
            $table->dropColumn('renewal_date');
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_golf_clubs', function($table)
        {
            $table->dropColumn('membership_renewal_date');
            $table->dropColumn('membership_plan');
            $table->date('renewal_date')->nullable();
        });
    }
}
