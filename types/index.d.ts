export { }

declare global {
  type TInventoryItem = {
    id: number;
    category: string;
    name: string;
    price: number;
    stock: number;
    size: string;
    image: string;
  }

  type TReservationItem = {
    id: number;
    items: TInventoryItem[];
    total: number;
    date: string;
    student: string;
    studentName: string;
    status: string;
  }
}