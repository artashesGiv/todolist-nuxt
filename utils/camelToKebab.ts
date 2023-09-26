export const camelToKebab = (str: string) => {
    return str
        .split('')
        .map((letter, idx) =>
            letter.toUpperCase() === letter
                ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
                : letter,
        )
        .join('')
}
