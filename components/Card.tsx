import clsx from "clsx";
import { ReactChildren } from '@/lib/types';

const Card = ({ className, children }: ReactChildren) => {
    return (
        <div
            className={clsx(
                "rounded-3xl px-10 py-4 drop-shadow-xl bg-white",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Card;