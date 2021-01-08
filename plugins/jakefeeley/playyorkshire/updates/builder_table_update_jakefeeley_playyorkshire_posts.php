<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshirePosts extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_posts', function($table)
        {
            $table->text('name')->nullable(false)->unsigned(false)->default(null)->change();
            $table->text('seo_title')->nullable()->unsigned(false)->default(null)->change();
            $table->text('seo_description')->nullable()->unsigned(false)->default(null)->change();
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_posts', function($table)
        {
            $table->string('name', 191)->nullable(false)->unsigned(false)->default(null)->change();
            $table->string('seo_title', 191)->nullable()->unsigned(false)->default(null)->change();
            $table->string('seo_description', 191)->nullable()->unsigned(false)->default(null)->change();
        });
    }
}
