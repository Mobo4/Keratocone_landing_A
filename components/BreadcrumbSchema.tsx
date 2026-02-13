interface BreadcrumbItem {
    name: string;
    url?: string;
}

interface BreadcrumbSchemaProps {
    items: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            ...(item.url
                ? { "name": item.name, "item": item.url }
                : { "name": item.name }),
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
