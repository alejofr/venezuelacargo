<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NotificationEnvioStatus extends Mailable
{
    use Queueable, SerializesModels;
    public $arreglo;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($arreglo = [])
    {
        $this->arreglo = $arreglo;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('notificación de envio')
            ->view('mails.notification_envio_status')
            ->from('admin@gmail.com');
    }
}
