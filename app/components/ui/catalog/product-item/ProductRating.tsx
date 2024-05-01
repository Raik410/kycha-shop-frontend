import { IProduct } from '@/types/product.interface';
import { FC, useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
  const [rating, setRating] = useState(
    Math.round(
      product.reviews.reduce((acc, review) => acc + review.rating, 0) /
        product.reviews.length,
    ) || 0,
  );

  return (
    <div className="flex justify-center flex-col">
      <div className="flex flex-row items-center justify-around">
        <Rating
          readonly
          initialValue={rating}
          SVGstyle={{ display: 'inline-block' }}
          size={25}
          allowFraction
          transition
        ></Rating>
        <span className="text-primary">{rating}</span>
      </div>
      <span className="text-center block">
        ({product.reviews.length} reviews)
      </span>
    </div>
  );
};

export default ProductRating;
