/**
 * QORI TAXI PERÚ - SISTEMA SINGLE-TENANT
 * 
 * Configuración específica para QORI (único cliente)
 * Arquitectura simplificada - Sin multi-tenancy
 * 
 * Versión: 1.0.0
 * Última actualización: 2026-04-01
 */

// ============================================================================
// CONFIGURACIÓN DEL TENANT (QORI - ÚNICO CLIENTE)
// ============================================================================

const TENANT_CONFIG = {
    // Información de la empresa
    company: {
        id: 'qori-peru-001',
        name: 'QORI Traslados Ejecutivos',
        shortName: 'QORI',
        tagline: 'Traslados Ejecutivos',
        ruc: '20601234567',
        logo: '/icon-512.svg',
        colors: {
            primary: '#0D3B4A',    // Teal oscuro
            secondary: '#F4B41A',  // Dorado
            accent: '#D49A12',     // Dorado oscuro
            background: '#0a0a0a',
            text: '#ffffff'
        }
    },

    // Contacto
    contact: {
        phone: '+51933667414',
        whatsapp: '51933667414',
        email: 'contacto@qoriperu.com.pe',
        address: 'Lima, Perú',
        serviceArea: ['Lima', 'Callao', 'Lima Metropolitana']
    },

    // Redes Sociales
    social: {
        facebook: 'https://www.facebook.com/Qori.oficial',
        website: 'https://qoriperu.com.pe',
        instagram: '@qori.oficial'
    },

    // Configuración de la aplicación
    app: {
        name: 'QORI App',
        version: '1.0.0',
        minVersion: '1.0.0',
        supportedPlatforms: ['web', 'android', 'ios'],
        features: {
            booking: true,
            tracking: true,
            payments: true,
            notifications: true,
            ratings: true,
            corporate: true
        }
    },

    // Tarifas (en Soles Peruanos - PEN)
    pricing: {
        currency: 'PEN',
        symbol: 'S/',
        basePrice: 25,
        airportZones: {
            'la molina': { min: 85, max: 100 },
            'san borja': { min: 90, max: 90 },
            'surco': { min: 90, max: 90 },
            'surquillo': { min: 85, max: 85 },
            'san isidro': { min: 85, max: 85 },
            'miraflores': { min: 85, max: 85 },
            'barranco': { min: 85, max: 85 },
            'chorrillos': { min: 90, max: 100 },
            'jesus maria': { min: 80, max: 80 },
            'lince': { min: 85, max: 85 },
            'san miguel': { min: 65, max: 65 },
            'la victoria': { min: 80, max: 80 },
            'brena': { min: 75, max: 75 },
            'rimac': { min: 65, max: 65 },
            'lima': { min: 80, max: 80 },
            'cieneguilla': { min: 140, max: 140 },
            'salamanca': { min: 80, max: 80 },
            'san luis': { min: 80, max: 80 }
        },
        vehicleTypes: {
            sedan: { name: 'Sedán Ejecutivo', multiplier: 1.0 },
            suv: { name: 'Camioneta Premium', multiplier: 1.3 },
            van: { name: 'Van Ejecutiva', multiplier: 1.6 }
        },
        scheduleTypes: {
            now: { name: 'Inmediato', additional: 0 },
            scheduled: { name: 'Programado', additional: 5 }
        }
    },

    // Horarios de atención
    hours: {
        service: '24/7',
        support: {
            monday: { open: '00:00', close: '23:59' },
            tuesday: { open: '00:00', close: '23:59' },
            wednesday: { open: '00:00', close: '23:59' },
            thursday: { open: '00:00', close: '23:59' },
            friday: { open: '00:00', close: '23:59' },
            saturday: { open: '00:00', close: '23:59' },
            sunday: { open: '00:00', close: '23:59' }
        }
    },

    // Métodos de pago aceptados
    payments: {
        accepted: ['cash', 'yape', 'plin', 'transfer', 'corporate'],
        cash: {
            enabled: true,
            currencies: ['PEN', 'USD']
        },
        digital: {
            yape: true,
            plin: true
        },
        corporate: {
            enabled: true,
            billing: 'monthly'
        }
    },

    // Zonas de cobertura
    coverage: {
        primary: ['Lima', 'Callao'],
        secondary: ['Lima Metropolitana'],
        airports: ['Aeropuerto Internacional Jorge Chávez'],
        terminals: ['Terminal Terrestre Plaza Norte', 'Terminal Terrestre Javier Prado']
    },

    // Configuración de notificaciones
    notifications: {
        email: true,
        sms: true,
        push: true,
        whatsapp: true,
        templates: {
            bookingConfirmed: 'Tu traslado ha sido confirmado. Chofer: {driver}, Vehículo: {vehicle}',
            driverArrived: 'Tu chofer ha llegado al punto de recogida',
            tripCompleted: 'Viaje completado. ¡Gracias por usar QORI!',
            paymentReceived: 'Pago de S/ {amount} recibido correctamente'
        }
    },

    // Límites y restricciones
    limits: {
        maxAdvanceBooking: 30, // días
        minAdvanceBooking: 0, // horas
        maxPassengers: 7,
        maxLuggage: 6,
        cancellationWindow: 24 // horas
    },

    // Idiomas soportados
    languages: {
        default: 'es',
        supported: ['es', 'en']
    },

    // Métricas y analytics
    analytics: {
        enabled: true,
        trackPageViews: true,
        trackConversions: true,
        trackUserBehavior: true
    }
};

// ============================================================================
// EXPORTAR CONFIGURACIÓN
// ============================================================================

// Para navegador
if (typeof window !== 'undefined') {
    window.QORI_CONFIG = TENANT_CONFIG;
}

// Para Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TENANT_CONFIG;
}

// ============================================================================
// FUNCIONES DE UTILIDAD
// ============================================================================

/**
 * Obtener tarifa para zona específica
 */
function getFareForZone(zone, vehicleType = 'sedan', scheduleType = 'now') {
    const zoneLower = zone.toLowerCase();
    const zonePricing = TENANT_CONFIG.pricing.airportZones[zoneLower];
    
    if (!zonePricing) {
        return TENANT_CONFIG.pricing.basePrice;
    }
    
    const baseFare = zonePricing.min;
    const vehicleMultiplier = TENANT_CONFIG.pricing.vehicleTypes[vehicleType]?.multiplier || 1;
    const scheduleAdditional = TENANT_CONFIG.pricing.scheduleTypes[scheduleType]?.additional || 0;
    
    return Math.round(baseFare * vehicleMultiplier + scheduleAdditional);
}

/**
 * Verificar si zona está en cobertura
 */
function isZoneInCoverage(zone) {
    const zoneLower = zone.toLowerCase();
    const allZones = Object.keys(TENANT_CONFIG.pricing.airportZones);
    return allZones.some(z => zoneLower.includes(z));
}

/**
 * Formatear precio con símbolo de moneda
 */
function formatPrice(amount) {
    return `${TENANT_CONFIG.pricing.symbol} ${amount}`;
}

// Exportar funciones utilitarias
if (typeof window !== 'undefined') {
    window.QORI_UTILS = {
        getFareForZone,
        isZoneInCoverage,
        formatPrice
    };
}

console.log('✅ QORI Single-Tenant Config loaded successfully');
