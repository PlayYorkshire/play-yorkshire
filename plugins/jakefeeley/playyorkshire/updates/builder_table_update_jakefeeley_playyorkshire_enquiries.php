<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireEnquiries extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_enquiries', function($table)
        {
            $table->string('status');
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_enquiries', function($table)
        {
            $table->dropColumn('status');
        });
    }
}
