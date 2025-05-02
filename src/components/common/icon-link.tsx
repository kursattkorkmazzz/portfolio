import Icon from '@mdi/react';
import * as Icons from "@mdi/js"
import Link from 'next/link';
import { HTMLAttributeAnchorTarget } from 'react';
import { twMerge } from 'tailwind-merge';

type IconLinkProps = {
    icon: keyof typeof Icons
    target?:HTMLAttributeAnchorTarget
    link: string;
    className?: string;
    }
export default function IconLink(props : IconLinkProps) {
    return <Link href={props.link} target={props.target}>
    <Icon path={(Icons as any)[props.icon]} className={twMerge("w-8 h-8 hover:cursor-pointer hover:scale-115 transition-all duration-100",props.className)} />
    </Link>
}