
export interface country {
    name: string,
    currency: string,
    rate: number
}

export interface pkg {
    name: string,
    title: string,
    price: number,
    additional: number,
    total: number | null
}