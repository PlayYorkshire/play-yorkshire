<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateJakefeeleyPlayyorkshirePlayStay extends Migration
{
    public function up()
    {
        Schema::create('jakefeeley_playyorkshire_play_stay', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->string('name');
            $table->string('slug');
            $table->text('body')->nullable();
            $table->date('date')->nullable();
            $table->string('address_line_1')->nullable();
            $table->string('address_line_2')->nullable();
            $table->integer('county_id')->unsigned();
            $table->integer('city_id')->unsigned();
            $table->string('postcode')->nullable();
            $table->string('website')->nullable();
            $table->string('phone')->nullable();
            $table->integer('golf_club_id')->unsigned();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('jakefeeley_playyorkshire_play_stay');
    }
}
