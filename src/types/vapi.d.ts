declare namespace JSX {
  interface IntrinsicElements {
    'vapi-widget': {
      id?: string;
      'assistant-id'?: string;
      'public-key'?: string;
      key?: string;
    };
  }
}

declare global {
  interface HTMLElement {
    open?: () => void;
  }
}

export {};