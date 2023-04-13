<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roleAdmin = Role::create(['name' => 'admin']);
        $roleClient = Role::create(['name' => 'client']);

        //El rol administrador, tiene todos los permisos.
        Permission::create(['name' => '*'])->syncRoles($roleAdmin);

        //Rol de cliente
        Permission::create(['name' => 'all'])->syncRoles($roleClient);
    }
}
