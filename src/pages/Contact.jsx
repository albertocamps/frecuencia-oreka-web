import { useState } from "react";
import { useTranslation } from 'react-i18next';
import './Contact.css'

function Contact() {
    const { t } = useTranslation();
    const [message, setMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        window.open(`https://wa.me/34623028832?text=${encodeURIComponent(message.trim())}`, '_blank', 'noopener,noreferrer');
    };

    return ( 
        <>
        <div className="contact-container">
            <header className="contact-heading">
                <h1>{t('contact_title')}</h1>
                <p>{t('contact_whatsapp_hint')}</p>
            </header>
            <div className="contact-layout">
            <aside className="contact-info">
                <h2 translate="no" className="notranslate">Crystal</h2>
                <a className="contact-link contact-link--whatsapp" href="https://wa.me/34623028832" target="_blank" rel="noopener noreferrer">
                    <svg className="contact-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-8 8 9 9 0 0 1-3.5-.8L4 20l1.3-4.5a8 8 0 1 1 14.7-4Z"/><path d="M8.5 7.5c-.8 3.8 2.2 6.8 6 7l1-2-2-1-1 1a6 6 0 0 1-2-2l1-1-1-2Z"/></svg>
                    <span><strong>WhatsApp</strong><small>+34 623 028 832</small></span>
                    <span className="contact-link-arrow" aria-hidden="true">↗</span>
                </a>
                <a className="contact-link contact-link--instagram" href="https://www.instagram.com/frecuencia_oreka/" target="_blank" rel="noopener noreferrer">
                    <svg className="contact-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>
                    <span><strong>Instagram</strong><small>@frecuencia_oreka</small></span>
                    <span className="contact-link-arrow" aria-hidden="true">↗</span>
                </a>
                <section className="contact-location" aria-labelledby="contact-location-title">
                <h3 id="contact-location-title">Eguzkiloreak</h3>
                <address>Calle Pasajes, 5 · Gros<br />20015 Donostia – San Sebastián</address>
                <a className="contact-link contact-link--directions" href="https://maps.app.goo.gl/zXKb3Aora9sdzo2MA" target="_blank" rel="noopener noreferrer">
                    <span className="contact-pin"><svg className="contact-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/></svg></span>
                    <strong>{t('contact_directions')}</strong>
                    <span className="contact-link-arrow" aria-hidden="true">↗</span>
                </a>
                </section>
            </aside>
            <form onSubmit={handleSubmit} aria-labelledby="contact-form-title">
                <h2 id="contact-form-title">{t('contact_form_title')}</h2>
                <div className="messageForm">
                    <label htmlFor="message">{t('contact_message')}</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        aria-describedby="contact-send-note"
                        required
                    />
                </div>
                <button type="submit" disabled={!message.trim()}>{t('contact_submit')}</button>
                <p id="contact-send-note" className="contact-note">{t('contact_send_note')}</p>

            </form>
            </div>
        </div>
        </>
    );
}

export default Contact;
