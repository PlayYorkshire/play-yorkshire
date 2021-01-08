<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateJakefeeleyPlayyorkshireContacts extends Migration
{
    public function up()
    {
        Schema::create('jakefeeley_playyorkshire_contacts', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('title');
            $table->string('email');
            $table->string('alt_email');
            $table->string('phone');
            $table->string('mobile');
            $table->string('golf_club_id');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('jakefeeley_playyorkshire_contacts');
    }
}
