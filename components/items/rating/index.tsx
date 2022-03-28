import { Box, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';

interface IRatingSliderProps {
  size: number;
  scale: number;
  fillColor: string;
  initialValue?: number;
  onClick?: (rating: number) => void;
}

const Star = ({
  fill,
  fillColor,
}: {
  fill: boolean;
  fillColor: string;
}): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill={fill ? fillColor : 'none'}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const RatingSlider = React.forwardRef<HTMLInputElement, IRatingSliderProps>(
  ({ size, scale, fillColor, onClick, initialValue }, ref) => {
    const [rating, setRating] = useState<number>(initialValue || 0);
    const buttons: JSX.Element[] = [];

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const _onClick = (idx: number) => {
      if (!isNaN(idx)) {
        // allow user to click first icon and set rating to zero if rating is already 1
        if (rating === 1 && idx === 1) {
          setRating(0);
        } else {
          setRating(idx);
        }
        onClick?.(idx);
      }
    };

    const RatingIcon = ({ fill }: { fill: boolean }) => {
      return <Star fill={fill} fillColor={fillColor} />;
    };

    const RatingButton = ({ idx, fill }: { idx: number; fill: boolean }) => {
      return (
        <Box
          as="button"
          aria-label={`Rate ${idx}`}
          height={`${size}px`}
          width={`${size}px`}
          mx={1}
          onClick={() => _onClick(idx)}
          _focus={{ outline: 0 }}
        >
          <RatingIcon fill={fill} />
        </Box>
      );
    };

    for (let i = 1; i <= scale; i++) {
      buttons.push(<RatingButton key={i} idx={i} fill={i <= rating} />);
    }

    return (
      <Stack isInline justify="center" align={'center'}>
        <input name="rating" type="hidden" value={rating} ref={ref} />
        {buttons}
      </Stack>
    );
  },
);

RatingSlider.displayName = 'RatingSlider';

export default RatingSlider;
