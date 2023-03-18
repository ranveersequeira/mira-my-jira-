import clsx from "clsx";
import "@/styles/global.css";


type Props = {
    children?: JSX.Element | JSX.Element[];
    className: string
};

const GlassPane = ({ children, className }: Props) => {
    return (
        <div
            className={clsx(
                "glass rounded-2xl border-solid border-2 border-gray-200",
                className
            )}
        >
            {children}
        </div>
    );
};

export default GlassPane;