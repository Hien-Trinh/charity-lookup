export const Left = ({
    fill = "currentColor",
    filled,
    size,
    height,
    width,
    label,
    ...props
}) => {
    return (
        <svg
            transform="translate(-4 5.5) rotate(90)"
            width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 24 24"
            fill={filled ? fill : "none"}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M.5,15V0"
                transform="translate(6.274 0.75)"
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth={1.5}
            />
            <path
                d="M12.049,0S8.788,6.05,6.026,6.05,0,0,0,0"
                transform="translate(0.75 9.7)"
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth={1.5}
            />
        </svg>
    )
}

export const Right = ({
    fill = "currentColor",
    filled,
    size,
    height,
    width,
    label,
    ...props
}) => {
    return (
        <svg
            transform="translate(4 -5) rotate(-90)"
            width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 24 24"
            fill={filled ? fill : "none"}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M.5,15V0"
                transform="translate(6.274 0.75)"
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth={1.5}
            />
            <path
                d="M12.049,0S8.788,6.05,6.026,6.05,0,0,0,0"
                transform="translate(0.75 9.7)"
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth={1.5}
            />
        </svg>
    )
}
