export interface Theme {
    heading: HeadingStyles;
    paragraph: ParagraphStyles;
    icon: IconStyles;
    location: string;
    badge: string;
    body: string;
}

export interface HeadingStyles {
    default: string;
    name: string;
    card: string;
    card_link: string;
}

export interface ParagraphStyles {
    default: string;
    bio: string;
    card: string;
}
export interface IconStyles {
    icon: string;
    link: string;
}
export type ThemeNames = "default_theme" | "emerald_theme" | "amber_theme"; // Add more themes as needed

export const themes: Record<ThemeNames, Theme> = {
    default_theme: {
        heading: {
            default:
                "font-inter text-neutral-800 text-xl font-bold dark:text-neutral-200",
            name: "font-inter text-neutral-800 text-2xl font-bold dark:text-neutral-200",
            card: "font-inter text-neutral-800 text-base font-semibold dark:text-neutral-200",
            card_link:
                "font-inter hover:underline text-neutral-800 text-base font-semibold dark:text-neutral-200",
        },
        paragraph: {
            default:
                "font-monospace text-neutral-600 text-xs dark:text-neutral-400",
            bio: "font-monospace text-neutral-600 text-sm max-w-md dark:text-neutral-400",
            card: "font-monospace text-neutral-800 text-sm max-w-md dark:text-neutral-200",
        },
        icon: {
            icon: "w-4 h-4",
            link: "w-8 h-8 grid place-items-center border border-neutral-400 hover:border-neutral-500 dark:border-neutral-600 hover:dark:border-neutral-400 rounded-md text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 hover:dark:text-neutral-200 hover:bg-neutral-200 hover:dark:bg-neutral-800 transition-colors duration-200",
        },
        location:
            "inline-flex gap-1 w-max font-monospace leading-none items-center text-xs text-neutral-500 hover:underline",
        badge: "px-2.5 py-1 bg-neutral-800 dark:bg-neutral-200 dark:text-neutral-800 text-neutral-200 rounded-full text-xs font-semibold",
        body: "py-12 bg-neutral-100 dark:bg-neutral-900",
    },
    emerald_theme: {
        heading: {
            default:
                "font-inter text-emerald-800 text-xl font-bold dark:text-emerald-200",
            name: "font-inter text-emerald-800 text-2xl font-bold dark:text-emerald-200",
            card: "font-inter text-emerald-800 text-base font-semibold dark:text-emerald-200",
            card_link:
                "font-inter hover:underline text-emerald-800 text-base font-semibold dark:text-emerald-200",
        },
        paragraph: {
            default:
                "font-monospace text-emerald-600 text-xs dark:text-emerald-400",
            bio: "font-monospace text-emerald-600 text-sm max-w-md dark:text-emerald-400",
            card: "font-monospace text-emerald-800 text-sm max-w-md dark:text-emerald-200",
        },
        icon: {
            icon: "w-4 h-4",
            link: "w-8 h-8 grid place-items-center border border-emerald-400 hover:border-emerald-500 dark:border-emerald-600 hover:dark:border-emerald-400 rounded-md text-emerald-500 hover:text-emerald-800 dark:text-emerald-400 hover:dark:text-emerald-200 hover:bg-emerald-200 hover:dark:bg-emerald-800 transition-colors duration-200",
        },
        location:
            "inline-flex gap-1 w-max font-monospace leading-none items-center text-xs text-emerald-500 hover:underline",
        badge: "px-2.5 py-1 bg-emerald-800 dark:bg-emerald-200 dark:text-emerald-800 text-emerald-200 rounded-full text-xs font-semibold",
        body: "py-12 bg-emerald-100 dark:bg-emerald-900",
    },
    amber_theme: {
        heading: {
            default:
                "font-inter text-amber-800 text-xl font-bold dark:text-amber-200",
            name: "font-inter text-amber-800 text-2xl font-bold dark:text-amber-200",
            card: "font-inter text-amber-800 text-base font-semibold dark:text-amber-200",
            card_link:
                "font-inter hover:underline text-amber-800 text-base font-semibold dark:text-amber-200",
        },
        paragraph: {
            default:
                "font-monospace text-amber-600 text-xs dark:text-amber-400",
            bio: "font-monospace text-amber-600 text-sm max-w-md dark:text-amber-400",
            card: "font-monospace text-amber-800 text-sm max-w-md dark:text-amber-200",
        },
        icon: {
            icon: "w-4 h-4",
            link: "w-8 h-8 grid place-items-center border border-amber-400 hover:border-amber-500 dark:border-amber-600 hover:dark:border-amber-400 rounded-md text-amber-500 hover:text-amber-800 dark:text-amber-400 hover:dark:text-amber-200 hover:bg-amber-200 hover:dark:bg-amber-800 transition-colors duration-200",
        },
        location:
            "inline-flex gap-1 w-max font-monospace leading-none items-center text-xs text-amber-500 hover:underline",
        badge: "px-2.5 py-1 bg-amber-800 dark:bg-amber-200 dark:text-amber-800 text-amber-200 rounded-full text-xs font-semibold",
        body: "py-12 bg-amber-100 dark:bg-amber-900",
    },
};
