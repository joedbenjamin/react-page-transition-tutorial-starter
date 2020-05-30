export enum eTransitionType {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

export enum eTransitionTypeValues {
  verticalForward = '0, -100vh',
  verticalBackwards = '0, 100vh',
  horizontalForward = '-100vw, 0',
  horizontalBackwards = '100vw, 0',
}

export interface IPage {
  name?: string;
  background?: any;
  active?: boolean;
  element?: React.RefObject<any>;
  showElement?: boolean;
}

