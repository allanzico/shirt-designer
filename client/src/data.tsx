
import { v4 as uuidv4 } from 'uuid';

export const shirts = [
    {
        id: uuidv4(),
        name: 'Shirt 1',
        collar: 'collar1',
        color: 'blue',
        size: 'M',
        price: 100,
        styles: `{
          '.s0': { fill:  '#1c202b' },
          '.s1': { fill: '#0a1826' },
          '.s2': { fill: '#ffffff' },
          '.s3': { fill: '#ffffff'},
          '.s4': { fill: '#ffffff'},
        }`,
        svg: `

        <g id="shirt-back">
          <path
            id="back-collar-back"
            className="s0"
            d="m160.3 8.7c-6.3 5.2-23.2 7.5-30.5 8.2q-3.5 0.4-6.9 0c-7.3-0.7-24.2-3-30.5-8.2-8.1-6.7-9.8-0.1-9.8-0.1l2 7.7c0 0 0.9-2 8.3 2.1 7.3 4.2 33.1 7.2 33.4 7.3 0.4-0.1 26.2-3.1 33.5-7.3 7.3-4.1 8.3-2.1 8.3-2.1l1.9-7.7c0 0-1.7-6.6-9.7 0.1z"
          />
          <path
            id="back-left-arm"
            className="s0"
            d="m84.4 19.8c0 0-35.2 16.5-45.9 38.1-8.4 17 5.5 53.9 13 89.1-0.4 2.4-0.8 4.5-1.2 6.5-1 5.2-1.9 8.6-1.9 8.6-23.9-0.5-40.7-7.6-46.4-10.4-1.1-0.5-1.7-1.9-1.3-3.1 0.6-2.1 1.2-4.8 1.8-8q0.1 0 0 0c4.7-23.2 10.4-63.7 12.4-78.1 2.3-17.2 10.2-23.4 23.7-29.5 13.6-6.1 40.5-24.5 40.5-24.5 0 0 5.4 11.5 5.3 11.3z"
          />
          <path
            id="back-right-arm"
            className="s0"
            d="m168.3 19.8c0 0 35.2 16.5 45.8 38.1 8.4 17-5.5 53.9-13 89.1 1.6 8.7 3.1 15.1 3.1 15.1 29.8-0.7 48.5-11.4 48.5-11.4-5-13.6-12.6-71-14.9-88.2-2.3-17.2-10.2-23.4-23.8-29.5-13.5-6.1-40.4-24.5-40.4-24.5 0 0-5.4 11.5-5.3 11.3z"
          />
          <path
            id="back-right-sleeve"
            className="s1"
            d="m50.3 153.5c-1 5.2-1.9 8.6-1.9 8.6-23.9-0.5-40.7-7.6-46.4-10.4-1.1-0.5-1.7-1.9-1.3-3.1 0.6-2.1 1.2-4.8 1.8-8q0 0 0 0c6.5 2.7 24.6 9.6 47.8 12.9z"
          />
          <path
            id="back-left-sleeve"
            className="s1"
            d="m202.4 153.5c1 5.2 1.8 8.6 1.8 8.6 29.8-0.7 48.5-11.4 48.5-11.4-0.8-2.2-1.7-5.7-2.6-10.1q0 0 0 0c-6.4 2.7-24.5 9.6-47.7 12.9z"
          />
          <path
            id="back-center"
            className="s1"
            d="m208.3 315.6c-3.9 3.1-17.7 3.6-34.9 4.9-20.6 1.6-32.7 4.9-47.1 4.9-14.4 0-30.7-7.6-52.8-6-16.3 1.2-26.1-0.8-29.1-3.9 2.6-19.9 12.2-94.9 11.5-133.8v-0.2q-0.1-3.6-0.3-6.7c-0.5-8.9-2.1-18.3-4.1-27.8-6.3-29.5-17.1-60.3-15.4-79.4 0.3-3.7 1.1-7 2.4-9.7 10.7-21.6 44.1-52.3 44.1-52.3v0.1c0.1 0.2 0.5 0.9 1.2 2 1 1.5 19.5 14.2 42.5 14.2 23 0 41.5-12.8 42.5-14.3 0.7-1.1 1.1-1.8 1.2-2h0.1c0 0 33.4 30.7 44 52.3 1.4 2.7 2.2 6 2.5 9.7 1.6 19.1-9.2 49.9-15.5 79.4-2 9.5-3.5 18.9-4.1 27.8q-0.1 3.1-0.2 6.7v0.2c-0.7 39 8.9 114.1 11.5 133.9z"
          />
          <path
            id="back-left-side"
            className="s0"
            d="m57.6 319.5c-6.9-0.6-11.3-2.1-13.2-4 2.6-19.9 12.2-94.9 11.5-133.8v-0.2q-0.1-2.7-0.2-5.1c2.5 2.3 4.4 5.1 5.8 8.1 1.4 3.3 2.2 6.8 2.3 10.4 0.4 26.1 0.6 91-6.2 124.6z"
          />
          <path
            id="back-right-side"
            className="s0"
            d="m208.3 315.6c-2 1.6-6.7 2.5-13.1 3.2-6.8-33.7-6.5-98.1-6.1-124.2 0-3.6 0.8-7.1 2.3-10.3 1.3-3 3.2-5.7 5.6-8q-0.1 2.5-0.2 5.2v0.2c-0.7 39 8.9 114.1 11.5 133.9z"
          />
          <path
            id="collar-back-line"
            className="s2"
            d="m173.5 8.8c-0.2 0.4-0.6 0.9-1 1.5-1 1.6-21.1 15.5-46.2 15.5-25 0-45.1-13.9-46.2-15.5q-0.6-0.9-0.9-1.5c2.1-2 3.4-3.2 3.4-3.2v0.1c0.1 0.2 0.5 0.9 1.2 2 1 1.5 19.5 14.2 42.5 14.2 23 0 41.5-12.8 42.5-14.3 0.7-1.1 1.1-1.8 1.2-2h0.1c0 0 1.2 1.2 3.4 3.2z"
          />
          <path
            id="back-bottom"
            className="s2"
            d="m173.4 329.1c-20.6 1.5-32.7 4.8-47.1 4.8-14.4 0-30.7-7.6-52.8-5.9-22.2 1.7-32.3-2.8-29.8-7.6 0 0 0.3-1.8 0.7-4.9 3 3.1 12.8 5.1 29.1 3.9 22.1-1.6 38.4 6 52.8 6 14.4 0 26.5-3.3 47.1-4.9 17.2-1.3 31-1.8 34.9-4.9 0.4 3.1 0.6 4.8 0.6 4.8 3.5 6.7-13.1 7-35.5 8.7z"
          />
          <path
            id="NUMBER"
            className="s3"
            aria-label='11'
            d="m121.2 165h-7.3v-39.2q-0.7 0.8-1.7 1.3-1 0.5-2.2 0.8-1.1 0.2-2.1 0.2v-5.4q1.4-0.2 2.9-1 1.5-0.7 2.7-2 1.2-1.2 2-3h5.7zm18.6 0h-7.4v-39.2q-0.6 0.7-1.6 1.3-1.1 0.5-2.2 0.8-1.1 0.2-2.2 0.2v-5.4q1.5-0.3 3-1 1.4-0.7 2.7-2 1.2-1.2 2-3.1h5.7z"
          />
          <path
            id="NAME"
            className="s3"
            aria-label="NUMBER"
            d="m95.3 93h-2.8v-19.5h2.4l4.1 11.7-0.2-5.3v-6.4h2.7v19.5h-2.1l-4.3-12.1 0.2 5.1zm13.3 0.2q-1.6 0-2.5-0.5-1-0.6-1.4-1.8-0.4-1.1-0.4-2.9v-14.5h2.9v14.4q0 0.9 0.1 1.5 0.1 0.6 0.3 0.9 0.3 0.4 1 0.4 0.6 0 0.9-0.3 0.3-0.4 0.3-1 0.1-0.6 0.1-1.5v-14.4h3v14.5q0 1.8-0.5 2.9-0.4 1.2-1.4 1.8-0.9 0.5-2.4 0.5zm9.7-0.2h-2.7v-19.5h3.7l2.8 14.2 2.6-14.2h3.7v19.5h-2.6v-7.3l0.1-6.6-2.7 13.8h-2.3l-2.8-13.8 0.2 6.6zm17.4 0h-4.3v-19.5h4.2q1.5 0 2.3 0.5 0.9 0.4 1.3 1.4 0.4 0.9 0.4 2.5v0.6q0 1.5-0.4 2.5-0.4 1-1.3 1.4 0.8 0.2 1.2 0.9 0.5 0.7 0.7 1.6 0.2 1 0.2 2.1v0.5q0 1.9-0.5 3.2-0.4 1.2-1.4 1.8-0.9 0.5-2.4 0.5zm-1.4-9.4v7.1h1.1q0.6 0 0.9-0.2 0.4-0.3 0.5-0.9 0.2-0.6 0.2-1.7v-1.5q0-1.5-0.3-2.1-0.3-0.7-1.1-0.7zm0-7.8v5.6h1.1q0.4 0 0.6-0.1 0.3-0.1 0.4-0.4 0.1-0.3 0.2-0.7 0-0.5 0-1.3v-1.2q0-0.8-0.1-1.2-0.2-0.4-0.5-0.5-0.3-0.2-0.7-0.2zm14.6 17.2h-6.7v-19.5h6.6v2.6h-3.6v5.6h3.4v2.6h-3.4v6.2h3.7zm5.2 0h-3v-19.6h4.9q1.5 0 2.3 0.6 0.7 0.6 1 1.8 0.2 1.2 0.2 2.8 0 1.7-0.3 2.7-0.4 1-1.5 1.3 0.6 0.1 0.9 0.5 0.3 0.3 0.6 0.9 0.2 0.6 0.3 1.6 0.1 1 0.1 2.4 0 0.1 0 0.6 0 0.5 0 1.2 0 0.7 0 1.4 0 0.7 0 1.2 0 0.5 0.1 0.6h-3q0-0.1-0.1-0.6 0-0.5 0-1.3 0-0.8 0-1.7 0-1 0-1.8 0-0.9 0-1.6 0-0.9-0.2-1.4-0.1-0.4-0.4-0.6-0.3-0.2-1-0.2l-0.9-0.1zm0-17.2v5.7h1.2q0.5 0 0.8-0.2 0.3-0.3 0.4-0.9 0.1-0.7 0.1-1.9v-0.1q0-1.1-0.1-1.6-0.1-0.6-0.4-0.8-0.3-0.2-1-0.2z"
          />
        </g>
        <g id="shirt-front">
          <path
            id="collar-inside"
            className="s4"
            d="m362.8 9.5v30.4h80.9v-32.2l-25.5 7-24.8 0.7z"
          />
          <path
            id="collar-back"
            className="s0"
            d="m442.9 1.1c0 0-1-3.8-8.6 2.9-4.4 4-14.6 6.3-22.3 7.5-6.3 1-12.7 1-19 0-7.6-1.2-17.9-3.5-22.3-7.5-7.6-6.7-8.5-2.9-8.5-2.9-2.5 5.4 1.2 10.6 1.2 10.6 0 0 0.8-2 7.7 2.2 3.6 2.1 11.7 4 18.8 5.3 8.3 1.5 16.8 1.5 25.1 0 7.2-1.3 15.4-3.2 18.9-5.3 6.9-4.2 7.7-2.2 7.7-2.2 0 0 3.7-5.2 1.3-10.6z"
          />
          <path
            id="collar-front"
            className="s0"
            d="m450.3 6.9l-5.3 11.3v0.1c-0.3 0.4-2.3 3.9-6.2 8.2-6.5 7.3-18.5 16.8-36.3 16.8-17.8 0-29.8-9.5-36.3-16.8-3.9-4.3-5.9-7.8-6.2-8.2v-0.1l-5.3-11.3 3.6-3 4.4-3.6c4.8 25.8 29 36 39.8 36 10.8 0 35-10.2 39.8-36l4.4 3.6z"
          />
          <path
            id="right-arm"
            className="s0"
            d="m361.3 20.3c-0.7-1.1-1.2-1.9-1.3-2v-0.1c0 0-35.6 16.8-46.3 38.6-8.5 17.2 5.5 54.5 13.1 90.2-0.4 2.4-0.8 4.6-1.2 6.5-1.1 5.3-1.9 8.8-1.9 8.8-25-0.6-42.3-8.2-47.4-10.8-0.9-0.4-1.4-1.5-1.1-2.4 0.6-2.2 1.3-5.1 2-8.6q0.1 0 0 0c4.8-23.5 10.5-64.4 12.5-79 2.3-17.4 10.3-23.7 24.1-29.9 13.6-6.2 40.9-24.7 40.9-24.7z"
          />
          <path
            id="center-front"
            className="s1"
            d="m485.4 317.5c-3.9 3.2-17.9 3.7-35.3 5-20.9 1.6-33 5-47.6 5-14.6 0-31.1-7.7-53.5-6.1-16.5 1.3-26.3-0.8-29.4-4 2.7-20 12.3-95.9 11.6-135.3v-0.2q-0.1-3.6-0.2-6.8c-0.6-9-2.2-18.5-4.2-28.1-6.4-29.9-17.3-61-15.6-80.4 0.3-3.7 1.1-7 2.5-9.8 10.7-21.8 46.3-38.6 46.3-38.6v0.1c0.1 0.1 0.6 0.9 1.3 2 1 1.5 2.6 3.7 4.9 6.2 6.5 7.3 18.5 16.9 36.3 16.9 17.8 0 29.8-9.6 36.3-16.9 2.3-2.5 3.9-4.7 4.9-6.2 0.7-1.1 1.2-1.9 1.3-2v-0.1c0 0 35.6 16.8 46.4 38.6 1.3 2.8 2.1 6.1 2.4 9.8 1.7 19.4-9.2 50.5-15.6 80.4-2 9.6-3.6 19.1-4.2 28.1q-0.1 3.2-0.2 6.8v0.2c-0.7 39.4 9 115.5 11.6 135.4z"
          />
          <path
            id="left-arm"
            className="s0"
            d="m443.7 20.3c0.7-1.1 1.2-1.9 1.3-2v-0.1c0 0 35.6 16.8 46.4 38.6 8.4 17.2-5.6 54.5-13.2 90.2 1.5 8.7 3.1 15.3 3.1 15.3 30.1-0.7 49-11.6 49-11.6-5-13.7-12.6-71.8-15-89.2-2.3-17.4-10.3-23.7-24-29.9-13.7-6.2-41-24.7-41-24.7z"
          />
          <path
            id="right-sleave-front"
            className="s1"
            d="m325.6 153.5c-1.1 5.3-1.9 8.8-1.9 8.8-25-0.6-42.3-8.2-47.4-10.8-0.9-0.4-1.4-1.5-1.1-2.4 0.6-2.2 1.3-5.1 2-8.6q0 0 0 0c6.6 2.7 24.9 9.7 48.4 13z"
          />
          <path
            id="left-sleave-front"
            className="s1"
            d="m479.4 153.5c1.1 5.3 1.9 8.8 1.9 8.8 30.1-0.7 49-11.6 49-11.6-0.8-2.2-1.6-5.7-2.5-10.2q0 0 0 0c-6.6 2.7-24.9 9.7-48.4 13z"
          />
          <g id="front-sides">
            <path
              id="front-bottom-side-right"
              className="s0"
              d="m339.6 193.4c0.4 26.9 0.6 93.7-6.4 128.1-7.1-0.6-11.7-2.1-13.6-4 2.7-20.1 12.3-96 11.6-135.4v-0.2q-0.1-3.6-0.2-6.8-0.1-0.6-0.1-1.2c5.4 5 8.6 12.1 8.7 19.5z"
            />
            <path
              id="front-top-side-right"
              className="s2"
              d="m322.3 62.5c-7.9 22.1 4.2 82.2 4.5 84.4-6.4-29.8-17.3-60.9-15.6-80.3 0.3-3.7 1.1-7 2.4-9.8 10.5-21.1 44.2-37.5 46.3-38.5q0.1-0.1 0.1-0.1c0 0-29.8 22.1-37.7 44.3z"
            />
            <path
              id="front-bottom-side-left"
              className="s0"
              d="m465.4 193.4c-0.4 26.9-0.6 93.7 6.4 128.1 7.1-0.6 11.7-2.1 13.6-4-2.7-20.1-12.3-96-11.6-135.4v-0.2q0.1-3.6 0.2-6.8 0.1-0.6 0.1-1.2c-5.4 5-8.6 12.1-8.7 19.5z"
            />
            <path
              id="front-top-side-left"
              className="s2"
              d="m482.7 62.5c7.9 22.1-4.2 82.2-4.5 84.4 6.4-29.8 17.3-60.9 15.6-80.3-0.3-3.7-1.1-7-2.5-9.8-10.4-21.1-44.1-37.5-46.2-38.5q-0.1-0.1-0.1-0.1c0 0 29.8 22.1 37.7 44.3z"
            />
          </g>
          <path
            id="front-bottom-line"
            className="s2"
            d="m450.1 331.2c-20.9 1.6-33 4.9-47.6 4.9-14.6 0-31.1-7.6-53.5-6-22.4 1.7-32.6-2.8-30.1-7.7 0 0 0.3-1.7 0.7-5 3.1 3.2 12.9 5.3 29.4 4 22.4-1.6 38.9 6.1 53.5 6.1 14.6 0 26.7-3.4 47.6-5 17.4-1.3 31.4-2.1 35.3-5.1 0.4 3.2 0.7 5 0.7 5 3.5 6.8-13.3 7.1-36 8.8z"
          />
          <path
            id="collar-front-line"
            className="s2"
            d="m450.3 6.9l-5.3 11.3v0.1c-0.3 0.4-2.1 3.9-5.9 8.2-6.6 7.3-18.8 16.8-36.6 16.8-17.8 0-29.8-9.5-36.3-16.8-3.9-4.3-5.9-7.8-6.2-8.2v-0.1l-5.3-11.3 3.6-3c6.4 27.2 32.5 37.3 44.2 37.3 11.8 0 37.8-10.1 44.2-37.3z"
          />
        </g>
        `
    },
]