import * as React from "react";
import { useDynamicSVGImport } from "src/core/hooks/svg";

interface IProps {
  name: string;

  width?: string;
  height?: string;

  onCompleted?: any;
  onError?: any;
}
export const Icon = ({
  name,
  width = "16",
  height = "16",
  onCompleted,
  onError,
}: IProps) => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    onError,
  });

  const hasSVG = !error && !loading && SvgIcon;

  if (!hasSVG) {
    return null;
  }

  return <SvgIcon width={width} height={height} />;
};
