declare module 'breezeconnect' {
  interface BreezeConnectConstructor {
    appKey: string;
  }

  export interface Response<T> {
    success: boolean;
    data: {
      Success: T;
      Status: number;
      Error: any;
    };
  }

  export interface GetFundsSuccess {
    bank_account: string;
    total_bank_balance: number;
    allocated_equity: number;
    allocated_fno: number;
    allocated_commodity: number;
    allocated_currency: number;
    block_by_trade_equity: number;
    block_by_trade_fno: number;
    block_by_trade_commodity: number;
    block_by_trade_currency: number;
    block_by_trade_balance: number;
    unallocated_balance: string;
  }

  export interface GetDematHoldingsSuccess {
    stock_code: string;
    stock_ISIN: string;
    quantity: string;
    demat_total_bulk_quantity: string;
    demat_avail_quantity: string;
    blocked_quantity: string;
    demat_allocated_quantity: string;
  }

  export interface StockFeedParams {
    stockToken?: string;
    exchangeCode?: string;
    stockCode?: string;
    productType?: string;
    expiryDate?: string;
    strikePrice?: string;
    right?: string;
    getExchangeQuotes?: boolean;
    getMarketDepth?: boolean;
    interval?: string;
    getOrderNotification?: boolean;
  }

  export interface TickData {
    // Add tick data structure based on actual response
    [key: string]: any;
  }

  class BreezeConnect {
    constructor(params: BreezeConnectConstructor);
    generateSession(secretKey: string, apiSession: string): Promise<void>;
    getFunds(): Promise<Response<GetFundsSuccess>>;
    getDematHoldings(): Promise<Response<GetDematHoldingsSuccess[]>>;

    // WebSocket methods
    wsConnect(): void;
    wsDisconnect(): void;
    subscribeFeeds(params: StockFeedParams): Promise<Response<any>>;
    unsubscribeFeeds(params: StockFeedParams): Promise<Response<any>>;
    onTicks: (ticks: TickData) => void;
  }

  export {
    BreezeConnect,
    type Response,
    type GetFundsSuccess,
    type GetDematHoldingsSuccess,
    type StockFeedParams,
    type TickData,
  };
}
