module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx,mdx}",
        "./components/**/*.{js,jsx,ts,tsx,mdx}",
        "./pages/**/*.{js,jsx,ts,tsx,mdx}",
        "./src/**/*.{js,jsx,ts,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        screens: {
            "sm": "640px",
            // => @media (min-width: 640px) { ... }
            "sm-max": { "max": "639px" },
      
            "md": "768px",
            // => @media (min-width: 768px) { ... }
      
            "lg": "1024px",
            // => @media (min-width: 1024px) { ... }
      
            "xl": "1280px",
            // => @media (min-width: 1280px) { ... }
        },
        extend: {
            colors: {
                /* Map Tailwind color names to CSS variables so we can swap palettes via .dark */
                "on-primary-fixed-variant": "var(--on-primary-fixed-variant)",
                "on-secondary-fixed-variant": "var(--on-secondary-fixed-variant)",
                "outline-variant": "var(--outline-variant)",
                "on-tertiary-container": "var(--on-tertiary-container)",
                "on-primary-fixed": "var(--on-primary-fixed)",
                "error": "var(--error)",
                "surface-tint": "var(--surface-tint)",
                "on-secondary-container": "var(--on-secondary-container)",
                "on-primary": "var(--on-primary)",
                "on-error": "var(--on-error)",
                "tertiary-fixed": "var(--tertiary-fixed)",
                "on-tertiary-fixed-variant": "var(--on-tertiary-fixed-variant)",
                "surface-container-high": "var(--surface-container-high)",
                "tertiary": "var(--tertiary)",
                "surface-bright": "var(--surface-bright)",
                "surface-variant": "var(--surface-variant)",
                "error-container": "var(--error-container)",
                "surface-container-lowest": "var(--surface-container-lowest)",
                "tertiary-container": "var(--tertiary-container)",
                "primary-container": "var(--primary-container)",
                "primary-fixed": "var(--primary-fixed)",
                "outline": "var(--outline)",
                "inverse-primary": "var(--inverse-primary)",
                "on-surface-variant": "var(--on-surface-variant)",
                "on-secondary": "var(--on-secondary)",
                "surface": "var(--surface)",
                "surface-container": "var(--surface-container)",
                "on-tertiary-fixed": "var(--on-tertiary-fixed)",
                "secondary-fixed": "var(--secondary-fixed)",
                "inverse-surface": "var(--inverse-surface)",
                "on-background": "var(--on-background)",
                "inverse-on-surface": "var(--inverse-on-surface)",
                "primary-fixed-dim": "var(--primary-fixed-dim)",
                "surface-dim": "var(--surface-dim)",
                "secondary-container": "var(--secondary-container)",
                "on-error-container": "var(--on-error-container)",
                "secondary-fixed-dim": "var(--secondary-fixed-dim)",
                "tertiary-fixed-dim": "var(--tertiary-fixed-dim)",
                "on-tertiary": "var(--on-tertiary)",
                "on-surface": "var(--on-surface)",
                "primary": "var(--primary)",
                "surface-container-low": "var(--surface-container-low)",
                "on-primary-container": "var(--on-primary-container)",
                "secondary": "var(--secondary)",
                "background": "var(--background)",
                "on-secondary-fixed": "var(--on-secondary-fixed)",
                "surface-container-highest": "var(--surface-container-highest)",
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "container-max": "1200px",
                    "stack-lg": "32px",
                    "stack-md": "16px",
                    "gutter": "24px",
                    "stack-sm": "8px",
                    "base": "4px",
                    "section-gap": "128px",
                    "xs": "4px",
                    "indent": "24px",
                    "container-max": "900px",
                    "sm": "8px",
                    "md": "16px",
                    "xl": "32px",
                    "lg": "24px",
                    "baseline": "4px"
            },
            "fontFamily": {
                    "body-lg": ["Inter", "Helvetica", "sans-serif"],
                    "headline-lg-mobile": ["Inter", "Helvetica", "sans-serif"],
                    "headline-md": ["Inter", "Helvetica", "sans-serif"],
                    "display": ["Inter", "Helvetica", "sans-serif"],
                    "code-sm": ["JetBrains Mono", "monospace"],
                    "label-caps": ["JetBrains Mono", "monospace"],
                    "body-md": ["Inter", "Helvetica", "sans-serif"],
                    "headline-lg": ["Inter", "Helvetica", "sans-serif"]
            },
            "fontSize": {
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "600"}],
                    "headline-md": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
                    "display": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "code-sm": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                    "label-caps": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "h1": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "h2": ["30px", {"lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "h3": ["24px", {"lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "h1-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "700"}],
                    "body-sm": ["14px", {"lineHeight": "1.5", "letterSpacing": "0", "fontWeight": "400"}]
            }    
        },
    }
}