import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import * as Styled from './styled';

export default function Header() {
  return (
    <Styled.Header>
      <Styled.Logo>
        <Link href="/" passHref>
          <a>hwangwoojin.com</a>
        </Link>
      </Styled.Logo>
      <Styled.Menu>
        <li>
          <Link href="/about" passHref>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/Posts" passHref>
            <a>Posts</a>
          </Link>
        </li>
        <li>
          <Link href="/Projects" passHref>
            <a>Projects</a>
          </Link>
        </li>
      </Styled.Menu>
      <Styled.Utils>
        <li>
          <Link href="https://github.com/hwangwoojin" passHref>
            <a>
              <Image
                src="/image/icons8-github-36.svg"
                alt="github logo"
                width="36"
                height="36"
              />
            </a>
          </Link>
        </li>
        <li>
          <Image
            src="/image/dark_mode_black_36dp.svg"
            alt="darkmode toggle"
            width="36"
            height="36"
          />
        </li>
      </Styled.Utils>
    </Styled.Header>
  );
}
