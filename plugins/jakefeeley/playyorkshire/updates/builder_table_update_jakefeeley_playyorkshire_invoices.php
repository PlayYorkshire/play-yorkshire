<?php namespace JakeFeeley\PlayYorkshire\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateJakefeeleyPlayyorkshireInvoices extends Migration
{
    public function up()
    {
        Schema::table('jakefeeley_playyorkshire_invoices', function($table)
        {
            $table->integer('golf_club_id');
        });
    }
    
    public function down()
    {
        Schema::table('jakefeeley_playyorkshire_invoices', function($table)
        {
            $table->dropColumn('golf_club_id');
        });
    }
}
