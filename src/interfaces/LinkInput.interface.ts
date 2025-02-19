export interface ILinkInput {
  onChange: (value: string) => void;
  value?: string;
  children?: (value: string) => React.ReactNode;
  placeholder?: string;
}
