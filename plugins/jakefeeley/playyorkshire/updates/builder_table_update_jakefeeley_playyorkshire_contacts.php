<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireContacts extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_contacts', function($table)
        {
            $table->integer('golf_club_id')->nullable(false)->unsigned()->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_contacts', function($table)
        {
            $table->string('golf_club_id', 191)->nullable(false)->unsigned(false)->default(null)->change();
        });
    }
}
