export interface Order {
    id: number;
    createdAt: string;
    address: string;
    receiver: string;
    contact: string;
    bookTitle: string;
    totalQuantity: number;
    totalPrice: number;
}

export interface OrderSheet {
    items: number[];
    delivery: {
        address: string;
        receiver: string;
        contact: number;
    };
    firstBookTitle: string;
    totalQuantity: number;
    totalPrice: number;
}
