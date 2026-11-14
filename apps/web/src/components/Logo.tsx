'use client';

import Image from 'next/image';

interface LogoProps {
  small?: boolean;
}

export default function Logo({small = false}: LogoProps) {
  return (
    <div className="logo-cluster">
      <div className="logo-mark">
        <Image
          src="/brand/kognos-mark.webp"
          width={small ? 42 : 56}
          height={small ? 42 : 56}
          alt="Símbolo Kognos"
          priority
        />
      </div>
      <div className="logo-word">
        <strong>Kognos<span>.</span></strong>
        {!small && <small>APRENDIZAGEM INTELIGENTE</small>}
      </div>
    </div>
  );
}