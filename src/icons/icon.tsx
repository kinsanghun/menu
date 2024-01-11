import { color } from "styles/golbal";

export const LeftArrow = () => {
    return (
        <div>
            <svg width={`24`} height={`24`} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M52.5 15L27.5 40L52.5 65" stroke="#000" stroke-width="4" stroke-linecap="round"/>
            </svg>
        </div>
    )
}

export const RightArrow = () => {
    return (
        <div>
            <svg width={`24`} height={`24`} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.5 15L52.5 40L27.5 65" stroke="#000" stroke-width="4" stroke-linecap="round"/>
            </svg>
        </div>
    )
}