import './BinIcon.css';
export function BinIcon ( {variant} ) {
    const colors = {
        normal: '#000',
        error: '#ff0000',
        hover: '#06a0f9',
    };

    // function getColor() {
    //     if (variant === 'normal') {
    //         return colors.normal;
    //     } else if (variant === 'error') {
    //         return colors.error;
    //     } else if (variant === 'hover') {
    //         return colors.hover;
    //     } else {
    //         return 'normal';
    //     }
    // }

    // --------------

    switch (variant) {
        case 'normal':
        return colors.normal;
        case 'error':
        return colors.error;
        case 'hover':
            return colors.hover;
        default:
            return colors.normal;
    }

    //---------------

    // if (!variant) {
    //     return colors.normal;
    // }
    // return colors[variant]; // === colors.normal

    return (
        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.6023 6.47831C19.9948 6.12081 16.3656 5.93665 12.7473 5.93665C10.6023 5.93665 8.45727 6.04498 6.31227 6.26165L4.10227 6.47831" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0606 5.38413L10.2989 3.96496C10.4722 2.93579 10.6022 2.16663 12.4331 2.16663H15.2714C17.1022 2.16663 17.2431 2.97913 17.4056 3.97579L17.6439 5.38413" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.2731 9.90173L20.5689 20.8109C20.4497 22.5117 20.3522 23.8334 17.3297 23.8334H10.3747C7.35223 23.8334 7.25473 22.5117 7.13556 20.8109L6.4314 9.90173" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0432 17.875H15.6507" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.144 13.5416H16.5607" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    )
}