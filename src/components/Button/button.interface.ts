export interface ButtonInterface {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  className?: string; 
  onClick?: () => void;
  disabled?: boolean;
}