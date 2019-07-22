import { FilterOpts } from './filter';
import { Effect } from './../effect/index';

export const origin = function(opts: FilterOpts ) {
  const { imageData } = opts;
  return imageData;
}

// base image process filter

export const grayscale = function(opts: FilterOpts ) {
  const { imageData } = opts;
  let effect:Effect|null = new Effect(imageData);
  const rsImageData = effect.process('grayscale').getImageData();
  effect.destory();
  effect = null;
  return rsImageData;
}

export const hue = function(opts: FilterOpts ) {
  const { imageData, options } = opts;
  let effect:Effect|null = new Effect(imageData);
  const rsImageData = effect.process('hue', options).getImageData();
  effect.destory();
  effect = null;
  return rsImageData;
}

export const lightness = function(opts: FilterOpts ) {
  const { imageData, options } = opts;
  let effect:Effect|null = new Effect(imageData);
  const rsImageData = effect.process('lightness', options).getImageData();
  effect.destory();
  effect = null;
  return rsImageData;
}

export const saturation = function(opts: FilterOpts ) {
  const { imageData, options } = opts;
  let effect:Effect|null = new Effect(imageData);
  const rsImageData = effect.process('saturation', options).getImageData();
  effect.destory();
  effect = null;
  return rsImageData;
}

export const invert = function(opts: FilterOpts ) {
  const { imageData, options } = opts;
  let effect:Effect|null = new Effect(imageData);
  const rsImageData = effect.process('invert', options).getImageData();
  effect.destory();
  effect = null;
  return rsImageData;
}

export const sobel = function(opts: FilterOpts ) {
  const { imageData, options } = opts;
  let effect:Effect|null = new Effect(imageData);
  const rsImageData = effect.process('sobel', options).getImageData();
  effect.destory();
  effect = null;
  return rsImageData;
}

// multiple image process filter

export const lineDrawing = function(opts: FilterOpts ) {
  const { imageData, options } = opts;
  let effect:Effect|null = new Effect(imageData);
  const rsImageData = effect.process('sobel', options).process('invert', options).getImageData();
  effect.destory();
  effect = null;
  return rsImageData;
}

export const natural = function(opts: FilterOpts ) {
  const { imageData, options } = opts;
  let effect:Effect|null = new Effect(imageData);
  const rsImageData = effect.process('saturation', {percent: 76 }).getImageData();
  effect.destory();
  effect = null;
  return rsImageData;
}

export const alpha = function(opts: FilterOpts ) {
  const { imageData, options } = opts;
  let effect:Effect|null = new Effect(imageData);
  const rsImageData = effect.process('alpha', options).getImageData();
  effect.destory();
  effect = null;
  return rsImageData;
}
