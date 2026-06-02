# PITAN PITAN — Diseño del Sitio Web

**Fecha:** 2026-06-02  
**Evento:** Sebas & Mate Fest · 16–21 Junio 2026  
**Stack:** HTML + Tailwind CSS (CDN) + Vanilla JS  
**Deploy:** GitHub Pages desde `/leon/mate y sebas fest/`

---

## Identidad Visual

- **Fondo:** `#ECEFE8` (crema del logo)
- **Amarillo Colombia:** `#FCD116`
- **Azul Colombia:** `#003087`
- **Rojo Colombia:** `#CE1126`
- **Texto:** `#0A0A0A` negro casi puro
- **Tipografía títulos:** Bebas Neue (Google Fonts)
- **Tipografía cuerpo:** Inter (Google Fonts)
- **Logo:** `/logo del evento.jpeg` — PITAN PITAN, Sebas & Mate Fest, Copa del Mundo, CDMX 2025

---

## Estructura del Sitio

Sitio de una sola página (`index.html`) con 6 secciones accesibles via anchor links. Navegación sticky en top. Mobile-first responsive.

### Nav
- Logo PITAN PITAN (pequeño, izquierda)
- Links: Convocados · Itinerario · Locations · CDMX · Puerto Escondido
- Fondo crema, borde inferior sutil

---

### Sección 1 — PORTADA (Hero)
- Logo PITAN PITAN centrado, grande
- Subtítulo: "16–21 JUNIO · CDMX · PUERTO ESCONDIDO"
- Franja decorativa diagonal con colores Colombia (amarillo / azul / rojo)
- CTA: botón "Ver Itinerario" que hace scroll a sección 3

---

### Sección 2 — LISTA DE CONVOCADOS
- Título: "LISTA DE CONVOCADOS" (estilo comunicado oficial FEF)
- Grid de tarjetas estilo FIFA Ultimate Team
- Cada tarjeta: número de dorsal · nombre · posición (humor) · país
- Posiciones sugeridas: Delantero, Mediocampista, Defensa, Portero, Técnico (Sebas y Mate)
- **Lista a completar** con los nombres reales de invitados

---

### Sección 3 — ITINERARIO

Timeline vertical. Una tarjeta por día. Dentro de cada día, lista de actividades con hora e ícono.

**Código de colores:**
- Tarjetas actividad: fondo blanco / borde crema
- Tarjetas partido Mundial: fondo `#FCD116` amarillo
- Tarjeta Colombia vs Uzbekistán: tratamiento especial — más grande, bandera 🇨🇴, tipografía hero

#### Lunes 15 de Junio — CDMX

| Hora | Actividad |
|------|-----------|
| **MAÑANA** | **Campo Marte 26** 🏟️ · Pantallas gigantes, comida, arte |
| 11:00 AM | ⚽ viendo en Campo Marte: España vs Cabo Verde |
| 2:00 PM | ⚽ viendo en Campo Marte: Bélgica vs Egipto |
| **TARDE** | **FIFA Fan Fest — Zócalo** 🎉 · Gratis, 100k personas, ambiente mundialero |
| 5:00 PM | ⚽ viendo en el Zócalo: Arabia Saudita vs Uruguay |
| 8:00 PM | ⚽ viendo en el Zócalo: Irán vs Nueva Zelanda |

#### Martes 16 de Junio — CDMX
| Hora | Actividad |
|------|-----------|
| 2:00 PM | ⚽ Mundial: Francia vs Senegal |
| 4:00 PM | **Tarde de Pool & Dinks — Soho House** · Attire: Casual chic |
| 5:00 PM | ⚽ Mundial: Irak vs Noruega |
| 8:00 PM | ⚽ Mundial: Argentina vs Argelia |
| Noche | **Cena en Maizajo — Mesa del Chef** |
| 11:00 PM | ⚽ Mundial: Austria vs Jordania |

#### Miércoles 17 de Junio — PITAN PITAN FEST 🎉
| Hora | Actividad |
|------|-----------|
| 11:00 AM | **PITAN PITAN FEST — La Casa del Mundial (Anzures)** · Attire: Colombia tu papá |
| 12:00 PM | ⚽ Mundial: Portugal vs RD Congo |
| 3:00 PM | ⚽ Mundial: Inglaterra vs Croacia |
| 5:00 PM | **Party Bus al Azteca** |
| 7:00 PM | ⚽ Mundial: Ghana vs Panamá |
| 9:00 PM | 🇨🇴 **COLOMBIA vs UZBEKISTÁN — Estadio Azteca** |

