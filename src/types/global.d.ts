export type CardInfo = {
  index: number,
  title: string,
  subtitle: string,
  image: string | StaticImageData
}

export type Picture = CardInfo;

export type AuthTypeContext = {
  state: {
    theme: string;
    carouselEndScroll: boolean;
    carouselStartScroll: boolean;
    carouselScroll: boolean;
    touchDevice: boolean;
  },
  changeState: (state: stateType) => void
}

export interface globalStateType {
  theme: string;
  carouselEndScroll: boolean;
  carouselStartScroll: boolean;
  carouselScroll: boolean;
  touchDevice: boolean;
}
