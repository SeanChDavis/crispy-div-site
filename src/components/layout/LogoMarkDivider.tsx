import LogoMark from "../branding/LogoMark.tsx";

export default function LogoMarkDivider({shiftDirection = 'down'}: {
    shiftDirection?: string
}) {
    if (shiftDirection === 'up') {
        shiftDirection = 'top-[-21px]';
    } else if (shiftDirection === 'down') {
        shiftDirection = 'bottom-[-21px]';
    }
    return (
        <div className="relative">
            <LogoMark additionalClasses={`w-9 h-9 ml-[-18px] ${shiftDirection} left-[50%] absolute`} />
        </div>
    );
}