export type FormErrorProps = {
  children?: React.ReactNode;
};

export const FormError: React.FC<FormErrorProps> = ({ children }) => {
  if (!children) {
    return null;
  }
  return <p className="text-destructive text-xs">{children}</p>;
};
