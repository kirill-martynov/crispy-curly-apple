import * as React from "react";

interface UseDynamicSVGImportOptions {
  onCompleted?: (
    name: string,
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  ) => void;
  onError?: (err: Error) => void;
}

const pathPattern = "!@svgr/webpack?-svgo,+titleProp,+ref";

export function useDynamicSVGImport(
  name: string,
  options: UseDynamicSVGImportOptions = {}
) {
  const ImportedIconRef =
    React.useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<Error>();

  const { onCompleted, onError } = options;

  React.useEffect(() => {
    setLoading(true);

    importIcon();
  }, [name, onCompleted, onError]);

  const importIcon = async (): Promise<void> => {
    try {
      ImportedIconRef.current = (
        await import(
          `!!@svgr/webpack?-svgo,+titleProp,+ref!src/assets/icons/${name}.svg`
        )
      ).default;
      onCompleted?.(name, ImportedIconRef.current);
    } catch (err) {
      onError?.(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { error, loading, SvgIcon: ImportedIconRef.current };
}
