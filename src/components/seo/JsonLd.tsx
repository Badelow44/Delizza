/**
 * Server component that renders a <script type="application/ld+json"> tag.
 * Accepts any JSON-serialisable value.
 */

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export default function JsonLd({ data }: JsonLdProps) {
  // Escape closing script tags to prevent XSS when embedding in HTML
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
