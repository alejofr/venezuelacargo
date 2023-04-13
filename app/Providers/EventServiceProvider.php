<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use App\Observers\FacturasObserver;
use App\Models\Facturas\Facturas;
use App\Models\Facturas\FacturasInfoTrackings;
use App\Observers\FacturasInfoTrackingsObserver;
use App\Models\Almacenes;
use App\Models\Envios;
use App\Models\User;
use App\Models\UsuariosInfo;
use App\Observers\AlmacenesObserver;
use App\Observers\EnviosObserver;
use App\Observers\UserObserver;
use App\Observers\UsuariosInfoObserver;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        Facturas::observe(FacturasObserver::class);
        FacturasInfoTrackings::observe(FacturasInfoTrackingsObserver::class);
        Almacenes::observe(AlmacenesObserver::class);
        Envios::observe(EnviosObserver::class);
        User::observe(UserObserver::class);
        UsuariosInfo::observe(UsuariosInfoObserver::class);
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     *
     * @return bool
     */
    public function shouldDiscoverEvents()
    {
        return false;
    }
}
