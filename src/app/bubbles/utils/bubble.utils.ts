import { GeneralUtils } from './general.utils';

export class BubbleUtils {
  private static defaultOptions: BubbleWallOptions = {
    bubbles: 100,
    minRadius: 10,
    maxRadius: 50,
    minLeft: -5,
    maxLeft: 105,
    minBottom: -70,
    maxBottom: 150,
    durationRiseMin: 10,
    durationRiseMax: 40,
    durationTranslationMin: 1,
    durationTranslationMax: 4,
    delayMin: 0,
    delayMax: 40,
  };

  static getFixedBubbleWallOptions(
    options: BubbleWallOptions
  ): BubbleWallOptions {
    return GeneralUtils.mergeObjects(options, this.defaultOptions);
  }

  static getDurationRiseFromRadius(
    radius: number,
    opt: BubbleWallOptions
  ): number {
    return (
      Math.abs(
        GeneralUtils.adjustInterval(
          radius / opt.maxRadius,
          opt.durationRiseMin,
          opt.durationRiseMax
        ) - opt.durationRiseMax
      ) + opt.durationRiseMin
    );
  }

  static getDurationTranslation(opt: BubbleWallOptions): number {
    return GeneralUtils.randomInterval(
      opt.durationTranslationMin,
      opt.durationTranslationMax
    );
  }

  static getDelay(opt: BubbleWallOptions): number {
    return GeneralUtils.randomInterval(opt.delayMin, opt.delayMax);
  }

  static getRandomRadius(opt: BubbleWallOptions): number {
    return GeneralUtils.randomIntInterval(opt.minRadius, opt.maxRadius);
  }

  static getRandomLeft(opt: BubbleWallOptions): number {
    return GeneralUtils.randomIntInterval(opt.minLeft, opt.maxLeft);
  }

  static generateBubbleData(opt: BubbleWallOptions): BubbleData {
    let radius = this.getRandomRadius(opt);
    let left = this.getRandomLeft(opt);
    return {
      bottom: radius * 2,
      left: left,
      radius: radius,
      durationRise: this.getDurationRiseFromRadius(radius, opt),
      durationTransl: this.getDurationTranslation(opt),
      delay: this.getDelay(opt),
    };
  }
}

export interface BubbleWallOptions {
  bubbles?: number;
  minRadius?: number;
  maxRadius?: number;
  minLeft?: number;
  maxLeft?: number;
  minBottom?: number;
  maxBottom?: number;
  durationRiseMin?: number;
  durationRiseMax?: number;
  durationTranslationMin?: number;
  durationTranslationMax?: number;
  delayMin?: number;
  delayMax?: number;
}

export interface BubbleData {
  bottom?: number;
  left: number;
  radius?: number;
  color?: string;
  durationRise?: number;
  durationTransl?: number;
  delay?: number;
}

export interface BubbleWallData {
  id: string;
  options: BubbleWallOptions;
}
