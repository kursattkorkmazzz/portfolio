import { useEffect, useState } from "react";

export default function useMobile(){
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // Initial check
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return isMobile;
}