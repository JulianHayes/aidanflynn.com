import React from 'react';
import { cn } from '@/lib/utils';

export function IlluminatedHero() {
  return (
    <div className="relative w-full flex h-screen flex-wrap items-center justify-center overflow-hidden bg-black text-[calc(var(--size)*0.022)] text-white [--factor:min(1000px,100vh)] [--size:min(var(--factor),100vw)]">
      <div className="bg absolute h-full w-full max-w-[44em]">
        <div className="shadow-bgt absolute size-full translate-[0_-70%] scale-[1.2] animate-[onloadbgt_1s_ease-in-out_forwards] rounded-[100em] opacity-60" />
        <div className="shadow-bgb absolute size-full translate-[0_-70%] scale-[1.2] animate-[onloadbgb_1s_ease-in-out_forwards] rounded-[100em] opacity-60" />
      </div>

      <div className="text-center text-4xl md:text-6xl font-semibold" aria-hidden="true">
        Introducing
        <br />
        <span
          className={cn(
            'relative inline-block',
            'before:absolute before:animate-[onloadopacity_1s_ease-out_forwards] before:opacity-0 before:content-[attr(data-text)]',
            'before:bg-[linear-gradient(0deg,#dfe5ee_0%,#fffaf6_50%)] before:bg-clip-text before:text-[#fffaf6]',
            'filter-[url(#glow-4)]',
          )}
          data-text="Illuminated Glow Text."
        >
          Illuminated Glow Text.
        </span>
        <br />
        Highlight the main focus text.
        <br />
      </div>

      <p className="absolute top-0 bottom-0 m-auto h-fit max-w-[28em] translate-y-[12em] bg-gradient-to-t from-[#86868b] to-[#bdc2c9] bg-clip-text text-center font-semibold text-transparent">
        Experience a new way to draw attention to key elements with stunning{' '}
        <span className="relative inline-block font-black text-[#e7dfd6]">
          illuminated text.
        </span>{' '}
        Perfect for making a bold statement, this dynamic design ensures your
        content stands out effortlessly.
      </p>

      <svg
        className="absolute -z-1 h-0 w-0"
        width="1440px"
        height="300px"
        viewBox="0 0 1440 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="glow-4"
            colorInterpolationFilters="sRGB"
            x="-50%"
            y="-200%"
            width="200%"
            height="500%"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur4" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="19" result="blur19" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="blur9" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur30" />
            <feColorMatrix in="blur4" result="color-0-blur" type="matrix" values="1 0 0 0 0 0 0.98 0 0 0 0 0 0.965 0 0 0 0 0 0.8 0" />
            <feOffset in="color-0-blur" result="layer-0-offsetted" dx="0" dy="0" />
            <feColorMatrix in="blur19" result="color-1-blur" type="matrix" values="0.816 0 0 0 0 0 0.494 0 0 0 0 0 0.263 0 0 0 0 0 1 0" />
            <feOffset in="color-1-blur" result="layer-1-offsetted" dx="0" dy="2" />
            <feColorMatrix in="blur9" result="color-2-blur" type="matrix" values="1 0 0 0 0 0 0.667 0 0 0 0 0 0.365 0 0 0 0 0 0.65 0" />
            <feOffset in="color-2-blur" result="layer-2-offsetted" dx="0" dy="2" />
            <feColorMatrix in="blur30" result="color-3-blur" type="matrix" values="1 0 0 0 0 0 0.612 0 0 0 0 0 0.392 0 0 0 0 0 1 0" />
            <feOffset in="color-3-blur" result="layer-3-offsetted" dx="0" dy="2" />
            <feColorMatrix in="blur30" result="color-4-blur" type="matrix" values="0.455 0 0 0 0 0 0.165 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feOffset in="color-4-blur" result="layer-4-offsetted" dx="0" dy="16" />
            <feColorMatrix in="blur30" result="color-5-blur" type="matrix" values="0.424 0 0 0 0 0 0.196 0 0 0 0 0 0.114 0 0 0 0 0 1 0" />
            <feOffset in="color-5-blur" result="layer-5-offsetted" dx="0" dy="64" />
            <feColorMatrix in="blur30" result="color-6-blur" type="matrix" values="0.212 0 0 0 0 0 0.110 0 0 0 0 0 0.075 0 0 0 0 0 1 0" />
            <feOffset in="color-6-blur" result="layer-6-offsetted" dx="0" dy="64" />
            <feColorMatrix in="blur30" result="color-7-blur" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.68 0" />
            <feOffset in="color-7-blur" result="layer-7-offsetted" dx="0" dy="64" />
            <feMerge>
              <feMergeNode in="layer-0-offsetted" />
              <feMergeNode in="layer-1-offsetted" />
              <feMergeNode in="layer-2-offsetted" />
              <feMergeNode in="layer-3-offsetted" />
              <feMergeNode in="layer-4-offsetted" />
              <feMergeNode in="layer-5-offsetted" />
              <feMergeNode in="layer-6-offsetted" />
              <feMergeNode in="layer-7-offsetted" />
              <feMergeNode in="layer-0-offsetted" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
