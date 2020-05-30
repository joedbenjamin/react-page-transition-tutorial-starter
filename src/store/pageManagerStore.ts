import { computed, observable, action } from 'mobx';
import { pagesData } from './data';
import { eTransitionType, eTransitionTypeValues, IPage } from './types';

export class Page implements IPage {
  @observable
  name?: string;

  @observable
  background: any;

  @observable
  active?: boolean;

  @observable
  element?: React.RefObject<any>;

  @observable
  showElement?: boolean;
}

class PageManagerStore {
  @observable
  pages: IPage[] = pagesData;

  @observable
  currentPageIndex?: number;

  @observable
  shouldReverseAnimation: boolean = false;

  @observable
  transitionType: eTransitionType = eTransitionType.vertical;

  @computed
  get transitionDirections(): any {
    let result = {};
    const {verticalForward, verticalBackwards, horizontalForward, horizontalBackwards} = eTransitionTypeValues;
    if (this.transitionType === eTransitionType.vertical) {
      result = {
        forwards: this.shouldReverseAnimation ? verticalForward : verticalBackwards,
        backwards: this.shouldReverseAnimation ? verticalBackwards : verticalForward
      };
    } else {
      result = {
        forwards: this.shouldReverseAnimation ? horizontalForward : horizontalBackwards,
        backwards: this.shouldReverseAnimation ? horizontalBackwards : horizontalForward
      };
    }
    return result;
  }

  @action
  setPageActive = (e: any) => {
    e.preventDefault();
    const name = e.currentTarget.name;
    const pageIndex = this.pages.findIndex((page) => page.name === name);
    this.currentPageIndex = pageIndex;
    const page = this.pages[pageIndex];
    if (!page?.active) {
      this.pages = this.pages.map((page) => {
        page.active = page.name === name ? true : false;
        return page;
      });
    }
  };
}

export interface IPageManagerStore {
  pageManagerStore?: PageManagerStore;
}

const pageManagerStore = new PageManagerStore();

export default pageManagerStore;
