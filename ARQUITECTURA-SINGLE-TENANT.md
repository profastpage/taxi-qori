# 🏢 ARQUITECTURA SINGLE-TENANT - QORI TAXI PERÚ

## 📋 Índice

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Arquitectura Actual (Single-Tenant)](#arquitectura-actual-single-tenant)
3. [Ventajas de Single-Tenant](#ventajas-de-single-tenant)
4. [Estructura de Datos](#estructura-de-datos)
5. [Roadmap a Multi-Tenant](#roadmap-a-multi-tenant)

---

## 📊 Resumen Ejecutivo

### Situación Actual
- **Cliente Único:** QORI Traslados Ejecutivos (Perú)
- **Tipo:** Single-Tenant (una sola empresa)
- **Objetivo:** Minimizar costos y complejidad inicial
- **Futuro:** Escalar a Multi-Tenant en Fase 3+

### ¿Qué es Single-Tenant?
```
┌─────────────────────────────────────┐
│         QORI TAXI PERÚ              │
│  ┌───────────────────────────────┐  │
│  │   Base de Datos Dedicada      │  │
│  │   - Usuarios QORI             │  │
│  │   - Viajes QORI               │  │
│  │   - Configuración QORI        │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘

✅ Simple
✅ Económico
✅ Rápido desarrollo
```

---

## 🏗️ Arquitectura Actual (Single-Tenant)

### Diagrama de Componentes

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND (Web PWA)                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  Landing     │  │  Cotizador   │  │  Auth Modal  │  │
│  │  Page        │  │  Inteligente │  │  Login/Reg   │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│              qori-config.js (Configuración)              │
│  ┌──────────────────────────────────────────────────┐  │
│  │ • Información de empresa (QORI)                  │  │
│  │ • Tarifas y zonas de cobertura                   │  │
│  │ • Colores y branding                             │  │
│  │ • Métodos de pago                                │  │
│  │ • Notificaciones                                 │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                    BACKEND (Futuro)                      │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Firebase / Supabase (Single Tenant DB)          │  │
│  │  - users (usuarios de QORI)                      │  │
│  │  - bookings (viajes de QORI)                     │  │
│  │  - drivers (choferes de QORI)                    │  │
│  │  - vehicles (vehículos de QORI)                  │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## ✅ Ventajas de Single-Tenant

### 1. **Menor Costo**
```
Single-Tenant: $50-100/mes
Multi-Tenant:  $200-500/mes (inicial)
```

### 2. **Desarrollo Más Rápido**
```
Single-Tenant: 2-3 semanas
Multi-Tenant:  6-8 semanas
```

### 3. **Simplicidad**
- Sin lógica de tenant_id en cada query
- Sin aislamiento de datos complejo
- Sin configuración multi-empresa

### 4. **Personalización Total**
- Colores específicos de QORI
- Tarifas específicas de QORI
- Flujos específicos de QORI

### 5. **Mantenimiento Simple**
- Un solo cliente que atender
- Actualizaciones sin breaking changes
- Debugging más fácil

---

## 💾 Estructura de Datos

### Colecciones (Firebase Ejemplo)

```javascript
// users (usuarios de QORI)
{
  uid: "user123",
  email: "juan@email.com",
  name: "Juan Pérez",
  phone: "+51987654321",
  createdAt: Timestamp,
  bookings: ["booking1", "booking2"]
}

// bookings (viajes de QORI)
{
  id: "booking123",
  userId: "user123",
  pickup: "Aeropuerto Jorge Chávez",
  destination: "Miraflores - Aurora",
  vehicleType: "sedan",
  price: 85,
  status: "confirmed",
  createdAt: Timestamp
}

// drivers (choferes de QORI)
{
  id: "driver123",
  name: "Carlos Rodríguez",
  phone: "+51912345678",
  vehicleId: "vehicle123",
  rating: 4.8,
  active: true
}

// vehicles (vehículos de QORI)
{
  id: "vehicle123",
  type: "sedan",
  model: "Toyota Corolla 2023",
  plate: "ABC-123",
  color: "Negro"
}
```

### Configuración (qori-config.js)

```javascript
const TENANT_CONFIG = {
    company: {
        name: 'QORI Traslados Ejecutivos',
        colors: { primary: '#0D3B4A', secondary: '#F4B41A' }
    },
    pricing: {
        basePrice: 25,
        airportZones: { 'miraflores': { min: 85, max: 85 } }
    },
    // ... más configuración específica de QORI
};
```

---

## 🚀 Roadmap a Multi-Tenant

### Fase 1: Single-Tenant (ACTUAL) ✅
```
- Solo QORI usa el sistema
- Configuración hardcodeada en qori-config.js
- Base de datos única
```

### Fase 2: Optimización (1-2 meses)
```
- Mejorar rendimiento
- Agregar analytics
- Optimizar conversión
- Sin cambios de arquitectura
```

### Fase 3: Multi-Tenant Prep (3-4 meses)
```
- Separar configuración por tenant
- Agregar tenant_id a todas las tablas
- Sistema de subdominios (empresa.qori.app)
- Dashboard multi-empresa
```

### Fase 4: Multi-Tenant Full (5-6 meses)
```
- Múltiples empresas en misma DB
- Aislamiento de datos por tenant_id
- Configuración dinámica por empresa
- Pricing diferenciado por empresa
```

---

## 📈 Comparación: Single vs Multi-Tenant

| Característica | Single-Tenant | Multi-Tenant |
|----------------|---------------|--------------|
| **Costo Inicial** | $50-100/mes | $200-500/mes |
| **Tiempo Desarrollo** | 2-3 semanas | 6-8 semanas |
| **Complejidad** | Baja | Alta |
| **Personalización** | Total | Limitada |
| **Escalabilidad** | Limitada | Ilimitada |
| **Mantenimiento** | Simple | Complejo |
| **Ideal para** | 1 cliente | 10+ clientes |

---

## 🎯 Recomendación

### ✅ Single-Tenant es MEJOR para QORI porque:

1. **Solo QORI usa el sistema** → No necesitamos multi-tenant
2. **Menor costo** → $50-100/mes vs $200-500/mes
3. **Más rápido** → 2-3 semanas vs 6-8 semanas
4. **Personalización total** → Colores, tarifas, flujos específicos
5. **Fácil mantenimiento** → Un solo cliente

### ⏳ Multi-Tenant cuando:
- Tengamos 5+ empresas clientes
- El negocio lo requiera
- Hayamos validado el modelo con QORI

---

## 📁 Archivos del Sistema

```
TAXI-qori/
├── index.html              # Landing page principal
├── qori-config.js          # Configuración single-tenant QORI
├── sw.js                   # Service Worker (PWA)
├── manifest.json           # PWA Manifest
├── icon-512.svg            # Icono PWA
└── ARQUITECTURA-SINGLE-TENANT.md  # Este documento
```

---

## 🔧 Uso de qori-config.js

### En el Frontend:

```javascript
// Acceder a configuración de QORI
const companyName = window.QORI_CONFIG.company.name;
const primaryColor = window.QORI_CONFIG.company.colors.primary;
const basePrice = window.QORI_CONFIG.pricing.basePrice;

// Usar utilidades
const fare = window.QORI_UTILS.getFareForZone('miraflores', 'sedan', 'now');
const formatted = window.QORI_UTILS.formatPrice(fare); // "S/ 85"
const inCoverage = window.QORI_UTILS.isZoneInCoverage('Miraflores'); // true
```

---

## 📞 Soporte

Para dudas sobre la arquitectura single-tenant:
- Documentación: `/ARQUITECTURA-SINGLE-TENANT.md`
- Configuración: `/qori-config.js`
- Código: `/index.html`

---

**Última actualización:** 2026-04-01  
**Versión:** 1.0.0  
**Cliente:** QORI Traslados Ejecutivos (Single-Tenant)
