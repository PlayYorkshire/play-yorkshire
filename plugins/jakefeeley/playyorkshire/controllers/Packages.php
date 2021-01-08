<?php namespace JakeFeeley\PlayYorkshire\Controllers;

use Backend\Classes\Controller;
use BackendMenu;

class Packages extends Controller
{
    public $implement = [        'Backend\Behaviors\ListController',        'Backend\Behaviors\FormController',        'Backend\Behaviors\ReorderController'    ];
    
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';
    public $reorderConfig = 'config_reorder.yaml';

    public $requiredPermissions = [
        '001' 
    ];

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('JakeFeeley.PlayYorkshire', 'main-menu-golf', 'side-menu-packages');
    }
}
