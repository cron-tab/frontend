export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
}

export function Input({ ...other }: InputProps): JSX.Element {
  return (
    <input placeholder="dddd"/>
  );
}

Input.displayName = "Input";
