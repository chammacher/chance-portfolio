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
            "colors": {
                    "error": "#ffb4ab",
                    "tertiary-fixed": "#6ffbbe",
                    "primary-container": "#4d8eff",
                    "on-surface-variant": "#c2c6d6",
                    "surface": "#0b1326",
                    "on-primary-fixed-variant": "#004395",
                    "primary-fixed-dim": "#adc6ff",
                    "background": "#0b1326",
                    "on-tertiary-fixed-variant": "#005236",
                    "inverse-surface": "#dae2fd",
                    "secondary-fixed": "#d4e4fa",
                    "on-secondary-fixed-variant": "#39485a",
                    "surface-container-lowest": "#060e20",
                    "secondary": "#b9c8de",
                    "surface-container-highest": "#2d3449",
                    "secondary-container": "#39485a",
                    "on-error-container": "#ffdad6",
                    "surface-container-low": "#131b2e",
                    "on-background": "#dae2fd",
                    "surface-bright": "#31394d",
                    "on-surface": "#dae2fd",
                    "tertiary-container": "#00a572",
                    "on-primary-fixed": "#001a42",
                    "surface-container-high": "#222a3d",
                    "inverse-primary": "#005ac2",
                    "outline-variant": "#424754",
                    "on-secondary-fixed": "#0d1c2d",
                    "primary-fixed": "#d8e2ff",
                    "on-secondary-container": "#a7b6cc",
                    "surface-tint": "#adc6ff",
                    "outline": "#8c909f",
                    "primary": "#adc6ff",
                    "secondary-fixed-dim": "#b9c8de",
                    "tertiary": "#4edea3",
                    "surface-variant": "#2d3449",
                    "error-container": "#93000a",
                    "on-tertiary": "#003824",
                    "on-tertiary-fixed": "#002113",
                    "on-error": "#690005",
                    "tertiary-fixed-dim": "#4edea3",
                    "on-primary-container": "#00285d",
                    "surface-dim": "#0b1326",
                    "on-secondary": "#233143",
                    "surface-container": "#171f33",
                    "inverse-on-surface": "#283044",
                    "on-tertiary-container": "#00311f",
                    "on-primary": "#002e6a"
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
                    "section-gap": "128px"
            },
            "fontFamily": {
                    "body-lg": ["Arial", "Helvetica", "sans-serif"],
                    "headline-lg-mobile": ["Arial", "Helvetica", "sans-serif"],
                    "headline-md": ["Arial", "Helvetica", "sans-serif"],
                    "display": ["Arial", "Helvetica", "sans-serif"],
                    "code-sm": ["JetBrains Mono", "monospace"],
                    "label-caps": ["JetBrains Mono", "monospace"],
                    "body-md": ["Arial", "Helvetica", "sans-serif"],
                    "headline-lg": ["Arial", "Helvetica", "sans-serif"]
            },
            "fontSize": {
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "600"}],
                    "headline-md": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
                    "display": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "code-sm": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                    "label-caps": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600"}]
            }    
        },
    }
}