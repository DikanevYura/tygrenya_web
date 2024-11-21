import { useEffect, useState } from 'react';
import { useMediaQuery as useMedia } from 'react-responsive';

export const useMediaQuery = (props: any) => {
  const [isMounted, setIsMounted] = useState(false);
  const isMaxWidth = useMedia(props);
  // const isMobile = isMounted && isMaxWidth;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true);
    }
  }, []);

  return isMounted && isMaxWidth;
};

useMediaQuery.displayName = 'useMediaQuery';
