<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateJakefeeleyPlayyorkshireCollections extends Migration
{
    public function up()
    {
        Schema::create('jakefeeley_playyorkshire_collections', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->string('name');
            $table->string('slug');
            $table->string('seo_title')->nullable();
            $table->text('seo_description')->nullable();
            $table->text('description')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('jakefeeley_playyorkshire_collections');
    }
}
