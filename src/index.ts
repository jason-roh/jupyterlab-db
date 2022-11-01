import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_db extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_db:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_db is activated!');
  }
};

export default plugin;
