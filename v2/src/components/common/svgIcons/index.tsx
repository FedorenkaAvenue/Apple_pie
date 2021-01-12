import React, { ReactElement } from 'react';

import css from './style.module.sass';
import { circle, triangle, square, cross, triangleRevert, clover } from './icons';

import { IProps } from './interface';

const withButtonWrapper = (svgIcon: ReactElement) => function HOC_MenuIcon(props: IProps) {
    const { title, classNames, handleClick } = props;

    return (
        <div
            className={`${css.button} ${classNames || ''}`}
            onClick={handleClick || null}
        >
            {svgIcon}
            { title && <div className={css.title}>{title}</div> }
        </div>
    );
};

export const CircleButton = withButtonWrapper(circle);
export const TriangleButton = withButtonWrapper(triangle);
export const SquareButton = withButtonWrapper(square);
export const CrossButton = withButtonWrapper(cross);
export const TriangleReverseButton = withButtonWrapper(triangleRevert);
export const CloverButton = withButtonWrapper(clover);
