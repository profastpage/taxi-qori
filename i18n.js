/**
 * QORI - Sistema de Traducción EN/ES
 * Diccionario completo para toda la plataforma
 */

const TRANSLATIONS = {
    es: {
        // Navbar
        'nav.beneficios': 'Beneficios',
        'nav.servicios': 'Servicios',
        'nav.como-funciona': 'Cómo Funciona',
        'nav.ingresar': 'Ingresar',
        'nav.registrarse': 'Registrarse',
        'nav.mi-perfil': 'Mi Perfil',
        'nav.cerrar-sesion': 'Cerrar Sesión',
        
        // Hero
        'hero.badge': 'Lima y Manchay - 24/7',
        'hero.title-1': 'Lujo sobre ruedas,',
        'hero.title-2': 'confort y elegancia',
        'hero.title-3': 'en cada viaje',
        'hero.description': 'Servicio de traslado A1 y Courier. Confort y la elegancia se encuentran en cada viaje.',
        'hero.cotizar': 'Cotizar Traslado',
        'hero.ver-servicios': 'Ver Servicios',
        'hero.certificados': 'Servicio A1 con choferes certificados',
        'hero.puntualidad': 'Puntualidad garantizada',
        'hero.flota': 'Flota exclusiva',
        'hero.disponibilidad': 'Disponibilidad 24/7',
        
        // Cotizador
        'cotizador.titulo': 'Cotiza tu traslado ejecutivo',
        'cotizador.subtitulo': 'Recibe una tarifa preferencial y confirma por WhatsApp al instante',
        'cotizador.origen': 'Punto de recogida',
        'cotizador.origen-placeholder': 'Escribe tu destino (ej: Aurora, Miraflores...)',
        'cotizador.destino': 'Destino',
        'cotizador.destino-placeholder': 'Escribe tu destino (ej: Aurora, Miraflores...)',
        'cotizador.vehiculo': 'Vehículo ejecutivo',
        'cotizador.sedan': 'Sedán',
        'cotizador.camioneta': 'Camioneta',
        'cotizador.van': 'Van',
        'cotizador.base': 'Base',
        'cotizador.premium': 'Premium',
        'cotizador.ejecutiva': 'Ejecutiva',
        'cotizador.horario': 'Horario',
        'cotizador.ahora': 'Ahora',
        'cotizador.programado': 'Programado',
        'cotizador.tarifa-estimada': 'Tarifa estimada',
        'cotizador.precio-whatsapp': 'Precio final se confirma por WhatsApp',
        'cotizador.tarifa-referencial': 'Tarifa referencial • Sujeta a ruta y horario',
        'cotizador.reservar': 'Reservar por WhatsApp',
        'cotizador.demo-funcional': 'Demo funcional • La activación final se personaliza para tu negocio',
        'cotizador.sin-compromiso': 'Sin compromiso • Respuesta inmediata',
        'cotizador.24-7': '24/7',
        'cotizador.choferes': 'Choferes ejecutivos',
        'cotizador.ver-tarifas': 'Ver tarifas Aeropuerto',
        'cotizador.selecciona-destino': 'Selecciona tu destino:',
        
        // Beneficios
        'beneficios.titulo': '¿Por qué elegir QORI?',
        'beneficios.subtitulo': 'Más que un servicio de transporte, tu aliado estratégico en movilidad ejecutiva.',
        'beneficios.atencion-24-7': 'Atención 24/7',
        'beneficios.atencion-24-7-desc': 'Disponibles todos los días, a cualquier hora. Tu agenda no se detiene, nosotros tampoco.',
        'beneficios.choferes-profesionales': 'Choferes Profesionales',
        'beneficios.choferes-profesionales-desc': 'Personal certificado, capacitado y con experiencia en servicio ejecutivo corporativo.',
        'beneficios.puntualidad': 'Puntualidad Garantizada',
        'beneficios.puntualidad-desc': 'Monitoreo en tiempo real y planificación de ruta para llegar siempre a tiempo.',
        'beneficios.aeropuerto': 'Servicio Aeropuerto',
        'beneficios.aeropuerto-desc': 'Traslados puntuales al aeropuerto. Monitoreamos tu vuelo sin cargo adicional por demora.',
        'beneficios.reserva-directa': 'Reserva Directa',
        'beneficios.reserva-directa-desc': 'Sin apps complicadas. Reserva directo por WhatsApp con atención personalizada.',
        'beneficios.flota-exclusiva': 'Flota Exclusiva',
        'beneficios.flota-exclusiva-desc': 'Vehículos modernos, limpios y equipados para máximo confort y seguridad.',
        
        // Trust Badges
        'trust.disponibilidad': 'Disponibilidad Total',
        'trust.choferes-certificados': 'Choferes Certificados',
        'trust.viajes': 'Viajes Realizados',
        'trust.empresas': 'Empresas Confían',
        'trust.tiempo-respuesta': 'Tiempo de Respuesta',
        
        // Servicios
        'servicios.titulo': 'Nuestros Servicios',
        'servicios.subtitulo': 'Soluciones de transporte ejecutivo para cada necesidad corporativa.',
        'servicios.traslados-corporativos': 'Traslados Corporativos',
        'servicios.traslados-corporativos-desc': 'Transporte ejecutivo para reuniones, eventos y compromisos empresariales. Imagen profesional garantizada.',
        'servicios.aeropuerto': 'Aeropuerto',
        'servicios.aeropuerto-desc': 'Traslados puntuales al aeropuerto Jorge Chávez. Monitoreamos tu vuelo y esperamos sin cargo adicional.',
        'servicios.courier': 'Courier Empresarial',
        'servicios.courier-desc': 'Envío de documentos y paquetes urgentes. Servicio rápido, seguro y con seguimiento.',
        'servicios.chofer-reemplazo': 'Chofer de Reemplazo',
        'servicios.chofer-reemplazo-desc': 'Conductor profesional para tu vehículo personal. Ideal para eventos o cuando prefieres no manejar.',
        'servicios.por-horas': 'Servicio por Horas',
        'servicios.por-horas-desc': 'Disponibilidad total por horas. Chofer a tu disposición para múltiples destinos y compromisos.',
        'servicios.full-day': 'Full Day Ejecutivo',
        'servicios.full-day-desc': 'Servicio completo por día. Perfecto para giras empresariales, auditorías o visitas de clientes.',
        
        // Como Funciona
        'como-funciona.titulo': '¿Cómo funciona?',
        'como-funciona.subtitulo': 'Reserva tu traslado ejecutivo en 3 pasos simples.',
        'como-funciona.paso-1': 'Cotiza tu traslado',
        'como-funciona.paso-1-desc': 'Ingresa punto de recogida y destino para obtener tu tarifa estimada al instante.',
        'como-funciona.paso-2': 'Revisa la tarifa',
        'como-funciona.paso-2-desc': 'Confirma el precio estimado y elige el vehículo ejecutivo que prefieres.',
        'como-funciona.paso-3': 'Reserva por WhatsApp',
        'como-funciona.paso-3-desc': 'Envía tu solicitud con un clic. Te confirmamos al instante con todos los detalles.',
        
        // Mid CTA
        'mid-cta.titulo': '¿Listo para tu traslado ejecutivo?',
        'mid-cta.subtitulo': 'Servicio premium con chofer profesional. Puntualidad y discreción garantizadas.',
        'mid-cta.activar-demo': 'Activar Esta Demo',
        'mid-cta.compartir': 'Compartir',
        
        // Testimonios
        'testimonios.titulo': 'Lo que dicen nuestros clientes',
        'testimonios.testimonio-1': '"Excelente servicio ejecutivo. Puntuales y profesionales. Los uso para todas mis reuniones corporativas."',
        'testimonios.testimonio-2': '"Servicio impecable para nuestros clientes VIP. QORI es nuestro aliado estratégico en transporte."',
        'testimonios.testimonio-3': '"Choferes altamente profesionales y vehículos impecables. El mejor servicio ejecutivo de la ciudad."',
        'testimonios.gerente': 'Gerente General',
        'testimonios.directora': 'Directora de Operaciones',
        'testimonios.empresario': 'Empresario',
        
        // FAQ
        'faq.titulo': 'Preguntas Frecuentes',
        'faq.subtitulo': 'Resolvemos tus dudas sobre nuestro servicio ejecutivo.',
        'faq.pregunta-1': '¿Con cuánta anticipación debo reservar?',
        'faq.respuesta-1': 'Para traslados inmediatos, respondemos en menos de 5 minutos. Para servicios programados, recomendamos reservar con al menos 2 horas de anticipación para garantizar disponibilidad del vehículo de tu preferencia. Para eventos especiales o full day, sugerimos 24-48 horas previas.',
        'faq.pregunta-2': '¿Qué métodos de pago aceptan?',
        'faq.respuesta-2': 'Ofrecemos múltiples opciones para tu comodidad: Efectivo (soles y dólares), Yape y Plin, Transferencia bancaria, Facturación empresarial (clientes corporativos).',
        'faq.pregunta-3': '¿Hacen traslados al aeropuerto?',
        'faq.respuesta-3': 'Sí, realizamos traslados ejecutivos al Aeropuerto Internacional Jorge Chávez y terminal terrestre de Lima. Monitoreamos tu vuelo para esperarte sin cargo adicional por demora. Incluye asistencia con equipaje y bienvenida con cartel personalizado si lo requieres.',
        'faq.pregunta-4': '¿Tienen servicio para empresas?',
        'faq.respuesta-4': 'Sí, contamos con planes corporativos para empresas que requieren transporte ejecutivo frecuente. Ofrecemos facturación mensual, reportes de viajes, cuentas corporativas y atención dedicada. Contáctanos para una propuesta personalizada según las necesidades de tu organización.',
        'faq.mas-preguntas': '¿Tienes más preguntas?',
        'faq.escribenos': 'Escríbenos por WhatsApp',
        
        // Final CTA
        'final-cta.disponible': 'Disponible ahora',
        'final-cta.titulo': '¿Necesitas transporte ejecutivo ahora?',
        'final-cta.subtitulo': 'Escríbenos y te atendemos en minutos. Servicio premium, seguro y disponible 24/7.',
        'final-cta.reservar': 'Reservar por WhatsApp',
        'final-cta.respuesta-inmediata': 'Respuesta inmediata',
        
        // Footer
        'footer.descripcion': 'Tu servicio de transporte ejecutivo premium. Lujo, seguridad y puntualidad en cada traslado.',
        'footer.contacto': 'Contacto',
        'footer.zona-servicio': 'Zona de Servicio',
        'footer.whatsapp': 'WhatsApp Directo',
        'footer.lima': 'Lima y Manchay, Perú',
        'footer.servicio-24-7': 'Servicio 24/7',
        'footer.cobertura': 'Cobertura total',
        'footer.derechos': 'Todos los derechos reservados.',
        'footer.creado-por': 'Creado y desarrollado por',
        
        // Auth Modal
        'auth.login.titulo': 'Bienvenido de nuevo',
        'auth.login.subtitulo': 'Ingresa tus datos para continuar',
        'auth.login.email': 'Email',
        'auth.login.password': 'Contraseña',
        'auth.login.olvidaste-password': '¿Olvidaste tu contraseña?',
        'auth.login.ingresar': 'Iniciar Sesión',
        'auth.login.o-continua': 'o continúa con',
        'auth.login.google': 'Iniciar sesión con Google',
        'auth.login.no-tienes-cuenta': '¿No tienes cuenta?',
        'auth.login.registrate': 'Regístrate aquí',
        
        'auth.register.titulo': 'Crear Cuenta',
        'auth.register.subtitulo': 'Únete a QORI hoy mismo',
        'auth.register.nombre': 'Nombre Completo',
        'auth.register.email': 'Email',
        'auth.register.password': 'Contraseña',
        'auth.register.password-confirm': 'Confirmar Contraseña',
        'auth.register.terminos': 'Acepto los Términos y Condiciones y la Política de Privacidad',
        'auth.register.crear-cuenta': 'Crear Cuenta',
        'auth.register.o-registrate': 'o regístrate con',
        'auth.register.google': 'Continuar con Google',
        'auth.register.ya-tienes-cuenta': '¿Ya tienes cuenta?',
        'auth.register.inicia-sesion': 'Inicia sesión',
        
        // Toast
        'toast.bienvenido': '¡Bienvenido de nuevo!',
        'toast.cuenta-creada': '¡Cuenta creada exitosamente!',
        'toast.gracias-compartir': '¡Gracias por compartir!',
        'toast.error-email': 'Email ya registrado',
        'toast.error-password': 'Contraseña incorrecta',
        
        // Demo Notice
        'demo-notice.texto': 'Esta es una demo de muestra. Para activarla con tu negocio y empezar a recibir pedidos reales,',
        'demo-notice.contactanos': 'contáctanos',
        
        // Share
        'share.mensaje': '¡Recomiendo QORI Traslados Ejecutivos! 🚗✨\n\nServicio premium de transporte en Lima. Lujo, seguridad y puntualidad en cada viaje.\n\n¡Cotiza tu traslado ahora! 👇\n'
    },
    
    en: {
        // Navbar
        'nav.beneficios': 'Benefits',
        'nav.servicios': 'Services',
        'nav.como-funciona': 'How It Works',
        'nav.ingresar': 'Sign In',
        'nav.registrarse': 'Sign Up',
        'nav.mi-perfil': 'My Profile',
        'nav.cerrar-sesion': 'Sign Out',
        
        // Hero
        'hero.badge': 'Lima & Manchay - 24/7',
        'hero.title-1': 'Luxury on wheels,',
        'hero.title-2': 'comfort and elegance',
        'hero.title-3': 'in every ride',
        'hero.description': 'A1 transfer and Courier service. Comfort and elegance meet in every journey.',
        'hero.cotizar': 'Get Quote',
        'hero.ver-servicios': 'View Services',
        'hero.certificados': 'A1 service with certified drivers',
        'hero.puntualidad': 'Guaranteed punctuality',
        'hero.flota': 'Exclusive fleet',
        'hero.disponibilidad': '24/7 Availability',
        
        // Cotizador
        'cotizador.titulo': 'Quote your executive transfer',
        'cotizador.subtitulo': 'Receive a preferential rate and confirm via WhatsApp instantly',
        'cotizador.origen': 'Pickup point',
        'cotizador.origen-placeholder': 'Enter your destination (e.g., Aurora, Miraflores...)',
        'cotizador.destino': 'Destination',
        'cotizador.destino-placeholder': 'Enter your destination (e.g., Aurora, Miraflores...)',
        'cotizador.vehiculo': 'Executive vehicle',
        'cotizador.sedan': 'Sedan',
        'cotizador.camioneta': 'SUV',
        'cotizador.van': 'Van',
        'cotizador.base': 'Base',
        'cotizador.premium': 'Premium',
        'cotizador.ejecutiva': 'Executive',
        'cotizador.horario': 'Schedule',
        'cotizador.ahora': 'Now',
        'cotizador.programado': 'Scheduled',
        'cotizador.tarifa-estimada': 'Estimated fare',
        'cotizador.precio-whatsapp': 'Final price confirmed via WhatsApp',
        'cotizador.tarifa-referencial': 'Reference rate • Subject to route and schedule',
        'cotizador.reservar': 'Book via WhatsApp',
        'cotizador.demo-funcional': 'Functional demo • Final activation customized for your business',
        'cotizador.sin-compromiso': 'No commitment • Immediate response',
        'cotizador.24-7': '24/7',
        'cotizador.choferes': 'Executive drivers',
        'cotizador.ver-tarifas': 'View Airport rates',
        'cotizador.selecciona-destino': 'Select your destination:',
        
        // Beneficios
        'beneficios.titulo': 'Why choose QORI?',
        'beneficios.subtitulo': 'More than a transport service, your strategic ally in executive mobility.',
        'beneficios.atencion-24-7': '24/7 Service',
        'beneficios.atencion-24-7-desc': 'Available every day, at any time. Your schedule doesn\'t stop, neither do we.',
        'beneficios.choferes-profesionales': 'Professional Drivers',
        'beneficios.choferes-profesionales-desc': 'Certified, trained staff with experience in corporate executive service.',
        'beneficios.puntualidad': 'Guaranteed Punctuality',
        'beneficios.puntualidad-desc': 'Real-time monitoring and route planning to always arrive on time.',
        'beneficios.aeropuerto': 'Airport Service',
        'beneficios.aeropuerto-desc': 'Punctual airport transfers. We monitor your flight at no extra charge for delays.',
        'beneficios.reserva-directa': 'Direct Booking',
        'beneficios.reserva-directa-desc': 'No complicated apps. Book directly via WhatsApp with personalized service.',
        'beneficios.flota-exclusiva': 'Exclusive Fleet',
        'beneficios.flota-exclusiva-desc': 'Modern, clean vehicles equipped for maximum comfort and safety.',
        
        // Trust Badges
        'trust.disponibilidad': 'Total Availability',
        'trust.choferes-certificados': 'Certified Drivers',
        'trust.viajes': 'Trips Completed',
        'trust.empresas': 'Companies Trust',
        'trust.tiempo-respuesta': 'Response Time',
        
        // Servicios
        'servicios.titulo': 'Our Services',
        'servicios.subtitulo': 'Executive transport solutions for every corporate need.',
        'servicios.traslados-corporativos': 'Corporate Transfers',
        'servicios.traslados-corporativos-desc': 'Executive transport for meetings, events and business commitments. Professional image guaranteed.',
        'servicios.aeropuerto': 'Airport',
        'servicios.aeropuerto-desc': 'Punctual transfers to Jorge Chávez airport. We monitor your flight and wait at no extra charge.',
        'servicios.courier': 'Business Courier',
        'servicios.courier-desc': 'Urgent document and package delivery. Fast, secure service with tracking.',
        'servicios.chofer-reemplazo': 'Replacement Driver',
        'servicios.chofer-reemplazo-desc': 'Professional driver for your personal vehicle. Ideal for events or when you prefer not to drive.',
        'servicios.por-horas': 'Hourly Service',
        'servicios.por-horas-desc': 'Full availability by the hour. Driver at your disposal for multiple destinations and commitments.',
        'servicios.full-day': 'Executive Full Day',
        'servicios.full-day-desc': 'Full day service. Perfect for business tours, audits or client visits.',
        
        // Como Funciona
        'como-funciona.titulo': 'How it works?',
        'como-funciona.subtitulo': 'Book your executive transfer in 3 simple steps.',
        'como-funciona.paso-1': 'Get a quote',
        'como-funciona.paso-1-desc': 'Enter pickup point and destination to get your estimated fare instantly.',
        'como-funciona.paso-2': 'Review the fare',
        'como-funciona.paso-2-desc': 'Confirm the estimated price and choose your preferred executive vehicle.',
        'como-funciona.paso-3': 'Book via WhatsApp',
        'como-funciona.paso-3-desc': 'Send your request with one click. We confirm instantly with all details.',
        
        // Mid CTA
        'mid-cta.titulo': 'Ready for your executive transfer?',
        'mid-cta.subtitulo': 'Premium service with professional driver. Punctuality and discretion guaranteed.',
        'mid-cta.activar-demo': 'Activate This Demo',
        'mid-cta.compartir': 'Share',
        
        // Testimonios
        'testimonios.titulo': 'What our clients say',
        'testimonios.testimonio-1': '"Excellent executive service. Punctual and professional. I use them for all my corporate meetings."',
        'testimonios.testimonio-2': '"Impeccable service for our VIP clients. QORI is our strategic transport ally."',
        'testimonios.testimonio-3': '"Highly professional drivers and impeccable vehicles. The best executive service in the city."',
        'testimonios.gerente': 'General Manager',
        'testimonios.directora': 'Operations Director',
        'testimonios.empresario': 'Businessman',
        
        // FAQ
        'faq.titulo': 'Frequently Asked Questions',
        'faq.subtitulo': 'We answer your questions about our executive service.',
        'faq.pregunta-1': 'How far in advance should I book?',
        'faq.respuesta-1': 'For immediate transfers, we respond in less than 5 minutes. For scheduled services, we recommend booking at least 2 hours in advance to guarantee availability of your preferred vehicle. For special events or full day, we suggest 24-48 hours prior.',
        'faq.pregunta-2': 'What payment methods do you accept?',
        'faq.respuesta-2': 'We offer multiple options for your convenience: Cash (soles and dollars), Yape and Plin, Bank transfer, Corporate billing (corporate clients).',
        'faq.pregunta-3': 'Do you make airport transfers?',
        'faq.respuesta-3': 'Yes, we make executive transfers to Jorge Chávez International Airport and Lima land terminal. We monitor your flight to wait for you at no extra charge for delays. Includes luggage assistance and personalized welcome sign if required.',
        'faq.pregunta-4': 'Do you have service for companies?',
        'faq.respuesta-4': 'Yes, we have corporate plans for companies that require frequent executive transport. We offer monthly billing, trip reports, corporate accounts and dedicated service. Contact us for a personalized proposal according to your organization\'s needs.',
        'faq.mas-preguntas': 'Do you have more questions?',
        'faq.escribenos': 'Write to us on WhatsApp',
        
        // Final CTA
        'final-cta.disponible': 'Available now',
        'final-cta.titulo': 'Need executive transport now?',
        'final-cta.subtitulo': 'Write to us and we\'ll attend to you in minutes. Premium service, safe and available 24/7.',
        'final-cta.reservar': 'Book via WhatsApp',
        'final-cta.respuesta-inmediata': 'Immediate response',
        
        // Footer
        'footer.descripcion': 'Your premium executive transport service. Luxury, safety and punctuality in every transfer.',
        'footer.contacto': 'Contact',
        'footer.zona-servicio': 'Service Area',
        'footer.whatsapp': 'Direct WhatsApp',
        'footer.lima': 'Lima & Manchay, Peru',
        'footer.servicio-24-7': '24/7 Service',
        'footer.cobertura': 'Full coverage',
        'footer.derechos': 'All rights reserved.',
        'footer.creado-por': 'Created and developed by',
        
        // Auth Modal
        'auth.login.titulo': 'Welcome back',
        'auth.login.subtitulo': 'Enter your details to continue',
        'auth.login.email': 'Email',
        'auth.login.password': 'Password',
        'auth.login.olvidaste-password': 'Forgot your password?',
        'auth.login.ingresar': 'Sign In',
        'auth.login.o-continua': 'or continue with',
        'auth.login.google': 'Sign in with Google',
        'auth.login.no-tienes-cuenta': 'Don\'t have an account?',
        'auth.login.registrate': 'Sign up here',
        
        'auth.register.titulo': 'Create Account',
        'auth.register.subtitulo': 'Join QORI today',
        'auth.register.nombre': 'Full Name',
        'auth.register.email': 'Email',
        'auth.register.password': 'Password',
        'auth.register.password-confirm': 'Confirm Password',
        'auth.register.terminos': 'I accept the Terms and Conditions and Privacy Policy',
        'auth.register.crear-cuenta': 'Create Account',
        'auth.register.o-registrate': 'or sign up with',
        'auth.register.google': 'Continue with Google',
        'auth.register.ya-tienes-cuenta': 'Already have an account?',
        'auth.register.inicia-sesion': 'Sign in',
        
        // Toast
        'toast.bienvenido': 'Welcome back!',
        'toast.cuenta-creada': 'Account created successfully!',
        'toast.gracias-compartir': 'Thanks for sharing!',
        'toast.error-email': 'Email already registered',
        'toast.error-password': 'Incorrect password',
        
        // Demo Notice
        'demo-notice.texto': 'This is a sample demo. To activate it for your business and start receiving real orders,',
        'demo-notice.contactanos': 'contact us',
        
        // Share
        'share.mensaje': 'I recommend QORI Executive Transfers! 🚗✨\n\nPremium transport service in Lima. Luxury, safety and punctuality in every ride.\n\nGet your quote now! 👇\n'
    }
};

// Current language
let currentLang = 'es';

// Set language
function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    
    currentLang = lang;
    localStorage.setItem('qori_language', lang);
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = TRANSLATIONS[lang][key];
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update button states
    updateLanguageButtons();
    
    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// Toggle language
function toggleLanguage() {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
}

// Update language button states
function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === currentLang) {
            btn.classList.add('active', 'bg-[#F4B41A]', 'text-black');
            btn.classList.remove('text-gray-400', 'hover:text-white');
        } else {
            btn.classList.remove('active', 'bg-[#F4B41A]', 'text-black');
            btn.classList.add('text-gray-400', 'hover:text-white');
        }
    });
}

// Initialize language on load
function initLanguage() {
    const savedLang = localStorage.getItem('qori_language') || 'es';
    setLanguage(savedLang);
}

// Export functions
if (typeof window !== 'undefined') {
    window.setLanguage = setLanguage;
    window.toggleLanguage = toggleLanguage;
    window.initLanguage = initLanguage;
    window.TRANSLATIONS = TRANSLATIONS;
}

console.log('✅ QORI i18n System loaded successfully');
