export namespace YandexMapModule {
  export interface IYandexMap {
    action: any;
    balloon: any;
    behaviors: any;
    container: any;
    controls: any;
    converter: any;
    copyrights: any;
    cursors: any;
    events: any;
    geoObjects: any;
    hint: any;
    layers: any;
    margin: any;
    options: any;
    panes: any;
    zoomRange: any;

    destroy(): void;

    getBounds(options?: any): number[][];

    getCenter(options?: any): number[];

    getGlobalPixelCenter(options?: any): number[];

    getPanoramaManager(): Promise<any>;

    getType(): string | any;

    getZoom(): number;

    panTo(center: number[] | object[], options?: any): Promise<void>;

    setBounds(bounds: number[][], options?: any): Promise<void>;

    setCenter(center: number[], zoom?: number, options?: any): Promise<void>;

    setGlobalPixelCenter(globalPixelCenter: number[], zoom?: number, options?: any): Promise<void>;

    setType(type: string | any, options?: any): Promise<void>;

    setZoom(zoom: number, options?: any): Promise<void>;
  }

  export interface IYandexMapState {
    behaviors?: string[];
    bounds?: number[][];
    center?: number[];
    controls?: string[];
    margin?: number[][] | number[];
    type?: 'yandex#map' | 'yandex#satellite' | 'yandex#hybrid';
    zoom?: number;
  }

  export interface IYandexMapOptions {
    autoFitToViewport?: 'none' | 'ifNull' | 'always';
    avoidFractionalZoom?: boolean;
    exitFullscreenByEsc?: boolean;
    fullscreenZIndex?: number;
    mapAutoFocus?: boolean;
    maxAnimationZoomDifference?: number;
    maxZoom?: number;
    minZoom?: number;
    nativeFullscreen?: boolean;
    projection?: any;
    restrictMapArea?: boolean;
    suppressMapOpenBlock?: boolean;
    suppressObsoleteBrowserNotifier?: boolean;
    yandexMapAutoSwitch?: boolean;
    yandexMapDisablePoiInteractivity?: boolean;
  }

  export interface IPlacemarkOptions {
    cursor?: string;
    draggable?: boolean;
    hasBalloon?: boolean;
    hasHint?: boolean;
    hideIconOnBalloonOpen?: boolean;
    iconOffset?: number[];
    iconShape?: any;
    interactiveZIndex?: boolean;
    interactivityModel?: string;
    openBalloonOnClick?: boolean;
    openEmptyBalloon?: boolean;
    openEmptyHint?: boolean;
    openHintOnHover?: boolean;
    pane?: string;
    pointOverlay?: string;
    syncOverlayInit?: boolean;
    useMapMarginInDragging?: boolean;
    visible?: boolean;
    zIndex?: number;
    zIndexActive?: number;
    zIndexDrag?: number;
    zIndexHover?: number;
  }
}
