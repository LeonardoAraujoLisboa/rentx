export interface CarDTO {
    id: string;
    brand: string;
    name: string;
    about: string;
    rent: {
      period: string;
      price: number
    },
    fuel_type: string;
    thumbnail: string;
    accessories: {
        type: string;
        name: string;
    }[];//coloco isso no final para dizer que é um array desse tipo ai
    photos: string[];
}