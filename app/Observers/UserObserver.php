<?php

namespace App\Observers;


use App\Models\User;
use App\Models\UsuariosInfo;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;


class UserObserver
{
    /**
     * Handle the User "created" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function created(User $user)
    {
        $mod = DB::table('model_has_roles')->where('model_id', '=', $user->usuario_id)->first();

        if( $mod == null ){
            //$user = User::find($results[$i]['usuario_id']);
            $role = Role::findById(2, 'web');
            //$role = Role::findByName()
            $user->assignRole($role);
        }

        
    }

    /**
     * Handle the User "updated" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function updated(User $user)
    {
        //
    }

    /**
     * Handle the User "deleted" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function deleted(User $user)
    {
        //
    }

    /**
     * Handle the User "restored" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function restored(User $user)
    {
        //
    }

    /**
     * Handle the User "force deleted" event.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function forceDeleted(User $user)
    {
        //
    }
}
