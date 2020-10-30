import React, { ReactElement } from 'react'
import * as Styled from './MovieSpinner.styles'

export default function MovieSpinner({ fill }: any): ReactElement {
  return (
    <Styled.MovieLogo width="100%" height="100%" viewBox="0 0 1173 1280">
      <path
        fill={fill}
        d="M271.4 75.7c-24.7 41.6-45 76.2-45.2 76.8-.1.6 26 17.1 58 36.7 124 75.5 779.7 475.4 787.3 480l8 5-5-.7c-5.2-.7-126.9-20.8-357-59-74.8-12.4-175.1-29.1-223-37-47.8-7.9-158.9-26.4-246.9-41C159.7 521.9 87.4 510 87 510c-.4 0-1 2.4-1.4 5.2C84.2 526.4 1 1108.7.5 1111.5l-.7 3 97.9 16.2c318.3 52.9 456.2 75.8 522.8 86.8 221.5 36.7 370.8 61.5 372.9 62.1 2.2.5 2.4.2 3.5-5.8.6-3.5 20-139 43.1-301.3 28.1-196.5 42.6-295.5 43.5-296.5.7-.8 21.2-34.9 45.4-75.8 41.4-69.7 44.1-74.6 44.1-79v-4.7L968.7 392c-112.3-68.5-302.9-184.7-423.6-258.2C335.5 6 325.5 0 321 0h-4.7l-44.9 75.7zm121.8-8.6c9.3 5.6 16.8 10.5 16.8 10.8 0 .3-18.3 11.5-40.6 24.7l-40.5 24.1-16-10c-8.7-5.5-15.9-10.2-15.9-10.6.1-.6 78-49.1 79-49.1.3 0 8 4.6 17.2 10.1zm173 233.7c161.3 100.6 343.7 214.3 405.3 252.7 61.6 38.4 113 70.4 114.2 71.2 2.2 1.4 2.1 1.5-3.8 11.3l-6 9.9-17.7-10.8c-9.7-5.9-100.7-61.4-202.2-123.3-101.5-61.9-277.4-169.1-391-238.3-113.6-69.2-207.1-126.3-207.8-127-1-.9.3-3.9 6.8-14.8 4.5-7.5 8.3-13.7 8.5-13.7.3 0 132.5 82.3 293.7 182.8zm-31.7-147.6c8.3 5 15.6 9.7 16.4 10.3 1.1 1.1-6 5.7-39.9 25.9-22.6 13.5-41.4 24.6-41.7 24.6-.3 0-7.9-4.6-16.9-10.3-15.9-9.9-16.4-10.2-14.2-11.7 15.6-10.5 78.7-48.8 79.8-48.4.8.3 8.3 4.6 16.5 9.6zM692 249.9c-.1.7-81.7 49.4-83.7 49.9-1.2.3-31.3-17.7-31.3-18.8 0-.3 18.5-12 41.2-26.1l41.1-25.6 16.3 10c9 5.5 16.4 10.2 16.4 10.6zm122.9 74.3c8.3 5.1 15.1 9.5 15.1 9.8-.1.9-84.4 50.5-86 50.5-2.4 0-29.1-16.8-28.1-17.8 1.3-1.3 82.5-51.7 83.3-51.7.4 0 7.5 4.2 15.7 9.2zm138.8 84.5c8.9 5.4 16.2 10.1 16.3 10.5 0 .4-7.5 5.2-16.7 10.7-9.3 5.4-28.9 17.1-43.7 26L882.7 472l-15.9-9.9-15.9-9.9 31.8-19.8c17.5-10.9 36.7-22.8 42.8-26.6 6-3.7 11.2-6.8 11.5-6.8.3 0 7.8 4.4 16.7 9.7zM1109 504c0 .6-86.8 52.4-88.5 52.8-1.5.4-30.9-17.7-30.1-18.5.3-.3 19.9-12.6 43.6-27.3l43.2-26.9 15.9 9.7c8.7 5.3 15.9 9.9 15.9 10.2zm-896.5 49c56.7 9.4 124.6 20.6 151 25 26.4 4.4 80.9 13.4 121 20 121.4 20.1 209 34.6 269 44.5 31.4 5.2 95.3 15.8 142 23.5 46.8 7.7 101.4 16.8 121.5 20 20.1 3.3 37.4 6.2 38.6 6.5 2 .4 2 .5-.9 12.2-1.6 6.5-3 11.9-3.2 12.1-.3.3-13.5-1.7-231-34.8-29.1-4.4-73.5-11.2-98.5-15-101.5-15.4-140.2-21.3-197-30-32.7-5-74.1-11.3-92-14-17.9-2.7-62.2-9.5-98.5-15s-80.6-12.3-98.5-15c-90.9-13.8-131.4-20-131.7-20.4-.2-.1 0-8.7.3-18.9.7-18.3.8-18.6 2.8-18.2 1.2.3 48.5 8.2 105.1 17.5zm-31 73.5c68.4 9.9 84.9 12.3 154.8 22.5 14.9 2.2 80.1 11.6 144.7 21s129.8 18.8 144.8 21c14.9 2.2 39.5 5.8 54.5 8 14.9 2.2 67.7 9.8 117.2 17 86.5 12.5 113.6 16.5 171.5 24.9 14.6 2.2 36.9 5.4 49.5 7.2 12.7 1.8 23.3 3.5 23.7 3.8.4.4-1.2 8.8-3.6 18.6-9 36.3-59 240-66.7 271.5-4.4 17.9-10 40.6-12.4 50.5-2.4 9.9-9.5 38.9-15.8 64.5-6.3 25.6-12.5 50.9-13.8 56.2-1.5 6.4-2.8 9.8-3.6 9.8-.8 0-20.4-3.4-43.6-7.5-23.2-4.1-136.9-24.1-252.7-44.5-453.9-80-538.2-94.9-538.4-95.2-.1-.2.4-22.1 1.1-48.8.6-26.7 2.1-85.6 3.3-131 1.1-45.4 2.5-99.4 3-120 .5-20.6 1.4-56 2-78.5.5-22.6 1.3-50.4 1.6-61.8l.7-20.8 2.6.5c1.4.3 35.5 5.3 75.6 11.1z"
      />
      <path d="M175.6 647.8c-.5.9-4.2 27.6-13.1 95.7-2.5 19.2-6.4 48.7-8.6 65.5-8.7 66.9-12 92-16.4 125.5-2.5 19.2-6.4 48.3-8.5 64.5-6.1 46.3-7.2 56.1-6.7 56.6.2.3 15 2.9 32.8 6 17.8 3 60.3 10.2 94.4 15.9 34.1 5.8 80.5 13.6 103 17.4 22.6 3.9 67.8 11.5 100.5 17 32.7 5.6 78 13.2 100.5 17 22.6 3.9 67.8 11.5 100.5 17 62.2 10.6 108.6 18.4 192.6 32.6 27.6 4.7 51.3 8.5 52.8 8.5 2.1 0 2.6-.5 2.6-2.5 0-1.3 13.7-93.9 30.5-205.7 16.8-111.8 30.8-205.2 31.2-207.4.5-4.1.5-4.1-2.8-4.8-1.9-.3-27.2-4.2-56.4-8.6-111.2-16.9-133.9-20.3-197.5-30-36-5.5-86.4-13.1-112-17-25.6-3.9-58.2-8.8-72.5-11-14.3-2.2-46.9-7.1-72.5-11-25.6-3.9-76-11.5-112-17s-86.4-13.1-112-17c-25.6-3.9-47.2-7.3-48.2-7.6-.9-.2-1.9-.1-2.2.4zM262 716c11.3 1.1 45.9 4.5 77 7.5s88.9 8.6 128.5 12.4c81.4 8 153.2 14.9 222 21.6 25.9 2.5 74.5 7.2 108 10.5 33.6 3.3 80.4 7.8 104 10.1 23.7 2.3 43.1 4.2 43.2 4.3.1.1-14.2 43.2-31.8 95.6-17.7 52.5-42.1 125.4-54.3 162l-22.3 66.5-2.9-.3c-4.9-.4-205.6-19.1-227.4-21.2-11.3-1.1-73.6-6.9-138.5-13s-129.7-12.2-144-13.5c-14.3-1.4-60.4-5.7-102.5-9.6-42.1-3.9-77-7.2-77.7-7.4-.9-.3-.9-1.4.2-4.7.7-2.4 3.7-12.2 6.5-21.8 2.8-9.6 6.9-23.4 9-30.5 2.1-7.2 20.6-69.5 41-138.5 43.5-147.2 38.9-132 40.3-132 .7 0 10.4.9 21.7 2z" />
    </Styled.MovieLogo>
  )
}
