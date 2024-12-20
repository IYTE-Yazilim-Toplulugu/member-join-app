import generator from "generate-password";

export const generatePassword : () => string = () => {
    const passwords : string = generator.generate({
        length: 6,
        uppercase: false,
        symbols: false,
        numbers: true,
    });

    return passwords;
}