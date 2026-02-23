import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Determine locale from path
    const locale = pathname.startsWith('/es') ? 'es' : 'en'

    // Skip static files
    if (pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.')) {
        const response = NextResponse.next()
        response.headers.set('x-locale', locale)
        return response
    }

    // Check for language preference cookie
    const langCookie = request.cookies.get('preferred-language')?.value

    // Check Accept-Language header
    const acceptLanguage = request.headers.get('accept-language') || ''
    const isSpanishPreferred = acceptLanguage.toLowerCase().includes('es')

    // Redirect to Spanish if preference is set or browser prefers Spanish
    if ((langCookie === 'es' || (isSpanishPreferred && !langCookie)) && pathname === '/') {
        const response = NextResponse.redirect(new URL('/es', request.url))
        if (!langCookie) {
            response.cookies.set('preferred-language', 'es', {
                maxAge: 60 * 60 * 24 * 365, // 1 year
                path: '/',
            })
        }
        return response
    }

    const response = NextResponse.next()
    response.headers.set('x-locale', locale)
    return response
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
