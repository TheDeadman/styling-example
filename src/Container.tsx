interface ContainerProps {
    children?: React.ReactNode;
    count: number;
}

export const Container = ({
    children,
    count
}: ContainerProps) => {
    const countClass = count % 2 === 0 ? 'even' : 'odd';

    return (
        <div className={`app-wrapper ${countClass}`}>
            {children}
        </div>
    )
}