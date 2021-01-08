<?php namespace JakeFeeley\PlayYorkshire;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
    }

    public function registerSettings()
    {
    }
    
    public function boot()
{
    \Event::listen('backend.menu.extendItems', function ($manager) {
        $manager->addMainMenuItems('October.Backend', [
            'dashboard' => [
                'order' => '1'
            ]
        ]);
        $manager->addMainMenuItems('October.Cms', [
            'cms' => [
                'order' => '2'
            ]
        ]);
        $manager->addMainMenuItems('October.Backend', [
            'media' => [
                'order' => '3'
            ]
        ]);
       $manager->addMainMenuItems('RainLab.Builder', [
            'builder' => [
                'order' => '4'
            ]
        ]);
    });
}

}
