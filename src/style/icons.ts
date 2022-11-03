import { LabIcon } from '@jupyterlab/ui-components';
import cloneSvg from '../../style/icons/clone.svg';
import dbSvg from '../../style/icons/database.svg';

export const cloneIcon = new LabIcon({
    name: 'git:clone',
    svgstr: cloneSvg
});

export const dbIcon = new LabIcon({
    name: 'db:clone',
    svgstr: dbSvg
});
