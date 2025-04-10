type Mods = Record<string, boolean | string>;

export const classNames = (
    cn: string,
    mods: Mods = {},
    additional: string[] = [],
): string => [
    cn,
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className),
    ...additional.filter(Boolean),
]
    .join(" ");
