<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateJakefeeleyPlayyorkshireEnquiries extends Migration
{
    public function up()
    {
        Schema::create('jakefeeley_playyorkshire_enquiries', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->integer('group_size')->nullable();
            $table->date('date')->nullable();
            $table->integer('golf_club_id')->unsigned();
            $table->integer('collection_id')->unsigned();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('jakefeeley_playyorkshire_enquiries');
    }
}
