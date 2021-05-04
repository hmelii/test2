import React from 'react';
import { useDynamicSVGImport } from '../../../hooks/useDynamicSVGImport';

export const Icon = ({ name, onCompleted, onError, ...rest }) => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    onError,
  });

  if (error) {
    return null;
  }
  if (loading) {
    return null;
  }
  if (SvgIcon) {
    return <SvgIcon {...rest} />;
  }
  return null;
};
