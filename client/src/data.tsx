import ShirtsCollar from "components/shirt/ShirtsCollar";
import { v4 as uuidv4 } from 'uuid';

export const footballShirts = {
    collarShirts: [
        {
            id: uuidv4(),
            element: <ShirtsCollar />,
            styles: `
            {
                '.s0': { fill: '#09f' },
                '.s1': { fill: '#1c202b' },
                '.s2': { fill: '#ffffff' },
                '.s3': { fill: '#ffffff', stroke: '#e5a72c', strokeMiterlimit: '10', strokeWidth: '0.3' },
                '.s4': { fill: '#0a1826' },
              }
          `
        }
    ],
}