import React from 'react';
import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '971585755286';
const WHATSAPP_MESSAGE = encodeURIComponent(
    'Hi Aura Academia! I am interested in your courses and would like to know more about admissions, fees, and schedules. Please share the details.'
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const WhatsAppButton = () => {
    return (
        <div className="fixed bottom-6 left-6 z-50">
            <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
                style={{ backgroundColor: '#25D366' }}
            >
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: '#25D366' }} />
                {/* WhatsApp SVG */}
                <svg className="w-7 h-7 fill-white relative z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.083.534 4.043 1.468 5.75L0 24l6.395-1.676A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.882 9.882 0 01-5.038-1.382l-.361-.214-3.737.979 1.005-3.643-.235-.374A9.861 9.861 0 012.118 12C2.118 6.51 6.51 2.118 12 2.118c5.49 0 9.882 4.392 9.882 9.882 0 5.49-4.392 9.882-9.882 9.882z"/>
                </svg>
            </motion.a>
        </div>
    );
};

export default WhatsAppButton;
