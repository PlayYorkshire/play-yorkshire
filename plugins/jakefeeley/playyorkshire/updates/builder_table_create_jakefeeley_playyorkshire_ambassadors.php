<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateJakefeeleyPlayyorkshireAmbassadors extends Migration
{
    public function up()
    {
        Schema::create('jakefeeley_playyorkshire_ambassadors', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->string('name');
            $table->string('slug');
            $table->text('body')->nullable();
            $table->string('tour_profile')->nullable();
            $table->date('pro_date')->nullable();
            $table->time('dob')->nullable();
            $table->string('home_town')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('jakefeeley_playyorkshire_ambassadors');
    }
}
