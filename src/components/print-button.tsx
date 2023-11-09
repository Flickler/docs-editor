import { FloatButton } from "antd";

export function PrintButton() {
  return (
    <FloatButton
      onClick={() => window.print()}
      tooltip={<div className="tooltip">Imprimir</div>}
    />
  );
}