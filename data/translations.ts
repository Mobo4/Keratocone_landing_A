// Centralized translations for the Spanish version
// This file contains all UI strings, labels, and common phrases

export const translations = {
    en: {
        // Navigation
        nav: {
            home: 'Home',
            about: 'About',
            contact: 'Contact',
            resources: 'Resources',
            bookConsultation: 'Book Consultation',
        },

        // Common CTAs
        cta: {
            learnMore: 'Learn More',
            callNow: 'Call Now',
            scheduleAppointment: 'Schedule Appointment',
            bookConsultation: 'Book Consultation',
            readMore: 'Read More',
            getDirections: 'Get Directions',
        },

        // Form labels
        form: {
            name: 'Name',
            email: 'Email',
            phone: 'Phone',
            message: 'Message',
            submit: 'Submit',
            sending: 'Sending...',
            success: 'Thank you! We will contact you soon.',
            error: 'Something went wrong. Please try again.',
            required: 'This field is required',
            invalidEmail: 'Please enter a valid email',
            invalidPhone: 'Please enter a valid phone number',
        },

        // Common phrases
        common: {
            insuranceAccepted: 'Insurance Accepted',
            freeConsultation: 'Free Consultation',
            yearsExperience: 'Years Experience',
            readTime: 'min read',
            backTo: 'Back to',
        },
    },

    es: {
        // Navigation
        nav: {
            home: 'Inicio',
            about: 'Acerca de',
            contact: 'Contacto',
            resources: 'Recursos',
            bookConsultation: 'Agendar Consulta',
        },

        // Common CTAs
        cta: {
            learnMore: 'Más Información',
            callNow: 'Llame Ahora',
            scheduleAppointment: 'Agendar Cita',
            bookConsultation: 'Agendar Consulta',
            readMore: 'Leer Más',
            getDirections: 'Obtener Direcciones',
        },

        // Form labels
        form: {
            name: 'Nombre',
            email: 'Correo Electrónico',
            phone: 'Teléfono',
            message: 'Mensaje',
            submit: 'Enviar',
            sending: 'Enviando...',
            success: '¡Gracias! Nos pondremos en contacto pronto.',
            error: 'Algo salió mal. Por favor intente de nuevo.',
            required: 'Este campo es obligatorio',
            invalidEmail: 'Por favor ingrese un correo válido',
            invalidPhone: 'Por favor ingrese un teléfono válido',
        },

        // Common phrases
        common: {
            insuranceAccepted: 'Aceptamos Seguros',
            freeConsultation: 'Consulta Gratuita',
            yearsExperience: 'Años de Experiencia',
            readTime: 'min de lectura',
            backTo: 'Volver a',
        },
    },
}

export type Language = 'en' | 'es'

export function getTranslations(lang: Language) {
    return translations[lang]
}
