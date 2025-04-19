declare namespace JSX {
  interface IntrinsicElements {
    'micro-app': {
      name: string;
      url: string;
      style?: React.CSSProperties;
      iframe?: boolean;
    };
  }
}
