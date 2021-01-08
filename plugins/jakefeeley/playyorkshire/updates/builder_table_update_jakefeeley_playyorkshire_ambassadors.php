<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireAmbassadors extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_ambassadors', function($table)
        {
            $table->string('pro_date', 0)->nullable()->unsigned(false)->default(null)->change();
            $table->string('dob', 0)->nullable()->unsigned(false)->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_ambassadors', function($table)
        {
            $table->date('pro_date')->nullable()->unsigned(false)->default(null)->change();
            $table->time('dob')->nullable()->unsigned(false)->default(null)->change();
        });
    }
}
