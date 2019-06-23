import './index.less';

import { ActionSheet, ActionSheetOpts, } from '../../component/action-sheet/index';
import { Panel, PanelOpts, } from '../panel/index';
import cacheHub from './../../service/cache-hub';
import eventHub from './../../service/event-hub';
import schemaParser from './../../service/schema-parser';
import filterGray from './../../core/filter/gray';


export interface DashboardOpts {
  zIndex: number;
}

export class Dashboard {
  private _mount: HTMLElement = null;
  private _opts: DashboardOpts = null;
  private _hasRendered: boolean = false;

  constructor(mount: HTMLElement, opts: DashboardOpts) {
    this._mount = mount;
    this._opts = opts;
    this._render();
  }

  private _render() {
    if (this._hasRendered === true) {
      return;
    }
    const options: DashboardOpts = this._opts;
    const { zIndex, } = options;
    const html = `
      <div class="pictool-module-dashboard" style="z-index:${zIndex};">
        <div class="pictool-dashboard-navlist">
          <div class="pictool-dashboard-nav-btn dashboard-filter" data-nav-action="filter" >
            <span>滤镜</span>
          </div>
          <div class="pictool-dashboard-nav-btn dashboard-adjust" data-nav-action="adjust" >
            <span>调节</span>
          </div>
          <div class="pictool-dashboard-nav-btn dashboard-edit" data-nav-action="edit" >
            <span>编辑</span>
          </div>
          <!--
          <div class="pictool-dashboard-nav-btn dashboard-text" data-nav-action="text" >
            <span>文字</span>
          </div>
          -->
        </div>
      </div>
    `;
    this._mount.innerHTML = html;
    this._registerEvent();
    this._hasRendered = true;
  }

  private _registerEvent() {
    if (this._hasRendered === true) {
      return;
    }
    const options: DashboardOpts = this._opts;
    const { zIndex, } = options;
    const btnFiler = this._mount.querySelector('[data-nav-action="filter"]');
    const btnAdjust = this._mount.querySelector('[data-nav-action="adjust"]');
    const btnEdit = this._mount.querySelector('[data-nav-action="edit"]');
    const btnText = this._mount.querySelector('[data-nav-action="text"]');

    const opts : ActionSheetOpts = {
      mount: this._mount,
      height: 120,
      zIndex: zIndex + 1,
    };
    const filterPanel = this._initFilterPanel();
    btnFiler.addEventListener('click', function() {      
      filterPanel.show();
    });

    const adjustPanel = this._initAdjustPanel();
    btnAdjust.addEventListener('click', function() {
      adjustPanel.show();
    });

    const editPanel = this._initEditPanel();
    btnEdit.addEventListener('click', function() {
      editPanel.show();
    });

    // btnText.addEventListener('click', function() {
    //   console.log('text')
    // });
  }

  private _initFilterPanel() {
    const options: DashboardOpts = this._opts;
    const { zIndex, } = options;
    const panel = new Panel({
      title: '滤镜',
      mount: this._mount,
      zIndex: zIndex + 1,
      navList: [{
        name: '黑白',
        feedback() {
          const sketchSchema = cacheHub.get('Sketch.originSketchSchema');
          const imageData = schemaParser.parseImageData(sketchSchema);
          const grayImageData = filterGray.parseGrayImageData(imageData);
          const newSchema = schemaParser.parseImageDataToSchema(grayImageData);
          return Promise.resolve(newSchema);
        }
      }, {
        name: '柔和',
        feedback() {
          const sketchSchema = cacheHub.get('Sketch.originSketchSchema');
          // const imageData = schemaParser.parseImageData(sketchSchema);
          // const grayImageData = filterGray.parseGrayImageData(imageData);
          // const newSchema = schemaParser.updateSchemaImageData(sketchSchema, grayImageData);
          return Promise.resolve(sketchSchema);
        }
      }]
    });
    return panel;
  }

  private _initAdjustPanel() {
    const options: DashboardOpts = this._opts;
    const { zIndex, } = options;
    const panel = new Panel({
      title: '调节',
      mount: this._mount,
      zIndex: zIndex + 1,
      navList: [{
        name: '亮度',
        feedback() {
          // TODO
          const sketchSchema = cacheHub.get('Sketch.originSketchSchema');
          return Promise.resolve(sketchSchema);
        }
      }, {
        name: '对比度',
        feedback() {
          // TODO
          const sketchSchema = cacheHub.get('Sketch.originSketchSchema');
          return Promise.resolve(sketchSchema);
        }
      }, {
        name: '饱和度',
        feedback() {
          // TODO
          const sketchSchema = cacheHub.get('Sketch.originSketchSchema');
          return Promise.resolve(sketchSchema);
        }
      }, {
        name: '锐化',
        feedback() {
          // TODO
          const sketchSchema = cacheHub.get('Sketch.originSketchSchema');
          return Promise.resolve(sketchSchema);
        }
      }, {
        name: '虚化',
        feedback() {
          // TODO
          const sketchSchema = cacheHub.get('Sketch.originSketchSchema');
          return Promise.resolve(sketchSchema);
        }
      }, ]
    });
    return panel;
  }

  private _initEditPanel() {
    const options: DashboardOpts = this._opts;
    const { zIndex, } = options;
    const panel = new Panel({
      title: '编辑',
      mount: this._mount,
      zIndex: zIndex + 1,
      navList: [{
        name: '旋转',
        feedback() {
          // TODO
          const sketchSchema = cacheHub.get('Sketch.originSketchSchema');
          return Promise.resolve(sketchSchema);
        }
      }]
    });
    return panel;
  }

}
