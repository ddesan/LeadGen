import React from 'react';
import { NextComponentType, NextPageContext } from 'next-server/dist/lib/utils';
import { PublicRouterInstance } from './router';
export declare type WithRouterProps = {
    router: PublicRouterInstance;
};
export declare type ExcludeRouterProps<P> = Pick<P, Exclude<keyof P, keyof WithRouterProps>>;
export default function withRouter<P extends WithRouterProps, C = NextPageContext>(ComposedComponent: NextComponentType<C, any, P>): React.ComponentClass<ExcludeRouterProps<P>>;
