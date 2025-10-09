export type User = {
  uid: string;
  role: 'farmer' | 'buyer' | 'admin';
  displayName: string;
  phoneNumber?: string;
  language: 'en' | 'hi';
  walletAddress?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Product = {
  productId: string;
  farmerId: string;
  title: string;
  description: string;
  category: string;
  pricePerUnit: number;
  unit: 'kg' | 'ton' | 'crate';
  qtyAvailable: number;
  images: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Order = {
  orderId: string;
  buyerId: string;
  farmerId: string;
  productId: string;
  qty: number;
  totalPrice: number;
  status:
    | 'created'
    | 'escrow_funded'
    | 'shipped'
    | 'delivered'
    | 'disputed'
    | 'released'
    | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
};

export type Loan = {
  loanId: string;
  userId: string;
  score: {
    value: number;
    grade: 'A' | 'B' | 'C';
    reasons: string[];
  };
  amountRequested: number;
  status: 'draft' | 'submitted' | 'approved' | 'rejected' | 'disbursed';
  createdAt: Date;
  updatedAt: Date;
};
