export type Hex2RgpReturn = {
    r: number;
    g: number;
    b: number;
}

export default function hex2rgb(color_code: string) : Hex2RgpReturn{
    let hex = color_code.replace(/^#/, "");
    // Handle shorthand hex
    if (hex.length === 3) {
        hex = hex.split("").map(x => x + x).join("");
    }
    if (hex.length !== 6) return {r: 0, g: 0, b: 0};
    const num = parseInt(hex, 16);
    return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255
    }
}