interface ContainerProps {
    
        children?: React.ReactNode;
        count: number;
        className: string;
    
}

export const Container = ({
    children,
    count,
    className
}: ContainerProps) => {
    const specialClass = count % 2 === 0 ? 'even' : 'odd';

    return (
        <div className={`app-wrapper ${className} ${specialClass}`}>
            {children}
        </div>
    )
}