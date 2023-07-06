declare global {
  interface Window {
    gtag: (type: string, googleAnalyticsId: string, options?: { page_path: string }) => void;
    Paddle: {
      Setup: (params: any) => void;
    };
    fpr: (event: string, data?: any) => void;
    dataLayer: Array<{ event: string }>;
  }
}

declare global {
  var Paddle: {
    Checkout: any;
    Setup: (params: any) => void;
  };

  var fpr: (event: string, data?: any) => void;

  var dataLayer: Array<{ event: string }>;
}

export {};