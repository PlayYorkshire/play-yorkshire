<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshirePosts2 extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_posts', function($table)
        {
            $table->integer('author_id')->unsigned();
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_posts', function($table)
        {
            $table->dropColumn('author_id');
        });
    }
}
