<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NotificationPackageRegister extends Mailable
{
    use Queueable, SerializesModels;
	public $arreglo;
    public $image;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($arreglo = [], $image)
    {
        $this->arreglo = $arreglo;
        $this->image = $image;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('notificación de registro de paquete')
            ->view('mails.notification_package_register')
            ->from('admin@gmail.com')
            ->attach($this->image);
    }
}