#### Jueves 18 de Junio — CDMX → Puerto Escondido
| Hora | Actividad |
|------|-----------|
| AM | **Vuelos a Puerto Escondido** |
| 11:00 AM | ⚽ Mundial: Chequia vs Sudáfrica |
| 2:00 PM | ⚽ Mundial: Suiza vs Bosnia |
| 4:00 PM | **Partido de Fútbol Playa** |
| 5:00 PM | ⚽ Mundial: Canadá vs Qatar |
| 7:00 PM | **Cena mexicana + Cata de Mezcales del Oaxaca Profundo** |
| 8:00 PM | ⚽ viendo: México vs Corea del Sur |

#### Viernes 19 de Junio — Puerto Escondido
| Hora | Actividad |
|------|-----------|
| AM | **Surf** · Profesor: Sebastián Noguera |
| AM | **Yoga** · Profesor: Alejandro Castillo |
| AM | **Mindfulness Tántrico** · Profesor: Mateo Caicedo |
| AM | **Actividades Camp Kajuyali** · Profesora: Mariana Leyva |
| 1:30 PM | **Almuerzo en casa** |
| Tarde | Tarde libre |
| 5:00 PM | **🌺 GUAYABERA NIGHT — Fiesta Vallenata & Ranchera** |
| 8:00 PM | ⚽ Mundial: Brasil vs Haití |

#### Sábado 20 de Junio — Puerto Escondido
| Hora | Actividad |
|------|-----------|
| Mañana | **Brunch de Despedida** |
| 12:00 PM | ⚽ Mundial: Países Bajos vs Suecia |
| 3:00 PM | ⚽ Mundial: Alemania vs Costa de Marfil |
| 7:00 PM | ⚽ Mundial: Ecuador vs Curaçao |

#### Domingo 21 de Junio — Día de los Elegidos
| Hora | Actividad |
|------|-----------|
| 11:00 AM–5:00 PM | **Tour en barco por Lagunas de Manialtepec** — manglar, aves, snorkel, ceviche y cervezas en el agua |
| Tarde | Pool · Cervezas · Ceviche · Bloody Marys |
| 5:00 PM | ⚽ Mundial: España vs Arabia Saudita |

---

### Sección 4 — LOCATIONS

Tres cards grandes horizontales con foto + descripción:

1. **La Casa de la Selección** — Descartes 47, Anzures, CDMX  
   Fotos de casacaravana.com · 4 residencias, hasta 18 huéspedes · "El cuartel general del PITAN PITAN"

2. **Estadio Azteca** — Ciudad de México  
   Foto aérea del estadio · Capacidad 87,000 · Sede Match 24 Colombia vs Uzbekistán

3. **Casa Seri** — Puerto Escondido, Oaxaca  
   Fotos del PDF subido · 16 huéspedes · 8 suites · Full staff · Yoga pavilion · Pool · Vista al mar

---

### Sección 5 — GUÍA CDMX

Grid de cards por categoría. A completar con recomendaciones de Sebas:
- **Restaurantes:** Maizajo, Quintonil, Contramar, Rosetta...
- **Bares / Cantinas:** Licorería Limantour, La Roma, Jules Basement...
- **Cultura:** Museo de Antropología, Chapultepec, Frida Kahlo...
- **Zonas:** Polanco, Roma, Condesa, Centro Histórico

### Sección 6 — GUÍA PUERTO ESCONDIDO

- **Playas:** Zicatela, La Punta, Carrizalillo, Zipolite
- **Surf:** Escuela recomendada, mejores olas
- **Restaurantes:** El Cafecito, La Hostería, Almoraduz...
- **Experiencias:** Lagunas de Manialtepec, Mazunte, temazcal

---

## Imágenes a usar

- Logo: `/logo del evento.jpeg` (local)
- Casa Seri: imágenes del PDF subido (extraer o referenciar via URL de Tripping México)
- Estadio Azteca: foto aérea (buscar imagen libre o embed)
- Casa Caravana: fotos de casacaravana.com
- Soho House CDMX: foto del pool (sohohouse.com)
- Maizajo: foto del restaurante (maizajo.com)

---

## Deploy

Repo: crear `sebastianoguerae/pitan-pitan` en GitHub  
Branch: `main`  
GitHub Pages: activar desde root `/`  
URL final: `sebastianoguerae.github.io/pitan-pitan`
