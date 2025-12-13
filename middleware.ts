import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Skip if already on Spanish route or static files
    if (pathname.startsWith('/es') ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.')) {
        return NextResponse.next()
    }

    // Check for language preference cookie
    const langCookie = request.cookies.get('preferred-language')?.value

    // Check Accept-Language header
    const acceptLanguage = request.headers.get('accept-language') || ''
    const isSpanishPreferred = acceptLanguage.toLowerCase().includes('es')

    // Redirect to Spanish if preference is set or browser prefers Spanish
    if ((langCookie === 'es' || (isSpanishPreferred && !langCookie)) && pathname === '/') {
        const response = NextResponse.redirect(new URL('/es', request.url))
        // Set cookie if not already set
        if (!langCookie) {
            response.cookies.set('preferred-language', 'es', {
                maxAge: 60 * 60 * 24 * 365, // 1 year
                path: '/',
            })
        }
        return response
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
