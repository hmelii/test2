import React, { useEffect, useState } from 'react';
import config from './config';
import styles from './NetworkIcon.module.scss';
import { Icon } from '../Icon';

export const NetworkIcon = ({
  name = null,
  width = null,
  size = 's',
  rounded = true,
  className = '',
}) => {
  const { icons, sizes } = config;
  const [icon, setIcon] = useState(null);
  const [style, setStyle] = useState({});

  if (!name || !Object.prototype.hasOwnProperty.call(icons, name)) {
    return null;
  }

  useEffect(async () => {
    if (icon === name) {
      return;
    }

    setIcon(name);
    let iconWidthInPx;

    if (!width || Number.isNaN(Number(width))) {
      iconWidthInPx = Object.prototype.hasOwnProperty.call(sizes, size) ? sizes[size] : sizes.s;
    } else {
      iconWidthInPx = width;
    }

    const iconWidthInRem = `${iconWidthInPx / 10}rem`;

    setStyle((prevStyle) => ({
      ...prevStyle,
      width: iconWidthInRem,
      height: iconWidthInRem,
      backgroundColor: icons[name].bgColor,
    }));
  }, [name]);

  return (
    <div
      className={`${styles.NetworkIcon} ${
        rounded === true && styles.NetworkIconRounded
      } ${className}`}
      style={style}
    >
      <Icon className={styles.NetworkIconImg} name={name} />
    </div>
  );
};
