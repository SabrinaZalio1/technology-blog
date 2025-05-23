import { IIcon } from '../../interfaces/Icon';

export default function ArrowRight({ color = '#D8F34E', size = 20 }: IIcon) {
   return (
      <svg
         width={size}
         height="10"
         viewBox="0 0 20 10"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M15.25 1.25L19 5M19 5L15.25 8.75M19 5L1 5"
            stroke={color}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
         />
      </svg>
   );
}
