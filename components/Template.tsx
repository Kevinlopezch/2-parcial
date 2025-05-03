import React, { ReactNode } from "react";

interface TemplateComponentProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
  [key: string]: any;
}

function TemplateComponent({ children, header, footer, className, ...rest }: TemplateComponentProps) {
  return (
    <div
      className={`bg-white rounded-md shadow-md overflow-hidden ${
        className || ""
      }`}
      {...rest}
    >
      {header && (
        <div className="bg-gray-100 py-4 px-6 border-b border-gray-200">
          {header}
        </div>
      )}
      <div className="p-6">{children}</div>
      {footer && (
        <div className="bg-gray-100 py-3 px-6 border-t border-gray-200 text-sm text-gray-500">
          {footer}
        </div>
      )}
    </div>
  );
}

export default TemplateComponent;
