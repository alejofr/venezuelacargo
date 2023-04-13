<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NotificationInvoiceResend extends Mailable
{
    use Queueable, SerializesModels;
    public $invoice;
    public $pdf;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($invoice = [], $pdf)
    {
        $this->invoice = $invoice;
        $this->pdf = $pdf;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Notificación de factura')
            ->view('mails.notification_invoice_resend')
            ->from('admin@gmail.com')
            ->attachData($this->pdf, 'factura.pdf', ['mime' => 
                'application/pdf']);
    }
}
