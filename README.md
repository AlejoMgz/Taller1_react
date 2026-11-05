# Taller 1 de React - MotoApp 

Desarrollada con **React (Vite)** y **Bootstrap**, centrada en la temática del motociclismo, maquetación profesional, consumo de APIs REST y manejo avanzado de componentes, props y enrutamiento.

🔗 **[Ver aplicación en vivo (GitHub Pages)](https://AlejoMgz.github.io/Taller1_react/)**

---

## Características Principales

* **Landing Page Optimizada**: Sección principal con banner informativo (*Pasión Por las Motos*) y una sección de modelos destacados organizados en tarjetas responsivas.
* **Consumo de API (Rick and Morty)**: 
  * Integración con la API oficial de personajes.
  * Buscador interactivo por nombre en tiempo real.
  * Sistema de paginación completo (*Anterior*, *Siguiente* e indicador de páginas totales).
* **Componentes y Props**: Demostración del uso de propiedades (`props`) y componentes reutilizables (`Avatar` y `Profile`) con lógica de dimensionamiento y funciones utilitarias (`utils.js`).
* **Enrutamiento y Code Splitting**: Navegación fluida mediante `React Router` y carga optimizada de componentes utilizando `React.lazy` y `Suspense` para mejorar el rendimiento (*Lighthouse*).
* **Diseño Responsivo**: Adaptado para diferentes tamaños de pantalla, uso de dispositivos móviles y navegación mediante menús laterales (*drawers*).

---

## Tecnologías y Herramientas Utilizadas

* **React 18+** (con Hooks: `useState`, `useEffect`)
* **Vite** (Entorno de desarrollo rápido)
* **React Router DOM** (Gestión de rutas)
* **Bootstrap 5** (Estilos y grillas responsivas)
* **JavaScript (ES6+)**
* **Git & GitHub** (Control de versiones)

---

## 📂 Estructura del Proyecto

```text
t1_react/
├── public/                 # Recursos estáticos (Imágenes locales, iconos, PWA manifest)
├── src/
│   ├── features/
│   │   ├── auth/
│   │   │   └── components/ # Componentes de Autenticación, Rickandmorty, Props y utils.js
│   │   └── landing/
│   │       └── components/ # Componentes principales (Header, Footer, Main, MotoCard)
│   ├── App.jsx             # Configuración de rutas y Lazy Loading
│   ├── main.jsx            # Punto de montaje de React
│   └── index.css           # Estilos globales
├── index.html              # HTML principal con metaetiquetas SEO y optimización LCP
└── package.json            # Dependencias y scripts del proyecto
🚀 Instalación y Ejecución Local
Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

Clona el repositorio:

Bash
git clone [https://github.com/AlejoMgz/Taller1_react.git](https://github.com/AlejoMgz/Taller1_react.git)
Entra al directorio del proyecto:

Bash
cd t1_react
Instala las dependencias:

Bash
npm install
Inicia el servidor de desarrollo:

Bash
npm run dev
Abre tu navegador y accede a la URL local indicada en la terminal (usualmente http://localhost:5173).

👨‍💻 Autor
Desarrollado por Alejandro Mesa Gutiérrez como parte de los talleres prácticos de desarrollo de software.